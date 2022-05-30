import express from 'express';
import articleRoute from './articles.routes.js';
import userRouter from './user.routes.js';

const route = express();

route.use('/articles', articleRoute);
route.use('/user', userRouter);

export default route;
