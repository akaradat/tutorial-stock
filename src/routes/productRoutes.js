import { Router } from 'express';

import * as productController from '../controllers/products';
import {} from '../validators/productValidator';

const router = Router();

/**
 * GET /api/product
 */
router.get('/', productController.fetchAll);

export default router;
