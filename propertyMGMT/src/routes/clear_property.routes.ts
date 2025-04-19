import { Router } from 'express';
import { ClearPropertyController } from '../controllers/clear_property.controller';

const router = Router();
const clearPropertyController = new ClearPropertyController();

// Create a new property
router.post('/', clearPropertyController.createProperty.bind(clearPropertyController));

// Get a property by ID
router.get('/:id', clearPropertyController.getProperty.bind(clearPropertyController));

// Update a property
router.put('/:id', clearPropertyController.updateProperty.bind(clearPropertyController));

// Delete a property
router.delete('/:id', clearPropertyController.deleteProperty.bind(clearPropertyController));

// List properties with pagination and filters
router.get('/', clearPropertyController.listProperties.bind(clearPropertyController));

export default router; 