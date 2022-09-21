import * as productService from '../services/productService';

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

export { findProduct };
