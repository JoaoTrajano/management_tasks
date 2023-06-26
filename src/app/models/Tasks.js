import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true },
  description: { type: String, required: true },
});

const Tasks = mongoose.model('Tasks', taskSchema);

export default Tasks;
