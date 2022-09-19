import HttpStatus from 'http-status-codes';

import * as productService from '../services/productService';

/**
 * Get a product by its id.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function fetchById(req, res, next) {
  productService
    .getProduct(req.params.id)
    .then((data) => res.json({ data }))
    .catch((err) => next(err));
}

/**
 * Delete a product.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function deleteProduct(req, res, next) {
  productService
    .deleteProduct(req.params.id)
    .then((data) => res.status(HttpStatus.NO_CONTENT).json({ data }))
    .catch((err) => next(err));
}
