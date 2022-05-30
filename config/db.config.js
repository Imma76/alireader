import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const database = () => {
  mongoose.connect(process.env.DATABASE_URI).then(() => {
    console.log('database connected');
  }).catch((err) => console.log(err));
};

export default database;
