import dotenv from 'dotenv';
import app from './app';
import logger from './config/logger';

dotenv.config();

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
}); 