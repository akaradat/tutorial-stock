import { Router } from 'express';

import * as categoriesController from '../controllers/categories';
import { findCategories, categoriesValidator } from '../validators/categoriesValidator';

const router = Router();

router.get('/', categoriesController.fetchAll);

/**
 * GET /api/categories/:id
 */
router.get('/:id', categoriesController.fetchById);

/**
 * PUT /api/categories/:id
 */
router.put('/:id', findCategories, categoriesValidator, categoriesController.update);

export default router;
