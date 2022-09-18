import { Router } from 'express';

import * as categoriesController from '../controllers/categories';
import { categoriesValidator } from '../validators/categoriesValidator';

const router = Router();

/**
 * GET /api/categories/:id
 */
router.get('/:id', categoriesController.fetchById);

/**
 * POST /api/categories
 */
router.post('/', categoriesValidator, categoriesController.create);

export default router;
