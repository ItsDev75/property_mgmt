import { PropertyService } from '../services/property.service';
import Property from '../models/property.model';
import { IClearPropertyDetail } from '../types/property.types';

jest.mock('../models/property.model');

describe('PropertyService', () => {
  let propertyService: PropertyService;

  beforeEach(() => {
    propertyService = new PropertyService();
    jest.clearAllMocks();
  });

  describe('createProperty', () => {
    it('should create a property successfully', async () => {
      const mockProperty: IClearPropertyDetail = {
        property_id: 1,
        call_us: '1234567890',
        exe_name: 'John Doe',
        exe_email: 'john@example.com',
        exe_contact_no: '1234567890',
        exe_address: '123 Main St',
        owner_name: 'Jane Doe',
        owner_email: 'jane@example.com',
        owner_contact_no: '0987654321',
        owner_address: '456 Oak St',
        pro_curr_status: 'Available',
        prop_avail: 'Yes',
        permi_avail: 'Yes',
        project_unit: 'Unit 1',
        floor_loc: 'Floor 2',
        prop_ownership: 'Freehold',
        flooring_type: 'Marble',
        facing: 'North',
        no_of_lift: '2',
        no_of_bedrooms: '3',
        no_of_bathrooms: '2',
        no_of_balconies: '2',
        no_of_open_sides: '2',
        kitchen_detail: 'Modular',
        furniture_detail: 'Semi-furnished',
        age_of_property: '5 years',
        power_supply: '24/7',
        security_guards: 'Yes',
        camera: 'Yes',
        fire_avai: 'Yes',
        water_supply: '24/7',
        water_timing: '24/7',
        road_width: '30 feet',
        parking_detail: 'Covered',
        gas_supply: 'Yes',
        amenities: 'Gym, Pool',
        otheramenities: 'Clubhouse',
        client_avail: 'Yes',
        overlooking: 'Garden',
        some_features: 'Modern',
        wardrobe: 'Yes',
        beds: 'Yes',
        fans: 'Yes',
        light: 'Yes',
        m_kitchen: 'Yes',
        fridge: 'Yes',
        ac: 'Yes',
        geyser: 'Yes',
        tv: 'Yes',
        stove: 'Yes',
        washing_machine: 'Yes',
        water_purifier: 'Yes',
        microwave: 'Yes',
        curtains: 'Yes',
        chimney: 'Yes',
        exhaust_fan: 'Yes',
        sofa: 'Yes',
        dinning_table: 'Yes',
        super_plot_area: '2000',
        super_plot_area_unit: 'sq ft',
        super_con_area: '1800',
        super_con_area_unit: 'sq ft',
        carpet_plot_area: '1600',
        carpet_plot_area_unit: 'sq ft',
        carpet_con_area: '1400',
        carpet_con_area_unit: 'sq ft',
        offer_price: 5000000,
        offer_price_unit: 'INR',
        expected_rent: '50000',
        expected_rent_unit: 'INR',
        rent_security: '100000',
        rent_security_unit: 'INR',
        maint_charge: '5000',
        maint_charge_unit: 'INR',
        tax_charge: '2000',
        tax_charge_unit: 'INR',
        other_charge: '1000',
        google_map: 'https://maps.google.com',
        school: 'Nearby',
        college: 'Nearby',
        hospital: 'Nearby',
        bank: 'Nearby',
        brts_stop: 'Nearby',
        r_station: 'Nearby',
        m_station: 'Nearby',
        airport: 'Nearby',
        brochure: 'Available',
        post_date: new Date(),
        pricerequest: '0',
        main_charges: 5000,
        main_charges_unit: 'INR',
        parkingdetail: 'Covered',
        custom_tag: 'Luxury'
      };

      (Property.create as jest.Mock).mockResolvedValue(mockProperty);

      const result = await propertyService.createProperty(mockProperty);

      expect(result.success).toBe(true);
      expect(result.message).toBe('Property created successfully');
      expect(result.data).toEqual(mockProperty);
    });

    it('should handle validation errors', async () => {
      const invalidProperty = {
        property_id: 'invalid', // Should be a number
        // Missing required fields
      };

      const result = await propertyService.createProperty(invalidProperty as any);

      expect(result.success).toBe(false);
      expect(result.message).toBe('Validation failed');
      expect(result.error).toBeDefined();
    });
  });

  describe('getPropertyById', () => {
    it('should return a property when found', async () => {
      const mockProperty = {
        id: 1,
        property_id: 1,
        // ... other properties
      };

      (Property.findByPk as jest.Mock).mockResolvedValue(mockProperty);

      const result = await propertyService.getPropertyById(1);

      expect(result.success).toBe(true);
      expect(result.message).toBe('Property retrieved successfully');
      expect(result.data).toEqual(mockProperty);
    });

    it('should return not found when property does not exist', async () => {
      (Property.findByPk as jest.Mock).mockResolvedValue(null);

      const result = await propertyService.getPropertyById(999);

      expect(result.success).toBe(false);
      expect(result.message).toBe('Property not found');
      expect(result.data).toBeUndefined();
    });
  });

  // Add more test cases for other methods...
}); 