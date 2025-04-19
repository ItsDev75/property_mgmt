import { Request, Response } from 'express';
import { ClearPropertyService } from '../services/clear_property.service';
import { IClearProperty } from '../types/clear_property.types';
import logger from '../config/logger';

const clearPropertyService = new ClearPropertyService();

export class ClearPropertyController {
  async createProperty(req: Request, res: Response) {
    try {
      const propertyData: IClearProperty = req.body;
      console.log('Received property data:', JSON.stringify(propertyData, null, 2));
      const result = await clearPropertyService.createProperty(propertyData);
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
      if (isNaN(id)) {
        return res.status(400).json({
          success: false,
          message: 'Invalid property ID',
        });
      }

      const result = await clearPropertyService.getPropertyById(id);
      return res.status(result.success ? 200 : 404).json(result);
    } catch (error) {
      logger.error('Error in getProperty controller:', error);
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  }

  async updateProperty(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({
          success: false,
          message: 'Invalid property ID',
        });
      }

      const propertyData: Partial<IClearProperty> = req.body;
      const result = await clearPropertyService.updateProperty(id, propertyData);
      return res.status(result.success ? 200 : 404).json(result);
    } catch (error) {
      logger.error('Error in updateProperty controller:', error);
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

      const result = await clearPropertyService.deleteProperty(id);
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

      const result = await clearPropertyService.listProperties(page, limit, filters);
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