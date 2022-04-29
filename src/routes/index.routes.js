import { Router } from 'express';

import controller from '../controllers/indexController';

const router = Router();

router.get('/', controller.getHomeView);
router.get('/login', controller.getLoginView);
router.get('/register', controller.getRegisterView);
router.get('/system', controller.getSystemView);

export default router;