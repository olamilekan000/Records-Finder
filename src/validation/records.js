const Joi = require('.');

const fetchRecordsValidator = Joi.object({
  startDate: Joi.date()
    .format('YYYY-MM-DD')
    .required()
    .error(new Error('Kindly enter a valid start date.')),
  endDate: Joi
    .date()
    .format('YYYY-MM-DD')
    .required()
    .error(new Error('Kindly enter a valid end date.')),
  minCount: Joi.number().required().error(new Error('Kindly enter a minimum amount.')),
  maxCount: Joi.number().required().error(new Error('Kindly enter a maximum amount.')),
});

module.exports = fetchRecordsValidator;
