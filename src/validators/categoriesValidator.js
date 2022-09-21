import Joi from '@hapi/joi';

import validate from '../utils/validate';
import * as categoriesService from '../services/categoriesService';

const schema = Joi.object({
  name: Joi.string().label('Name').max(90).required()
});

function findCategory(req, res, next) {
  return categoriesService
    .getCategory(req.params.id)
    .then(() => next())
    .catch((err) => next(err));
}

function categoriesValidator(req, res, next) {
  return validate(req.body, schema)
    .then(() => next())
    .catch((err) => next(err));
}

export { findCategory, categoriesValidator };
