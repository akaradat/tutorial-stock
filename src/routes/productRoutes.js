import { Router } from 'express';

import * as productController from '../controllers/products';
import { findProduct, productValidator } from '../validators/productValidator';

const router = Router();

router.get('/', productController.fetchAll);
router.post('/', productValidator, productController.create);
router.delete('/:id', findProduct, productController.deleteProduct);

export default router;
