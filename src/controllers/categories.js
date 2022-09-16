import HttpStatus from 'http-status-codes';

import * as categoriesService from '../services/categoriesService';

/**
 * Delete a user.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function deleteCategory(req, res, next) {
  categoriesService
    .deleteCategory(req.params.id)
    .then((data) => res.status(HttpStatus.NO_CONTENT).json({ data }))
    .catch((err) => next(err));
}
