/* eslint-disable class-methods-use-this */
import bycrypt from 'bcrypt';
import Jwt from 'jsonwebtoken';
import validator from '../validators/validator.js';
import validatorSchema from '../validators/validator.schema.js';
import userService from '../services/user.services.js';

class UserController {
  async createUser(req, res) {
    const { email, fullname, password } = req.body;
    await validator(validatorSchema.createUserSchema, req.body);
    const data = { email, password: bycrypt.hashSync(password, 8), fullname };

    await userService.createUserService(data);
    return res.status(201).send({ message: true, body: 'user created successfully' });
  }

  async loginUser(req, res) {
    const { email, password } = req.body;
      await validator(validatorSchema.loginUserSchema, req.body);
    //   await userService.loginUserService(email)
     userService.loginUserService(email).exec((err, user) => {
      if (err) {
        return res.status(500).send({ message: false, body: err.message });
      }
      if (!user) {
        return res.status(404).send({ message: false, body: 'user does not exist' });
      }
      const userIsValidated = bycrypt.compareSync(password, user.password);
      if (!userIsValidated) {
        return res.status(404).send({ message: false, body: 'password is invalid' });
      }
      const token = Jwt.sign({ id: user.id }, process.env.API_SECRET, ({ expiresIn: 5000 }));
      return res.status(200).send({ message: true, body: { message: 'user logged in successful', user: { email: user.email, fullname: user.fullname } }, token });
    });
  }
}
export default new UserController();