import request from 'supertest';
import express from 'express';
import { PropertyController } from '../controllers/property.controller';
import { PropertyService } from '../services/property.service';
import propertyRoutes from '../routes/property.routes';

jest.mock('../services/property.service');

describe('PropertyController', () => {
  let app: express.Application;
  let propertyService: jest.Mocked<PropertyService>;

  beforeEach(() => {
    app = express();
    app.use(express.json());
    app.use('/api', propertyRoutes);
    propertyService = new PropertyService() as jest.Mocked<PropertyService>;
    jest.clearAllMocks();
  });

  describe('POST /api/property', () => {
    it('should create a property successfully', async () => {
      const mockProperty = {
        property_id: 1,
        // ... other properties
      };

      propertyService.createProperty.mockResolvedValue({
        success: true,
        message: 'Property created successfully',
        data: mockProperty,
      });

      const response = await request(app)
        .post('/api/property')
        .set('Authorization', 'Bearer valid-token')
        .send(mockProperty);

      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe('Property created successfully');
      expect(response.body.data).toEqual(mockProperty);
    });

    it('should handle validation errors', async () => {
      const invalidProperty = {
        property_id: 'invalid', // Should be a number
        // Missing required fields
      };

      propertyService.createProperty.mockResolvedValue({
        success: false,
        message: 'Validation failed',
        error: {
          field: 'property_id',
          issue: 'Must be a number',
        },
      });

      const response = await request(app)
        .post('/api/property')
        .set('Authorization', 'Bearer valid-token')
        .send(invalidProperty);

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
      expect(response.body.message).toBe('Validation failed');
      expect(response.body.error).toBeDefined();
    });
  });

  describe('GET /api/property/:id', () => {
    it('should get a property successfully', async () => {
      const mockProperty = {
        id: 1,
        property_id: 1,
        // ... other properties
      };

      propertyService.getPropertyById.mockResolvedValue({
        success: true,
        message: 'Property retrieved successfully',
        data: mockProperty,
      });

      const response = await request(app)
        .get('/api/property/1')
        .set('Authorization', 'Bearer valid-token');

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe('Property retrieved successfully');
      expect(response.body.data).toEqual(mockProperty);
    });

    it('should handle property not found', async () => {
      propertyService.getPropertyById.mockResolvedValue({
        success: false,
        message: 'Property not found',
      });

      const response = await request(app)
        .get('/api/property/999')
        .set('Authorization', 'Bearer valid-token');

      expect(response.status).toBe(404);
      expect(response.body.success).toBe(false);
      expect(response.body.message).toBe('Property not found');
    });
  });

  // Add more test cases for other endpoints...
}); 