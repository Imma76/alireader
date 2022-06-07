import userModel from '../models/user.model.js';

const createUserService = async (newUser) => {
  await userModel.create(newUser);
};
const loginUserService = (email) => {
  const result = userModel.findOne({ email });
  return result;
};

export default {
  createUserService,
  loginUserService

};
