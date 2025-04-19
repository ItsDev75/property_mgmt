import { CommercialPropertyMain } from '../models/commercial_property_main.model';
import { logger } from '../utils/logger';

export class CommercialPropertyMainService {
  async createProperty(data: any) {
    try {
      const property = await CommercialPropertyMain.create(data);
      logger.info('Commercial property created successfully', { propertyId: property.id });
      return property;
    } catch (error) {
      logger.error('Error creating commercial property', { error });
      throw error;
    }
  }

  async getPropertyById(id: number) {
    try {
      const property = await CommercialPropertyMain.findByPk(id);
      if (!property) {
        throw new Error('Commercial property not found');
      }
      return property;
    } catch (error) {
      logger.error('Error fetching commercial property', { error, propertyId: id });
      throw error;
    }
  }

  async updateProperty(id: number, data: any) {
    try {
      const [updated] = await CommercialPropertyMain.update(data, {
        where: { id },
      });
      if (!updated) {
        throw new Error('Commercial property not found');
      }
      const property = await this.getPropertyById(id);
      logger.info('Commercial property updated successfully', { propertyId: id });
      return property;
    } catch (error) {
      logger.error('Error updating commercial property', { error, propertyId: id });
      throw error;
    }
  }

  async deleteProperty(id: number) {
    try {
      const deleted = await CommercialPropertyMain.destroy({
        where: { id },
      });
      if (!deleted) {
        throw new Error('Commercial property not found');
      }
      logger.info('Commercial property deleted successfully', { propertyId: id });
      return { success: true, message: 'Property deleted successfully' };
    } catch (error) {
      logger.error('Error deleting commercial property', { error, propertyId: id });
      throw error;
    }
  }

  async listProperties(page: number = 1, limit: number = 10, filters: any = {}) {
    try {
      const offset = (page - 1) * limit;
      const { count, rows } = await CommercialPropertyMain.findAndCountAll({
        where: filters,
        limit,
        offset,
      });
      return {
        data: rows,
        pagination: {
          total: count,
          page,
          limit,
          totalPages: Math.ceil(count / limit),
        },
      };
    } catch (error) {
      logger.error('Error listing commercial properties', { error });
      throw error;
    }
  }
} 