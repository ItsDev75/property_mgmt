import { Op } from 'sequelize';
import Property from '../models/property.model';
import { IClearPropertyDetail, IPropertyResponse, IPropertyListResponse } from '../types/property.types';
import { validateProperty } from '../utils/validation';
import logger from '../config/logger';
import Joi from 'joi';

export class PropertyService {
  async createProperty(propertyData: IClearPropertyDetail): Promise<IPropertyResponse> {
    try {
      const { error } = validateProperty(propertyData);
      if (error) {
        return {
          success: false,
          message: 'Validation failed',
          error: {
            field: error.details[0].path[0].toString(),
            issue: error.details[0].message,
          },
        };
      }

      const property = await Property.create(propertyData);
      logger.info(`Property created successfully with ID: ${property.id}`);

      return {
        success: true,
        message: 'Property created successfully',
        data: property.toJSON(),
      };
    } catch (error) {
      logger.error('Error creating property:', error);
      throw error;
    }
  }

  async getPropertyById(id: number): Promise<IPropertyResponse> {
    try {
      logger.info(`Attempting to fetch property with ID: ${id}`);
      const property = await Property.findByPk(id);
      
      if (!property) {
        logger.warn(`Property not found with ID: ${id}`);
        return {
          success: false,
          message: 'Property not found',
        };
      }

      logger.info(`Successfully retrieved property with ID: ${id}`);
      return {
        success: true,
        message: 'Property retrieved successfully',
        data: property.toJSON(),
      };
    } catch (error) {
      logger.error(`Error retrieving property with ID ${id}:`, error);
      if (error instanceof Error) {
        logger.error(`Error details: ${error.message}`);
        logger.error(`Stack trace: ${error.stack}`);
      }
      throw error;
    }
  }

  async updateProperty(id: number, propertyData: Partial<IClearPropertyDetail>): Promise<IPropertyResponse> {
    try {
      const property = await Property.findByPk(id);
      if (!property) {
        logger.warn('Property not found', { id });
        return { success: false, message: 'Property not found' };
      }
  
      // Create dynamic validation schema only for provided fields
      const dynamicSchema: Record<string, any> = {};
      for (const key in propertyData) {
        if (propertyData[key as keyof IClearPropertyDetail] !== undefined) {
          // Only validate fields that are actually being updated
          dynamicSchema[key] = Joi.any().optional(); // Accept any type for updates
        }
      }
  
      const { error } = Joi.object(dynamicSchema).validate(propertyData);
      if (error) {
        logger.warn('Validation failed', { 
          id, 
          field: error.details[0].path[0],
          issue: error.details[0].message
        });
        return {
          success: false,
          message: 'Validation failed',
          error: {
            field: error.details[0].path[0].toString(),
            issue: error.details[0].message,
          },
        };
      }
  
      await property.update(propertyData);
      logger.info('Property updated', { id, updatedFields: Object.keys(propertyData) });
  
      return {
        success: true,
        message: 'Property updated successfully',
        data: property.toJSON(),
      };
    } catch (error) {
      logger.error('Update failed', { 
        id, 
        error: error instanceof Error ? error.message : error,
        stack: error instanceof Error ? error.stack : undefined 
      });
      throw error;
    }
  }

  async deleteProperty(id: number): Promise<IPropertyResponse> {
    try {
      const property = await Property.findByPk(id);
      if (!property) {
        return {
          success: false,
          message: 'Property not found',
        };
      }

      await property.destroy();
      logger.info(`Property deleted successfully with ID: ${id}`);

      return {
        success: true,
        message: 'Property deleted successfully',
      };
    } catch (error) {
      logger.error(`Error deleting property with ID ${id}:`, error);
      throw error;
    }
  }

  async listProperties(
    page: number = 1,
    limit: number = 10,
    filters: Record<string, any> = {}
  ): Promise<IPropertyListResponse> {
    try {
      const offset = (page - 1) * limit;
      const where: Record<string, any> = {};

      // Apply filters
      Object.entries(filters).forEach(([key, value]) => {
        if (value) {
          where[key] = {
            [Op.like]: `%${value}%`,
          };
        }
      });

      const { count, rows } = await Property.findAndCountAll({
        where,
        limit,
        offset,
        order: [['createdAt', 'DESC']],
      });

      return {
        success: true,
        message: 'Properties retrieved successfully',
        data: {
          properties: rows.map((property) => property.toJSON()),
          total: count,
          page,
          limit,
        },
      };
    } catch (error) {
      logger.error('Error listing properties:', error);
      throw error;
    }
  }
} 