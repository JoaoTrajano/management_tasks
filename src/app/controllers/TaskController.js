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

  static show(req, res) {
    return res.status(200).send({ message: 'teste' });
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

  static update(req, res) {
    return res.status(200).send({ message: 'teste' });
  }

  static delete(req, res) {
    return res.status(200).send({ message: 'teste' });
  }
}

export default Task;
