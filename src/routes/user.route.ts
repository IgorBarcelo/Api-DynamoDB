import { Router } from 'express';
import * as userController from '../controllers/user.controller';

const router = Router();

router.post('/users', userController.create);
router.get('/users/:id', userController.getById);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.remove);
router.get('/users', userController.list);

export default router;
