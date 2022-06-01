import express from 'express';
import userController from '../controllers/user.controller.js';
import validator from '../validators/validator.js';
import validatorSchema from '../validators/validator.schema.js';

const userRouter = express.Router();

userRouter.post('/create_user', [validator(validatorSchema.createUserSchema)
], userController.createUser);
userRouter.post('/login_user', [validator(validatorSchema.loginUserSchema)], userController.loginUser);

export default userRouter;
