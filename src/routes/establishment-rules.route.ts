import { Router } from 'express';
import * as ruleController from '../controllers/establishment-rules.controller';

const router = Router();

router.post('/rules', ruleController.create);
router.get('/rules/:establishmentId', ruleController.getByEstablishmentId);
router.put('/rules/:id', ruleController.update);
router.delete('/rules/:id', ruleController.remove);

export default router;
