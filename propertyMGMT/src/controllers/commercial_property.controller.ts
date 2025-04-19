import { Request, Response } from 'express';
import { CommercialPropertyService } from '../services/commercial_property.service';
import { logger } from '../utils/logger';

export class CommercialPropertyController {
  private propertyService: CommercialPropertyService;

  constructor() {
    this.propertyService = new CommercialPropertyService();
  }

  createProperty = async (req: Request, res: Response) => {
    try {
      const property = await this.propertyService.createProperty(req.body);
      res.status(201).json({
        success: true,
        message: 'Commercial property created successfully',
        data: property,
      });
    } catch (error) {
      logger.error('Error in createProperty controller', { error });
      res.status(500).json({
        success: false,
        message: 'Error creating commercial property',
        error: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  };

  getProperty = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const property = await this.propertyService.getPropertyById(id);
      res.status(200).json({
        success: true,
        data: property,
      });
    } catch (error) {
      logger.error('Error in getProperty controller', { error });
      res.status(500).json({
        success: false,
        message: 'Error fetching commercial property',
        error: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  };

  updateProperty = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const property = await this.propertyService.updateProperty(id, req.body);
      res.status(200).json({
        success: true,
        message: 'Commercial property updated successfully',
        data: property,
      });
    } catch (error) {
      logger.error('Error in updateProperty controller', { error });
      res.status(500).json({
        success: false,
        message: 'Error updating commercial property',
        error: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  };

  deleteProperty = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const result = await this.propertyService.deleteProperty(id);
      res.status(200).json(result);
    } catch (error) {
      logger.error('Error in deleteProperty controller', { error });
      res.status(500).json({
        success: false,
        message: 'Error deleting commercial property',
        error: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  };

  listProperties = async (req: Request, res: Response) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const filters = req.query.filters ? JSON.parse(req.query.filters as string) : {};
      
      const result = await this.propertyService.listProperties(page, limit, filters);
      res.status(200).json({
        success: true,
        data: result.data,
        pagination: result.pagination,
      });
    } catch (error) {
      logger.error('Error in listProperties controller', { error });
      res.status(500).json({
        success: false,
        message: 'Error listing commercial properties',
        error: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  };
} 