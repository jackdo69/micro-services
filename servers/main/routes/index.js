import express from 'express';
import user from './user.js';
import post from './post.js';
import metrics from './metrics.js';
import prom from '../middlewares/prom.js';
const router = express.Router();

router.use('/user', prom, user);
router.use('/post', prom, post);
router.use('/metrics', prom, metrics);

export default router;
