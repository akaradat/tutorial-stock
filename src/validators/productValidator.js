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

async function findProduct(req, res, next) {
  try {
    await productService.getProduct(req.params.id);

    return next();
  } catch (error) {
    return next(error);
  }
}

async function productValidator(req, res, next) {
  try {
    await validate(req.body, schema);

    return next();
  } catch (error) {
    return next(error);
  }
}

export { findProduct, productValidator };
