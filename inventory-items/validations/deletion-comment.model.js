export default (joi) => joi.string().min(3).max(50).pattern(/^[a-zA-Z0-9 -]+$/)
  .messages({
    'string.pattern.base': 'Invalid deletion comment in the request.',
  })
  .required()
  .label('Deletion Comment');
