import { Router } from 'express';

import * as productController from '../controllers/products';
import { findProduct, productValidator } from '../validators/productValidator';

const router = Router();

/**
 * PUT /api/products/:id
 */
router.put('/:id', findProduct, productValidator, productController.update);

export default router;
