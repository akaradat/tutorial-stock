import { Router } from 'express';

import * as categoriesController from '../controllers/categories';
import { findCategory, categoriesValidator } from '../validators/categoriesValidator';

const router = Router();

router.get('/', categoriesController.fetchAll);
router.get('/:id', categoriesController.fetchById);
router.post('/', categoriesValidator, categoriesController.create);
router.delete('/:id', findCategory, categoriesController.deleteCategory);
router.put('/:id', findCategory, categoriesValidator, categoriesController.update);

export default router;
