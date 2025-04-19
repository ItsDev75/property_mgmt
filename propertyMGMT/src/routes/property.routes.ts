import { Router } from 'express';
import { PropertyController } from '../controllers/property.controller';

const router = Router();
const propertyController = new PropertyController();

router.post('/property', propertyController.createProperty.bind(propertyController));
router.get('/property/:id', propertyController.getProperty.bind(propertyController));
router.put('/property/:id', (req, res, next) => {
    // Combine body and query params (optional approach)
    if (Object.keys(req.query).length > 0) {
      req.body = { ...req.body, ...req.query };
    }
    next();
  }, propertyController.updateProperty.bind(propertyController));
router.delete('/property/:id', propertyController.deleteProperty.bind(propertyController));
router.get('/properties', propertyController.listProperties.bind(propertyController));

export default router; 