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
    .getCategories(req.params.id)
    .then(() => next())
    .catch((err) => next(err));
}

/**
 * Validate create/update categories request.
 *
 * @param   {Object}   req
 * @param   {Object}   res
 * @param   {Function} next
 * @returns {Promise}
 */
function categoriesValidator(req, res, next) {
  return validate(req.body, schema)
    .then(() => next())
    .catch((err) => next(err));
}

export { findCategories, categoriesValidator };
