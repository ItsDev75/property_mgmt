import { Router } from 'express';
import { CommercialPropertyMainController } from '../controllers/commercial_property_main.controller';

const router = Router();
const commercialPropertyController = new CommercialPropertyMainController();

// Create a new commercial property
router.post('/commercial-property-main', commercialPropertyController.createProperty.bind(commercialPropertyController));

// Get a commercial property by ID
router.get('/commercial-property-main/:id', commercialPropertyController.getProperty.bind(commercialPropertyController));

// Update a commercial property
router.put('/commercial-property-main/:id', commercialPropertyController.updateProperty.bind(commercialPropertyController));

// Delete a commercial property
router.delete('/commercial-property-main/:id', commercialPropertyController.deleteProperty.bind(commercialPropertyController));

// List commercial properties with pagination and filters
router.get('/commercial-properties-main', commercialPropertyController.listProperties.bind(commercialPropertyController));

export default router; 