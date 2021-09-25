import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('You hit the user route');
});

export default router;
