import path from 'path';
//Basics express middlewares import
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

//routes
import routes from './routes';
import { handleError } from '../utils';

const app = express();
//Using middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.static(path.join(path.resolve(), 'public')));

app.use('/', routes);

//Unmatch routes
app.use((req, res, next) => {
  res.send('<h1> 404 - Sorry dude, wrong route!</h1>');
});

//Error handler
app.use((err, req, res, next) => {
  handleError(err, res);
});

export default app;
