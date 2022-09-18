import HttpStatus from 'http-status-codes';

import * as categoriesService from '../services/categoriesService';

/**
 * Get all users.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function fetchAll(req, res, next) {
  const data = await categoriesService.getAllCategories();

  res.json({ data });
}

/**
 * Get a category by its id.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function fetchById(req, res, next) {
  categoriesService
    .getCategories(req.params.id)
    .then((data) => res.json({ data }))
    .catch((err) => next(err));
}

/**
 * Update a category.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function update(req, res, next) {
  categoriesService
    .updateCategories(req.params.id, req.body)
    .then((data) => res.json({ data }))
    .catch((err) => next(err));
}
