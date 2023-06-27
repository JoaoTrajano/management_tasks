import express from 'express';
import routerLogin from './LoginRouter.js';
import routerTask from './TaskRouter.js';
import routerUser from './UserRouter.js';

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({ titulo: 'Página inicial' });
  });

  app.use(express.json(), routerLogin, routerTask, routerUser);
};

export default routes;
