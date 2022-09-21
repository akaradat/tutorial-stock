import HttpStatus from 'http-status-codes';

import * as categoriesService from '../services/categoriesService';

export async function deleteCategory(req, res, next) {
  try {
    const data = await categoriesService.deleteCategory(req.params.id);

    res.status(HttpStatus.NO_CONTENT).json({ data });
  } catch (error) {
    next(error);
  }
}

export async function fetchAll(req, res, next) {
  try {
    const data = await categoriesService.getAllCategories();

    res.json({ data });
  } catch (error) {
    next(error);
  }
}

export function fetchById(req, res, next) {
  categoriesService
    .getCategories(req.params.id)
    .then((data) => res.json({ data }))
    .catch((err) => next(err));
}

export function update(req, res, next) {
  categoriesService
    .updateCategories(req.params.id, req.body)
    .then((data) => res.json({ data }))
    .catch((err) => next(err));
}

export function create(req, res, next) {
  categoriesService
    .createCategories(req.body)
    .then((data) => res.status(HttpStatus.CREATED).json({ data }))
    .catch((err) => next(err));
}
