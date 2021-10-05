import express from 'express';
import register from '../../../prometheus';
const router = express.Router();

router.get('/', async (req, res) => {
  // res.setHeader('Content-Type', register.contentType);
  const metrics = await register.metrics();
  console.log(metrics);
  res.send(metrics);
});

export default router;
