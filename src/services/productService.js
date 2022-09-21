import Boom from '@hapi/boom';

import Product from '../models/product';

export function createProduct(product) {
  return new Product({
    name: product.name,
    amount: product.amount,
    price: product.price,
    category_id: product.category_id,
    detail: product.detail
  }).save();
}

export function getProduct(id) {
  return new Product({ id })
    .fetch()
    .then((product) => product)
    .catch(Product.NotFoundError, () => {
      throw Boom.notFound('Product not found');
    });
}

export function deleteProduct(id) {
  return new Product({ id }).fetch().then((product) => product.destroy());
}
