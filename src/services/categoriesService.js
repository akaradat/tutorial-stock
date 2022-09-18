import Boom from '@hapi/boom';

import Categories from '../models/categories';

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
 * Create new categories.
 *
 * @param   {Object}  categories
 * @returns {Promise}
 */
export function createCategories(categories) {
  return new Categories({ name: categories.name }).save();
}
