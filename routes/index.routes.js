import express from 'express';
import articleRoute from './articles.routes.js';
import userRouter from './user.routes.js';

const route = express();

route.use('/articles', articleRoute);
route.use('/user', userRouter);
route.get('/docs', (req, res) => {
  res.redirect('https://documenter.getpostman.com/view/17577991/Uz5FHvhD');
});

route.use('*', (req, res) => {
  res.status(200).send({
    success: true,
    message: 'The server is currently up and running'
  });
});

export default route;
