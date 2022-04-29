import { Router } from 'express';

import roleController from '../controllers/roleController';

const router = Router();

router.get('/', roleController.getRoles);

export default router;