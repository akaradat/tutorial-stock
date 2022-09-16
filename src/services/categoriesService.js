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
