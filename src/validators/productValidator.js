import Joi from '@hapi/joi';

import validate from '../utils/validate';
import * as productService from '../services/productService';

// Validation schema
const schema = Joi.object({
  name: Joi.string().label('Name').max(90).required(),
  amount: Joi.number().label('Amount').required(),
  price: Joi.number().label('Price').required(),
  category_id: Joi.number().label('Category_id').required(),
  detail: Joi.string().label('Detail').max(150).required()
});

/**
 * Validate create/update product request.
 *
 * @param   {Object}   req
 * @param   {Object}   res
 * @param   {Function} next
 * @returns {Promise}
 */
function productValidator(req, res, next) {
  return validate(req.body, schema)
    .then(() => next())
    .catch((err) => next(err));
}

/**
 * Validate products existence.
 *
 * @param   {Object}   req
 * @param   {Object}   res
 * @param   {Function} next
 * @returns {Promise}
 */
function findProduct(req, res, next) {
  return productService
    .getProduct(req.params.id)
    .then(() => next())
    .catch((err) => next(err));
}

export { findProduct, productValidator };
