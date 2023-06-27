import { Router } from 'express';
import UserController from '../controllers/UserController.js';

const routerUser = Router();

routerUser
  .get('/users', UserController.index)
  .get('/user/:id', UserController.show);

export default routerUser;
