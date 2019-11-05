const express = require("express");
const router = express.Router();
const passport = require("passport");
const bcrypt = require("bcrypt");
const User = require("../models/User");

// signup route POST
router.post("/signup", (req, res, next) => {
  const { username, password } = req.body;

  if (!password || password.length < 8) {
    return res
      .status(400)
      .json({ message: "your password must be 8 characters min." });
  }
  if (!username || username.length < 4) {
    return res
      .status(400)
      .json({ message: "You must provide a username of 4 char. min." });
  }

  User.findOne({ username: username })
    .then(found => {
      if (found) {
        return res
          .status(400)
          .json({ message: "This username is already taken" });
      }

      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync(password, salt);

      return User.create({ username: username, password: hash }).then(
        dbUser => {
          req.login(dbUser, err => {
            if (err) {
              return res
                .status(500)
                .json({ message: "error while creating user" });
            }
          });
          res.json(dbUser);
        }
      );
    })
    .catch(err => {
      res.json(err);
    });
});

//login route
router.post("/login", (req, res) => {
  passport.authenticate("local", (err, user) => {
    if (err) {
      return res.status(500).json({ message: "Error while authenticating" });
    }
    if (!user) {
      return res.status(400).json({ message: "Wrong credentials" });
    }
    req.login(user, err => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error while attempting to login" });
      }
      return res.json(user);
    });
  })(req, res);
});

// DELETE /api/auth/logout
router.delete("/logout", (req, res) => {
    req.logout();
    res.json({ message: "Successful logout" });
  });
  
  //check if the user has an active session
  router.get("/loggedin", (req, res) => {
    res.json(req.user);
  });

module.exports = router;
