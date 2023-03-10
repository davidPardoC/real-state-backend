import { checkSchema } from 'express-validator';

const createproperty = checkSchema({
  type_id: {},
  description: {},
  cost: {},
  environments: {},
  bedrooms: {},
  bathrooms: {},
  garage: {},
  total_surface: {},
  covered_surface: {},
  land_surface: {},
  built_year: {},
  expenses: {},
  credit_available: {},
  latitude: {},
  longitude: {},
  contidion_id: {},
  operation_type: {},
});

const createPropertyType = checkSchema({
  name: {},
});

export const PropertyValidator = { createproperty, createPropertyType };
