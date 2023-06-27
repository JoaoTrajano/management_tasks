import jwt from 'jsonwebtoken';
import 'dotenv/config';

export const isAuthenticated = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ mensagem: 'Acesso não autorizado!' });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ mensagem: 'Acesso inválido!' });
    }

    req.user = decoded;
    next();
  });
};
