import db from './src/config/database/dbConnect.js';
import app from './src/app/app.js';
import 'dotenv/config';

const port = process.env.PORT || process.env.PORT_DEVELOPMENT;

db.on('error', console.log.bind('Erro ao conectar com o banco de dados'));
db.once('open', () => {
  console.log('Conexão efetuada com sucesso');
});

app.listen(port, (error) => {
  if (!error) {
    console.log(`API operando na porta ${port}`);
    return;
  }
  console.log.bind(error);
});
