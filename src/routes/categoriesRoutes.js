import { Router } from 'express';

import * as categoriesController from '../controllers/categories';
import {} from '../validators/categoriesValidator';

const router = Router();

/**
 * GET /api/categories/:id
 */
router.get('/:id', categoriesController.fetchById);

export default router;
