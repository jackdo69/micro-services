import express from 'express';
import { CustomError } from '../utils/error';

const router = express.Router();

router.use('/', (req, res, next) => {
  next(new CustomError(401, 'Resources not found'));
});

export default router;
