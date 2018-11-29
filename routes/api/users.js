const express = require("express");
const router = express.Router();

//load user model
const User = require("../../models/User");

//@route GET      api/users/test
//@description    It tests users route
//@access         Public

router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

//@route          GET api/users/register
//@description    It registers new users
//@access         Public

router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then(User => {
    //find email that matches request
    if (User) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password
      });
    }
  });
});

module.exports = router;
