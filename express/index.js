import path from 'path';
//Basics express middlewares import
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

//routes
import { handleError } from '../utils/error';

const createApp = async function (callback) {
  const app = express();
  //Using middlewares
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(helmet());
  app.use(morgan('dev'));
  // app.use(express.static(path.join(path.resolve(), 'public')));

  callback(app);
  //Unmatch routes
  app.use((req, res, next) => {
    res.send('<h1> 404 - Sorry dude, wrong route!</h1>');
  });

  //Error handler
  app.use((err, req, res, next) => {
    handleError(err, res);
  });
  return app;
};
export default createApp;
