import { Router } from 'express';

import * as categoriesController from '../controllers/categories';
import { findCategory } from '../validators/categoriesValidator';

const router = Router();

router.delete('/:id', findCategory, categoriesController.deleteCategory);

export default router;
