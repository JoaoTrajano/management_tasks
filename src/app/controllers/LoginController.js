import User from '../models/Users.js';
import 'dotenv/config';
import jwt from 'jsonwebtoken';

class LoginController {
  static async index(req, res) {
    try {
      const { cpf, password } = req.body;
      const user = await User.find({ cpf, password });

      if (!user) {
        return res.status(400).send({ message: 'CPF ou Senha inválidos!' });
      }

      const token = jwt.sign(cpf, process.env.SECRET_KEY);

      return res.status(200).json(token);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

export default LoginController;
