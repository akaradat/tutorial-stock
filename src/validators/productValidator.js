import Joi from '@hapi/joi';

import * as productService from '../services/productService';
import validate from '../utils/validate';

const schema = Joi.object({
  name: Joi.string().label('Name').required(),
  amount: Joi.number().label('Amount').required(),
  price: Joi.number().label('Price').required(),
  category_id: Joi.number().label('Category_id').required(),
  detail: Joi.string().label('Detail').required()
});

function productValidator(req, res, next) {
  return validate(req.body, schema)
    .then(() => next())
    .catch((err) => next(err));
}

function findProduct(req, res, next) {
  return productService
    .getProduct(req.params.id)
    .then(() => next())
    .catch((err) => next(err));
}

export { findProduct, productValidator };
