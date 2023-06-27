import Tasks from '../models/Tasks.js';

class Task {
  static async index(req, res) {
    try {
      const tasks = await Tasks.find({});
      return res.status(200).json(tasks);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async show(req, res) {
    try {
      const task = await Tasks.findById(req.params.id).exec();
      return res.status(200).json(task);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async store(req, res) {
    const { name, description } = req.body;
    const newTask = new Tasks({ name, description });

    try {
      await newTask.save();
      return res.status(201).json(newTask);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async update(req, res) {
    try {
      const task = await Tasks.findById(req.params.id).exec();

      if (!task) {
        return res.status(400).send({ message: 'Task não cadastrada' });
      }

      const { name, description } = req.body;

      await Tasks.findByIdAndUpdate(req.params.id, { name, description });

      return res
        .status(200)
        .send({ message: 'Tarefa atualizada com sucesso!' });
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async delete(req, res) {
    try {
      await Tasks.findByIdAndDelete(req.params.id);
      return res.status(200).send({ message: 'Task removida com sucesso!' });
    } catch (error) {
      return res.status(200).json(error);
    }
  }
}

export default Task;
