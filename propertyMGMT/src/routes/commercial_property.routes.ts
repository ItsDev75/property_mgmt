import { Router } from 'express';
import { CommercialPropertyController } from '../controllers/commercial_property.controller';

const router = Router();
const commercialPropertyController = new CommercialPropertyController();

// Create a new commercial property
router.post('/commercial-property', commercialPropertyController.createProperty.bind(commercialPropertyController));

// Get a commercial property by ID
router.get('/commercial-property/:id', commercialPropertyController.getProperty.bind(commercialPropertyController));

// Update a commercial property
router.put('/commercial-property/:id', commercialPropertyController.updateProperty.bind(commercialPropertyController));

// Delete a commercial property
router.delete('/commercial-property/:id', commercialPropertyController.deleteProperty.bind(commercialPropertyController));

// List commercial properties with pagination and filters
router.get('/commercial-properties', commercialPropertyController.listProperties.bind(commercialPropertyController));

export default router; 