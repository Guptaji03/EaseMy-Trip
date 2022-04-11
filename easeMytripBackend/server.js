const app = require("./app");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
// const session = require("express-session");
// console.log(process.env);

app.use(express.json());
app.use(cors());

//GAuth
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
require("./configure/passport")(passport);

mongoose
  .connect(process.env.URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection to database is successfull");
  });

// const port = 8001;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.URL,
    }),
  })
);
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(require("./controllers/index"));
app.use("/auth", require("./controllers/auth"));

app.set("view engine", "ejs");

// console.log(pro.cess.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET);
 var port =process.env.PORT || 8000
app.listen(port, () => {
  console.log(`app is running at port ${port}`);
});
