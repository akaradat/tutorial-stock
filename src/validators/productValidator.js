import * as productService from '../services/productService';

const schema = Joi.object({
  name: Joi.string().label('Name').max(90).required()
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
