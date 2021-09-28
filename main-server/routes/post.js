import express from 'express';
import producer from '../rabbitmq/post-producer';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('You hit the post route');
});

router.post('/', async (req, res) => {
  const message = req.body;
  await producer.publish(message);
  res.sendStatus(201);
});

export default router;
