import HttpStatus from 'http-status-codes';

import * as categoryService from '../services/categoryService';

export async function fetchAll(req, res, next) {
  try {
    const data = await categoryService.getAllCategories();

    res.json({ data });
  } catch (error) {
    next(error);
  }
}

export async function fetchById(req, res, next) {
  try {
    const data = await categoryService.getCategory(req.params.id);

    res.json({ data });
  } catch (error) {
    next(error);
  }
}

export async function create(req, res, next) {
  try {
    // console.log(req.body);
    const data = await categoryService.createCategory(req.body);

    res.status(HttpStatus.CREATED).json({ data });
  } catch (error) {
    next(error);
  }
}

export async function update(req, res, next) {
  try {
    const data = await categoryService.updateCategory(req.params.id, req.body);

    res.json({ data });
  } catch (error) {
    next(error);
  }
}

export async function deleteCategory(req, res, next) {
  try {
    await categoryService.deleteCategory(req.params.id);

    res.status(HttpStatus.NO_CONTENT).end();
  } catch (error) {
    next(error);
  }
}
