import HttpStatus from 'http-status-codes';

import * as productService from '../services/productService';

/**
 * Get all products.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function fetchAll(req, res, next) {
  const data = await productService.getAllProduct();

  res.json({ data });
}
