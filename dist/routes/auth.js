"use strict";

var express = require("express");
var router = express.Router();
var passport = require("passport");
var bcrypt = require("bcrypt");
var User = require("../models/User");

// signup route POST
router.post("/signup", function (req, res, next) {
  var _req$body = req.body,
      username = _req$body.username,
      password = _req$body.password;


  if (!password || password.length < 8) {
    return res.status(400).json({ message: "your password must be 8 characters min." });
  }
  if (!username || username.length < 4) {
    return res.status(400).json({ message: "You must provide a username of 4 char. min." });
  }

  User.findOne({ username: username }).then(function (found) {
    if (found) {
      return res.status(400).json({ message: "This username is already taken" });
    }

    var salt = bcrypt.genSaltSync();
    var hash = bcrypt.hashSync(password, salt);

    return User.create({ username: username, password: hash }).then(function (dbUser) {
      req.login(dbUser, function (err) {
        if (err) {
          return res.status(500).json({ message: "error while creating user" });
        }
      });
      res.json(dbUser);
    });
  }).catch(function (err) {
    res.json(err);
  });
});

//login route
router.post("/login", function (req, res) {
  passport.authenticate("local", function (err, user) {
    if (err) {
      return res.status(500).json({ message: "Error while authenticating" });
    }
    if (!user) {
      return res.status(400).json({ message: "Wrong credentials" });
    }
    req.login(user, function (err) {
      if (err) {
        return res.status(500).json({ message: "Error while attempting to login" });
      }
      return res.json(user);
    });
  })(req, res);
});

// DELETE /api/auth/logout
router.delete("/logout", function (req, res) {
  req.logout();
  res.json({ message: "Successful logout" });
});

//check if the user has an active session
router.get("/loggedin", function (req, res) {
  res.json(req.user);
});

module.exports = router;
//# sourceMappingURL=auth.js.map