import Boom from '@hapi/boom';

import Categories from '../models/categories';

/**
 * Delete a user.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function deleteCategory(id) {
  return new Categories({ id }).fetch().then((category) => category.destroy());
}
