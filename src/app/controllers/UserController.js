import Users from '../models/Users.js';

class UserController {
  static async index(_, res) {
    try {
      const users = await Users.find({});

      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  static async show(req, res) {
    const id = req.params.id;
    try {
      const user = Users.findById(id).exec();
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default UserController;
