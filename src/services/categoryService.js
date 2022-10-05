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

export function updateCategory(id, Category) {
  return new Category({ id }).save({ name: Category.name });
}

export function createCategory(Category) {
  return new Category({ name: Category.name }).save();
}

export function deleteCategory(id) {
  return new Category({ id }).fetch().then((category) => category.destroy());
}
