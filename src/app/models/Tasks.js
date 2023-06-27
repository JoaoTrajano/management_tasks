import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true },
  description: { type: String, required: true },
  time: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Tasks = mongoose.model('Tasks', taskSchema);

export default Tasks;
