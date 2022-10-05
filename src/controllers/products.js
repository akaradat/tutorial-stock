import HttpStatus from 'http-status-codes';

import * as productService from '../services/productService';

export async function fetchAll(req, res, next) {
  const data = await productService.getAllProducts();

  res.json({ data });
}

export function create(req, res, next) {
  productService
    .createProduct(req.body)
    .then((data) => res.status(HttpStatus.CREATED).json({ data }))
    .catch((err) => next(err));
}

export function fetchById(req, res, next) {
  productService
    .getProduct(req.params.id)
    .then((data) => res.json({ data }))
    .catch((err) => next(err));
}

export function update(req, res, next) {
  productService
    .updateProduct(req.params.id, req.body)
    .then((data) => res.json({ data }))
    .catch((err) => next(err));
}

export function deleteProduct(req, res, next) {
  productService
    .deleteProduct(req.params.id)
    .then((data) => res.status(HttpStatus.NO_CONTENT).json({ data }))
    .catch((err) => next(err));
}

export function stockProduct(req, res, next) {
  productService
    .stockProduct(req.params.id, req.body)
    .then((data) => res.json({ data }))
    .catch((err) => next(err));
}
