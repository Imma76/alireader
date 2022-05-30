import express from 'express';
import userController from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.post('/create_user', userController.createUser);
userRouter.post('/login_user', userController.loginUser);

export default userRouter;
