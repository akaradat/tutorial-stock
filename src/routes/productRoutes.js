import { Router } from 'express';

import * as productController from '../controllers/products';
import { productValidator } from '../validators/productValidator';

const router = Router();

router.post('/', productValidator, productController.create);

export default router;
