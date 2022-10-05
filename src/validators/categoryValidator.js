import Joi from '@hapi/joi';

import validate from '../utils/validate';
import * as categoryService from '../services/categoryService';

const schema = Joi.object({
  name: Joi.string().label('Name').max(90).required()
});

async function findCategory(req, res, next) {
  try {
    await categoryService.getCategory(req.params.id);

    return next();
  } catch (error) {
    return next(error);
  }
}

async function categoryValidator(req, res, next) {
  try {
    await validate(req.body, schema);

    return next();
  } catch (error) {
    return next(error);
  }
}

export { findCategory, categoryValidator };
