import { Router } from 'express';
import LoginController from '../controllers/LoginController.js';

const routerLogin = Router();
routerLogin.post('/login', LoginController.index);

export default routerLogin;
