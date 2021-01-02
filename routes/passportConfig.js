const User = require("../model/User");
const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      // find the user match from database
      User.findOne({ email: email })
        .then((user) => {
          if (!user) {
            return done(null, false, { message: "User doesn't exist" }); //user not found
          }
          //else match the password
          bcrypt.compare(password, user.password, (err, isMatched) => {
            if (err) throw err;
            if (isMatched) return done(null, user);
            else return done(null, false, { message: "Incorrect Password :(" });
          });
        })
        .catch((err) => console.log(err));
    })
  );

  passport.serializeUser((user, done) => {
    //alloting cookie with userid
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      if (err) throw err;
      done(err, user); //finds user from the cookie
    });
  });
};
