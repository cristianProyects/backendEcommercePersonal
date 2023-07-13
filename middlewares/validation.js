const boom = require('@hapi/boom');
/**
 * 
 * @param {String} schema type of validation ( createProduct, updateProduct,...) from SCHEMA PRODCUT
 * @param {String} property body, paramas or query parameters
 * @returns 
 */
function validatorHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false }); //{ abortEarly: false }  permitted send all errors
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports = validatorHandler;