import { Router } from 'express';

import * as productController from '../controllers/products';
import { findProduct, productValidator } from '../validators/productValidator';

const router = Router();

router.get('/:id', productController.fetchById);
router.get('/', productController.fetchAll);
router.post('/', productValidator, productController.create);
router.put('/:id', findProduct, productValidator, productController.update);
router.delete('/:id', findProduct, productController.deleteProduct);

router.post('/:id/stock', findProduct, productController.stockProduct);

export default router;
