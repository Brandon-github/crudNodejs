import { Router } from 'express';

import controller from '../controllers/userController';

const router = Router();

router.post('/validation', controller.validationUser);

router.post('/registration', controller.addUser);

export default router;