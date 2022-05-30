import express from 'express';
import route from '../routes/index.routes.js';
import database from '../config/db.config.js';
import handleError from './error.handler.js';

const middleware = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  database();
  app.use(route);
  app.use(handleError);
};

export default middleware;
