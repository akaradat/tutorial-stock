import { Router } from 'express';

import * as productController from '../controllers/products';
import { findProduct } from '../validators/productValidator';

const router = Router();

/**
 * DELETE /api/products/:id
 */
router.delete('/:id', findProduct, productController.deleteProduct);

export default router;
