import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import swaggerUi from 'swagger-ui-express';
import { json } from 'body-parser';
import { errorHandler } from './middleware/error.middleware';
import { logger } from './utils/logger';
import sequelize from './config/database';
import propertyRoutes from './routes/property.routes';
import clearPropertyRoutes from './routes/clear_property.routes';
import commercialPropertyRoutes from './routes/commercial_property.routes';
import commercialPropertyMainRoutes from './routes/commercial_property_main.routes';
import { swaggerSpec } from './config/swagger';

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(json());
app.use(morgan('combined'));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// API Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/api/property', propertyRoutes);
app.use('/api/clear-property', clearPropertyRoutes);
app.use('/api/commercial-property', commercialPropertyRoutes);
app.use('/api/commercial-property-main', commercialPropertyMainRoutes);

// Error handling
app.use(errorHandler);

// Database connection
sequelize.authenticate()
  .then(() => {
    logger.info('Database connection has been established successfully.');
  })
  .catch((error) => {
    logger.error('Unable to connect to the database:', error);
  });

export default app; 