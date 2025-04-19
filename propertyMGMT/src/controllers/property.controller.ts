import { Request, Response } from 'express';
import { PropertyService } from '../services/property.service';
import { IClearPropertyDetail } from '../types/property.types';
import logger from '../config/logger';

const propertyService = new PropertyService();

export class PropertyController {
  async createProperty(req: Request, res: Response) {
    try {
      const propertyData: IClearPropertyDetail = req.body;

      console.log('Received property data:', JSON.stringify(propertyData, null, 2));
      const result = await propertyService.createProperty(propertyData);
      return res.status(result.success ? 201 : 400).json(result);
    } catch (error) {
      logger.error('Error in createProperty controller:', error);
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  }

  async getProperty(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      logger.info(`Received request for property ID: ${id}`);
      
      if (isNaN(id)) {
        logger.warn('Invalid property ID received');
        return res.status(400).json({
          success: false,
          message: 'Invalid property ID',
        });
      }

      const result = await propertyService.getPropertyById(id);
      logger.info(`Property request completed for ID: ${id}`);
      return res.status(result.success ? 200 : 404).json(result);
    } catch (error) {
      logger.error('Error in getProperty controller:', error);
      let errorMessage = 'Internal server error';
      if (error instanceof Error) {
        logger.error(`Error details: ${error.message}`);
        logger.error(`Stack trace: ${error.stack}`);
        errorMessage = error.message;
      }
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' ? errorMessage : undefined,
      });
    }
  }

  async updateProperty(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    logger.info(`Update request for property ID: ${id}`, { body: req.body });
  
    try {
      if (isNaN(id)) {
        logger.warn('Invalid property ID', { providedId: req.params.id });
        return res.status(400).json({ success: false, message: 'Invalid property ID' });
      }
  
      // Get only the fields that are actually being updated
      const propertyData = Object.fromEntries(
        Object.entries(req.body).filter(([_, v]) => v !== undefined)
      );
  
      if (Object.keys(propertyData).length === 0) {
        logger.warn('No valid update fields provided', { id });
        return res.status(400).json({ 
          success: false, 
          message: 'No valid fields provided for update' 
        });
      }
  
      logger.debug('Fields to update:', Object.keys(propertyData));
      const result = await propertyService.updateProperty(id, propertyData);
      
      return res.status(result.success ? 200 : 404).json(result);
    } catch (error) {
      logger.error('Update failed', { id, error: error instanceof Error ? error.message : 'Unknown error' });
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  }

  async deleteProperty(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({
          success: false,
          message: 'Invalid property ID',
        });
      }

      const result = await propertyService.deleteProperty(id);
      return res.status(result.success ? 200 : 404).json(result);
    } catch (error) {
      logger.error('Error in deleteProperty controller:', error);
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  }

  async listProperties(req: Request, res: Response) {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const filters = req.query.filters ? JSON.parse(req.query.filters as string) : {};

      const result = await propertyService.listProperties(page, limit, filters);
      return res.status(200).json(result);
    } catch (error) {
      logger.error('Error in listProperties controller:', error);
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  }
} 