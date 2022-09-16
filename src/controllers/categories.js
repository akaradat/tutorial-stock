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
