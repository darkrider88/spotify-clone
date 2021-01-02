const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
// importing mongodb schema
const User = require("../model/User");
const passport = require("passport");

//routes

router.post("/register", (req, res) => {
  //finding if the user already exist or not

  User.findOne({ email: req.body.email }, async (err, doc) => {
    if (doc) return res.status(200).send("Email already exist");
    if (!doc) {
      try {
        const hashedPass = await bcrypt.hash(req.body.password, 10);
        const data = {
          username: req.body.username,
          email: req.body.email,
          password: hashedPass,
        };
        const newUser = new User(data);
        await newUser.save();
        res.status(201).send("User created");
      } catch (e) {
        res.status(400).send("bhai: " + e);
      }
    }
  });
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) return res.status(200).send(info.message);
    else {
      req.logIn(user, (err) => {
        res.status(200).send("Authenticated");
      });
    }
  })(req, res, next);
});

router.get("/isAuth", (req, res) => {
  //using try catch .. coz what if there is no session
  try {
    const loggedUserId = req.session.passport.user; //return userID

    if (loggedUserId) {
      //if there is some user
      User.findById(loggedUserId)
        .then((user) => {
          return res
            .status(200)
            .send({ isAuth: true, username: user.username });
        })
        .catch((err) => {
          return res.status(200).send({ isAuth: false });
        });
    }
  } catch (error) {
    return res.status(200).send({ isAuth: false });
  }
});

//logout
router.get("/logout", (req, res) => {
  req.session.destroy();
  res
    .status(200)
    .json({ success: true, message: "User logged out successfully" });
});

module.exports = router;
