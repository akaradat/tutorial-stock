import Boom from '@hapi/boom';

import Categories from '../models/categories';

export function getAllCategories() {
  return Categories.fetchAll();
}

export function getCategories(id) {
  return new Categories({ id })
    .fetch()
    .then((category) => category)
    .catch(Categories.NotFoundError, () => {
      throw Boom.notFound('Category not found');
    });
}

export function updateCategories(id, categories) {
  return new Categories({ id }).save({ name: categories.name });
}

export function createCategories(categories) {
  return new Categories({ name: categories.name }).save();
}

export function deleteCategory(id) {
  return new Categories({ id }).fetch().then((category) => category.destroy());
}
