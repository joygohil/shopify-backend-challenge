export default (joi) => (joi.object({
  name: joi.string().min(3).max(50).pattern(/^[a-zA-Z0-9 ,-]+$/)
    .messages({
      'string.pattern.base': 'Invalid name in the request.',
    })
    .required()
    .label('Name'),
  category: joi.string().min(3).max(50).pattern(/^[a-zA-Z ]+$/)
    .messages({
      'string.pattern.base': 'Invalid category in the request.',
    })
    .required()
    .label('Category'),
  sizeInKg: joi.number().min(1).positive().precision(2)
    .required()
    .label('Size in KG'),
  quantity: joi.number().min(1).positive().required()
    .label('Quantity'),
  tags: joi.string().pattern(/^[a-zA-Z ,]+$/)
    .messages({
      'string.pattern.base': 'Invalid tags in the request.',
    })
    .required()
    .label('Tags'),
}));
