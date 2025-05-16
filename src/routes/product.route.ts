import { Router } from 'express';
import * as productController from '../controllers/product.controller';

const router = Router();

router.post('/products', productController.create);
router.get('/products/:id', productController.getById);
router.put('/products/:id', productController.update);
router.delete('/products/:id', productController.remove);
router.get('/products', productController.list);

export default router;
