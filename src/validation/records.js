const Joi = require('joi');

const fetchRecordsValidator = Joi.object({
  startDate: Joi.date()
    .required()
    .error(new Error('Kindly enter a valid start date.')),
  endDate: Joi.date().required().error(new Error('Kindly enter a valid start date.')),
  minCount: Joi.number().required().error(new Error('Kindly enter a minimum amount.')),
  maxCount: Joi.number().required().error(new Error('Kindly enter a maximum amount.')),
});

module.exports = fetchRecordsValidator;
