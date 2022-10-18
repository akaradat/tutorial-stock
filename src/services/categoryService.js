import Boom from '@hapi/boom';

import Category from '../models/category';

export function getAllCategories() {
  return Category.fetchAll();
}

export function getCategory(id) {
  return new Category({ id })
    .fetch()
    .then((category) => category)
    .catch(Category.NotFoundError, () => {
      throw Boom.notFound('Category not found');
    });
}

export function updateCategory(id, category) {
  return new Category({ id }).save({ name: category.name });
}

export function createCategory(category) {
  // console.log('tesst', Category.name);
  return new Category({ name: category.name }).save();
}

export function deleteCategory(id) {
  return new Category({ id }).fetch().then((category) => category.destroy());
}
