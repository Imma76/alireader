import express from 'express';
import 'express-async-errors';
import dotenv from 'dotenv';
import middleware from './middlewares/middleware.js';

dotenv.config();
const app = express();

middleware(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('server listening on port', PORT);
});
