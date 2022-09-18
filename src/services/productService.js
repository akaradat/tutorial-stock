import Boom from '@hapi/boom';

import Product from '../models/product';

/**
 * Get all products.
 *
 * @returns {Promise}
 */
export function getAllProduct() {
  return Product.fetchAll();
}
