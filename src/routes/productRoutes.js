import { Router } from 'express';

import * as productController from '../controllers/products';
import { productValidator } from '../validators/productValidator';

const router = Router();

router.post('/', productController.create);

export default router;
