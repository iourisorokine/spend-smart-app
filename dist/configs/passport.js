"use strict";

var User = require("../models/User");
var passport = require("passport");
var bcrypt = require("bcrypt");
var LocalStrategy = require("passport-local");

passport.serializeUser(function (loggedInUser, cb) {
  cb(null, loggedInUser._id);
});

passport.deserializeUser(function (userIdFromSession, cb) {
  User.findById(userIdFromSession, function (err, userDocument) {
    if (err) {
      cb(err);
      return;
    }
    cb(null, userDocument);
  });
});

passport.use(new LocalStrategy(function (username, password, next) {
  User.findOne({ username: username }, function (err, foundUser) {
    if (err) {
      next(err);
      return;
    }

    if (!foundUser) {
      next(null, false, { message: "Incorrect username." });
      return;
    }

    if (!bcrypt.compareSync(password, foundUser.password)) {
      next(null, false, { message: "Incorrect password." });
      return;
    }

    next(null, foundUser);
  });
}));
//# sourceMappingURL=passport.js.map