import Joi from '@hapi/joi';

import validate from '../utils/validate';
import * as categoriesService from '../services/categoriesService';

/**
 * Validate users existence.
 *
 * @param   {Object}   req
 * @param   {Object}   res
 * @param   {Function} next
 * @returns {Promise}
 */
function findCategory(req, res, next) {
  return categoriesService
    .getCategory(req.params.id)
    .then(() => next())
    .catch((err) => next(err));
}

export { findCategory };
