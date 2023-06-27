import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true },
  cpf: { type: String, required: true },
  password: { type: String, required: true },
});

const Users = mongoose.model('Users', userSchema);
export default Users;
