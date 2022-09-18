import Joi from '@hapi/joi';

import validate from '../utils/validate';
import * as categoriesService from '../services/categoriesService';

// Validation schema
const schema = Joi.object({
  name: Joi.string().label('Name').max(90).required()
});

/**
 * Validate category existence.
 *
 * @param   {Object}   req
 * @param   {Object}   res
 * @param   {Function} next
 * @returns {Promise}
 */
function findCategories(req, res, next) {
  return categoriesService
    .getCategoriesService(req.params.id)
    .then(() => next())
    .catch((err) => next(err));
}

export { findCategories };
