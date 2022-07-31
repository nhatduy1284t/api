const User = require('../models/User');
const bcrypt = require('bcrypt');
class UserController {
  index(req, res, next) {
    User.find({}, { password: 0 }, function (err, users) {
      res.send(`<pre>${users}</pre>`);
    });
  }

  async createUser(req, res, next) {
    const saltRounds = 10;
    const username = req.body.username;
    const myPlaintextPassword = req.body.pasnsword;
    const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
    const user = {
      username: username,
      password: hash
    }

    User.create(user, function (err, small) {
      if (err) {
        console.log(err);
      }
      else {
        res.send({
          data: small,
          status: "Success"
        });
      }
    });
  }

  async login(req, res, next) {
    //check if user exists

    let userFound = await User.findOne({ username: req.body.username }).exec();
    if (userFound) {
      if (bcrypt.compareSync(req.body.password, userFound.password)) {
        return res.send("Success");
      }
      else {
        return res.send("password in correct")
      }
    }
    else {
      res.status(400).send("USER NOT FOUND");
    }

  }
}

module.exports = new UserController();
