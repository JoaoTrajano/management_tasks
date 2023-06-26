import { Router } from 'express';
import Task from '../../controllers/TaskController.js';

const routerTask = Router();

routerTask
  .get('/tasks', Task.index)
  .get('/tasks/:id', Task.show)
  .post('/tasks/create', Task.store)
  .put('/tasks/:id', Task.update)
  .delete('/tasks/:id', Task.delete);

export default routerTask;
