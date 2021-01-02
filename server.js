const session = require("express-session");
const passportLocal = require("passport-local");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const passport = require("passport");
const mongoose = require("mongoose");
const express = require("express");

const cors = require("cors");
require("dotenv/config");
const app = express();

// ----------------------------------------- Db connection -----------------------------------
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.connect(process.env.DB_CONN, () => {
  console.log("Database connected");
});

// -----------------------------------------Middlewares-----------------------------------

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(cookieParser(process.env.SESSION_SECRET));

app.use(passport.initialize());
app.use(passport.session());
require("./routes/passportConfig")(passport);

// -----------------------------------------import routes-----------------------------------
const authRoute = require("./routes/auth");

// ----------------------------------------- routes -----------------------------------
app.use("/user/", authRoute);

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("server running on port " + PORT);
});
