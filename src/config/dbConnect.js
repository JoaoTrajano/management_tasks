import mongoose from 'mongoose';

import 'dotenv/config';

mongoose.connect(`
  mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}${process.env.CLUSTER}.mongodb.net
`);

const db = mongoose.connection;

export default db;
