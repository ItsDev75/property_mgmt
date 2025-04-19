import Joi from 'joi';
import { IClearProperty } from '../types/clear_property.types';

// Schema for create operation (id is optional)
export const createPropertySchema = Joi.object<IClearProperty>({
  id: Joi.number().optional(),
  form_no: Joi.string().max(200).allow('').optional(),
  prop_date: Joi.date().required(),
  property_name: Joi.string().max(200).required(),
  property_type: Joi.string().max(200).required(),
  for_property: Joi.string().max(200).required(),
  membership: Joi.string().max(200).allow('').optional(),
  project_name: Joi.string().max(200).allow('').optional(),
  State: Joi.string().max(200).required(),
  city: Joi.string().max(200).required(),
  location: Joi.string().max(200).required(),
  video_url: Joi.string().max(200).required(),
  tour_link: Joi.string().max(200).allow('').optional(),
  content: Joi.string().required(),
  status: Joi.string().valid('0', '1').required(),
  admin_del: Joi.string().valid('0', '1').required(),
  display_order: Joi.number().required(),
  url: Joi.string().max(200).required(),
  hit: Joi.number().allow(null).optional(),
});

// Schema for update operation (id is required)
export const updatePropertySchema = Joi.object<IClearProperty>({
  id: Joi.number().required(),
  form_no: Joi.string().max(200).allow('').optional(),
  prop_date: Joi.date().required(),
  property_name: Joi.string().max(200).required(),
  property_type: Joi.string().max(200).required(),
  for_property: Joi.string().max(200).required(),
  membership: Joi.string().max(200).allow('').optional(),
  project_name: Joi.string().max(200).allow('').optional(),
  State: Joi.string().max(200).required(),
  city: Joi.string().max(200).required(),
  location: Joi.string().max(200).required(),
  video_url: Joi.string().max(200).required(),
  tour_link: Joi.string().max(200).allow('').optional(),
  content: Joi.string().required(),
  status: Joi.string().valid('0', '1').required(),
  admin_del: Joi.string().valid('0', '1').required(),
  display_order: Joi.number().required(),
  url: Joi.string().max(200).required(),
  hit: Joi.number().allow(null).optional(),
});

export const validateCreateProperty = (data: IClearProperty) => {
  return createPropertySchema.validate(data, { abortEarly: false });
};

export const validateUpdateProperty = (data: IClearProperty) => {
  return updatePropertySchema.validate(data, { abortEarly: false });
}; 