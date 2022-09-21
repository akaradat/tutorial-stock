import { Router } from 'express';

import * as categoriesController from '../controllers/categories';
import { findCategories, categoriesValidator } from '../validators/categoriesValidator';

const router = Router();

router.get('/', categoriesController.fetchAll);
router.get('/:id', categoriesController.fetchById);
router.post('/', categoriesValidator, categoriesController.create);
router.put('/:id', findCategories, categoriesValidator, categoriesController.update);

export default router;
