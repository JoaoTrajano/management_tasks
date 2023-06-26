import mongoose from 'mongoose';

import 'dotenv/config';

mongoose.connect(
  `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}${process.env.CLUSTER}.mongodb.net`,
);

const db = mongoose.connection;

export default db;
