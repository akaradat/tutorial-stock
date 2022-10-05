import { Router } from 'express';

import * as categoryController from '../controllers/categories';
import { findCategory, categoryValidator } from '../validators/categoryValidator';

const router = Router();

router.get('/', categoryController.fetchAll);
router.get('/:id', categoryController.fetchById);
router.post('/', categoryValidator, categoryController.create);
router.delete('/:id', findCategory, categoryController.deleteCategory);
router.put('/:id', findCategory, categoryValidator, categoryController.update);

export default router;
