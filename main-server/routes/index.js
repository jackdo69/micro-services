import express from 'express';
import user from './user.js';
import post from './post.js';
import error_demo from './error_demo.js';
const router = express.Router();

router.use('/user', user);
router.use('/post', post);
router.use('/error_demo', error_demo);

export default router;
