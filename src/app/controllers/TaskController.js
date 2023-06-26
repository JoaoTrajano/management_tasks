class Task {
  // constructor() {}
  static index(req, res) {
    return res.status(200).send({ message: 'teste' });
  }

  static show(req, res) {
    return res.status(200).send({ message: 'teste' });
  }

  static store(req, res) {
    return res.status(200).send({ message: 'teste' });
  }

  static update(req, res) {
    return res.status(200).send({ message: 'teste' });
  }

  static delete(req, res) {
    return res.status(200).send({ message: 'teste' });
  }
}

export default Task;
