import { Op } from 'sequelize';
import ClearProperty from '../models/clear_property.model';
import { IClearProperty, IClearPropertyResponse, IClearPropertyListResponse } from '../types/clear_property.types';
import { validateCreateProperty, validateUpdateProperty } from '../utils/clear_property.validation';
import logger from '../config/logger';

export class ClearPropertyService {
  async createProperty(propertyData: IClearProperty): Promise<IClearPropertyResponse> {
    try {
      const { error } = validateCreateProperty(propertyData);
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

      const property = await ClearProperty.create(propertyData);
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

  async getPropertyById(id: number): Promise<IClearPropertyResponse> {
    try {
      const property = await ClearProperty.findByPk(id);
      if (!property) {
        return {
          success: false,
          message: 'Property not found',
        };
      }

      return {
        success: true,
        message: 'Property retrieved successfully',
        data: property.toJSON(),
      };
    } catch (error) {
      logger.error(`Error retrieving property with ID ${id}:`, error);
      throw error;
    }
  }

  async updateProperty(id: number, propertyData: Partial<IClearProperty>): Promise<IClearPropertyResponse> {
    try {
      const property = await ClearProperty.findByPk(id);
      if (!property) {
        return {
          success: false,
          message: 'Property not found',
        };
      }

      const { error } = validateUpdateProperty({ ...property.toJSON(), ...propertyData });
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

      await property.update(propertyData);
      logger.info(`Property updated successfully with ID: ${id}`);

      return {
        success: true,
        message: 'Property updated successfully',
        data: property.toJSON(),
      };
    } catch (error) {
      logger.error(`Error updating property with ID ${id}:`, error);
      throw error;
    }
  }

  async deleteProperty(id: number): Promise<IClearPropertyResponse> {
    try {
      const property = await ClearProperty.findByPk(id);
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
  ): Promise<IClearPropertyListResponse> {
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

      const { count, rows } = await ClearProperty.findAndCountAll({
        where,
        limit,
        offset,
        order: [['display_order', 'ASC']],
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