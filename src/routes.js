import { Router } from 'express';

import swaggerSpec from './utils/swagger';
import userRoutes from './routes/userRoutes';
import productRoutes from './routes/productRoutes';
import categoriesRoutes from './routes/categoriesRoutes';

const router = Router();

router.get('/swagger.json', (req, res) => {
  res.json(swaggerSpec);
});

router.get('/', (req, res) => {
  res.json({
    app: req.app.locals.title,
    apiVersion: req.app.locals.version
  });
});

router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/categories', categoriesRoutes);

export default router;
