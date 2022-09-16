import Boom from '@hapi/boom';

import Product from '../models/product';

/**
 * Create new user.
 *
 * @param   {Object}  product
 * @returns {Promise}
 */
export function createProduct(product) {
  return new Product({
    name: product.name,
    amount: product.amount,
    price: product.price,
    category_id: product.category_id,
    detail: product.detail
  }).save();
}
