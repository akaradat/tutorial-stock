import HttpStatus from 'http-status-codes';

import * as categoriesService from '../services/categoriesService';

export async function fetchAll(req, res, next) {
  try {
    const data = await categoriesService.getAllCategories();

    res.json({ data });
  } catch (error) {
    next(error);
  }
}

export async function fetchById(req, res, next) {
  try {
    const data = await categoriesService.getCategories(req.params.id);

    res.json({ data });
  } catch (error) {
    next(error);
  }
}

export async function create(req, res, next) {
  try {
    const data = await categoriesService.createCategories(req.body);

    res.status(HttpStatus.CREATED).json({ data });
  } catch (error) {
    next(error);
  }
}

export async function update(req, res, next) {
  try {
    const data = await categoriesService.updateCategories(req.params.id, req.body);

    res.json({ data });
  } catch (error) {
    next(error);
  }
}

export async function deleteCategory(req, res, next) {
  try {
    const data = await categoriesService.deleteCategory(req.params.id);

    res.status(HttpStatus.NO_CONTENT).json({ data });
  } catch (error) {
    next(error);
  }
}
