import { Router } from 'express';
import { login, register } from '../controllers/user.controller';


const router = Router();

router.get('/api/users', login);

export default router;