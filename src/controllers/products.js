import HttpStatus from 'http-status-codes';

import * as productService from '../services/productService';

/**
 * Get a Product by its id.
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
 * Update a product.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function update(req, res, next) {
  productService
    .updateProduct(req.params.id, req.body)
    .then((data) => res.json({ data }))
    .catch((err) => next(err));
}
