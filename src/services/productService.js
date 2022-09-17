import Boom from '@hapi/boom';

import Product from '../models/product';

/**
 * Get a Product.
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
 * Delete a product.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function deleteProduct(id) {
  return new Product({ id }).fetch().then((product) => product.destroy());
}
