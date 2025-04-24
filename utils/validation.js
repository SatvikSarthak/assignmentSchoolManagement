const { body, query } = require('express-validator');

exports.validateAddSchool = [
  body('name').notEmpty().withMessage('Name is required'),
  body('address').notEmpty().withMessage('Address is required'),
  body('latitude').isFloat().withMessage('Latitude must be a float'),
  body('longitude').isFloat().withMessage('Longitude must be a float'),
];

exports.validateListSchools = [
  query('lat').isFloat().withMessage('Latitude query is required and must be a float'),
  query('lng').isFloat().withMessage('Longitude query is required and must be a float'),
];
