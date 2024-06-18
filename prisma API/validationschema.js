const { body } = require('express-validator');

const createValidationSchema = {
  name: {
    isString: {
      errorMessage: 'Name must be a string'
    },
    notEmpty: {
      errorMessage: 'Name cannot be empty'
    }
  },
  value: {
    isString: {
      errorMessage: 'value must be a string'
    },
    notEmpty: {
      errorMessage: 'value cannot be empty'
    }
  }
};

module.exports = {
  createValidationSchema
};