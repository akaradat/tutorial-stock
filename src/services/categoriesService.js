import Boom from '@hapi/boom';

import Categories from '../models/categories';

/**
 * Get all users.
 *
 * @returns {Promise}
 */
export function getAllCategories() {
  return Categories.fetchAll();
}

/**
 * Get a Categories.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function getCategories(id) {
  return new Categories({ id })
    .fetch()
    .then((category) => category)
    .catch(Categories.NotFoundError, () => {
      throw Boom.notFound('Category not found');
    });
}

/**
 * Update a Categories.
 *
 * @param   {Number|String}  id
 * @param   {Object}         categories
 * @returns {Promise}
 */
export function updateCategories(id, categories) {
  return new Categories({ id }).save({ name: categories.name });
}
