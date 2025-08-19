import { config } from './config/config';


import express from 'express';
import userRoutes from './routes/user.route';

const app = express();
app.use(express.json());
app.use('/', userRoutes);

app.listen(config.port, () => {
  console.log(`🚀 Server running on http://localhost:${config.port}`);
  console.log(`🌱 Environment: ${config.port}`);
});