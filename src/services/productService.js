import Boom from '@hapi/boom';

import Product from '../models/product';

/**
 * Get a product.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function getProduct(id) {
  return new Product({ id })
    .fetch()
    .then((product) => product)
    .catch(Product.NotFoundError, () => {
      throw Boom.notFound('Product not found');
    });
}

/**
 * Update a Product.
 *
 * @param   {Number|String}  id
 * @param   {Object}         product
 * @returns {Promise}
 */
export function updateProduct(id, product) {
  return new Product({ id }).save({
    name: product.name,
    amount: product.amount,
    price: product.price,
    category_id: product.category_id,
    detail: product.detail
  });
}
