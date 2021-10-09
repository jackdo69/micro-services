import express from 'express';
import producer from '../rabbitmq/user-producer';

const router = express.Router();

router.post('/', async (req, res) => {
  const message = req.body;
  await producer.publish(message);
  res.sendStatus(201);
});

export default router;
