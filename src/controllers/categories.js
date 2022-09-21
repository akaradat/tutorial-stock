import HttpStatus from 'http-status-codes';

import * as categoriesService from '../services/categoriesService';

export function deleteCategory(req, res, next) {
  categoriesService
    .deleteCategory(req.params.id)
    .then((data) => res.status(HttpStatus.NO_CONTENT).json({ data }))
    .catch((err) => next(err));
}

export async function fetchAll(req, res, next) {
  const data = await categoriesService.getAllCategories();

  res.json({ data });
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
