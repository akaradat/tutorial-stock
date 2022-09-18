import { Router } from 'express';

import * as productController from '../controllers/products';
import {} from '../validators/productValidator';

const router = Router();

/**
 * GET /api/products/:id
 */
router.get('/:id', productController.fetchById);

export default router;
