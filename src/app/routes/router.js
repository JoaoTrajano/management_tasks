import express from 'express';
import routerTask from './Tasks/TaskRouter.js';

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({ titulo: 'Página inicial' });
  });

  app.use(express.json(), routerTask);
};

export default routes;
