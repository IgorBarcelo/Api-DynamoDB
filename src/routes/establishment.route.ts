import { Router } from 'express';
import * as estController from '../controllers/establishment.controller';

const router = Router();

router.post('/establishments', estController.create);
router.get('/establishments/:id', estController.getById);
router.put('/establishments/:id', estController.update);
router.delete('/establishments/:id', estController.remove);
router.get('/establishments', estController.list);
router.get('/establishments-type/:type', estController.listByType);

export default router;
