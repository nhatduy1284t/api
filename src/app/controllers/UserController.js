const User = require('../models/User');
class UserController {
  index(req, res, next) {
    res.status(200).json({ users: [] });
  }
  createUser(req, res, next) {
    let user = {
      username: req.body.username,
      password: req.body.password,
    };

    User.create(user, function (err, small) {
        if (err) return handleError(err);
        // saved!
      });

    res.send(req.body);
  }
}

module.exports = new UserController();
