import express from 'express';
import 'express-async-errors';
import dotenv from 'dotenv';
import middleware from './middlewares/middleware.js';

dotenv.config();
const app = express();

middleware(app);
app.listen(5000, () => {
  console.log('server listening on port 5000');
});
