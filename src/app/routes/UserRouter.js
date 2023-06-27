import { Router } from 'express';
import { isAuthenticated } from '../../middlewares/isAuthenticated.js';
import UserController from '../controllers/UserController.js';

const routerUser = Router();

routerUser
  .get('/users', isAuthenticated, UserController.index)
  .get('/user/:id', isAuthenticated, UserController.show);

export default routerUser;
