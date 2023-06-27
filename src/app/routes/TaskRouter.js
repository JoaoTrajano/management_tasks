import { Router } from 'express';
import Task from '../controllers/TaskController.js';
import { isAuthenticated } from '../../middlewares/isAuthenticated.js';

const routerTask = Router();

routerTask
  .get('/tasks', isAuthenticated, Task.index)
  .get('/tasks/:id', isAuthenticated, Task.show)
  .post('/tasks/create', isAuthenticated, Task.store)
  .put('/tasks/:id', isAuthenticated, Task.update)
  .delete('/tasks/:id', isAuthenticated, Task.delete);

export default routerTask;
