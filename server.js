const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

//DB Config
const db = require("./config/keys").mongoURI;

//Connect to MongoDb via mongoose

mongoose
  .connect(db) //connect to db declared above
  .then(() => console.log("MongoDB connected")) //if connection is successful, a message is displayed
  .catch(err => console.log(err)); //incase of wrong password, an error is thrown

app.get("/", (req, res) => res.send("Hello World"));

//Use routes
app.use("api/users", users);
app.use("api/profile", profile);
app.use("api/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
