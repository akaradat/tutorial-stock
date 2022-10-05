import HttpStatus from 'http-status-codes';

import * as productService from '../services/productService';

export async function fetchAll(req, res, next) {
  try {
    const data = await productService.getAllProducts();

    res.json({ data });
  } catch (error) {
    next(error);
  }
}

export async function fetchById(req, res, next) {
  try {
    const data = await productService.getProduct(req.params.id);

    res.json({ data });
  } catch (error) {
    next(error);
  }
}

export async function create(req, res, next) {
  try {
    const data = await productService.createProduct(req.body);

    res.status(HttpStatus.CREATED).json({ data });
  } catch (error) {
    next(error);
  }
}

export async function update(req, res, next) {
  try {
    const data = await productService.updateProduct(req.params.id, req.body);

    res.json({ data });
  } catch (error) {
    next(error);
  }
}

export async function deleteProduct(req, res, next) {
  try {
    await productService.deleteProduct(req.params.id);

    res.status(HttpStatus.NO_CONTENT).end();
  } catch (error) {
    next(error);
  }
}
