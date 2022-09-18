import HttpStatus from 'http-status-codes';

import * as categoriesService from '../services/categoriesService';

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
