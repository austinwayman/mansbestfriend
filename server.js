require("dotenv").config();

const express = require("express");
// const path = require("path")
// const axios = require("axios");
const mongoose = require("mongoose");
// const db = require("./models")
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const databaseURL = process.env.MONGODB_URI || "mongodb://localhost/forumdb";

mongoose.connect(databaseURL, { useNewUrlParser: true }, () => console.log("connection to mongodb"));
mongoose.Promise = Promise;

app.use(routes)

// Add routes, both API and view
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/public/index.html"));
// });
// Connect to the Mongo DB


// Passport

const passport = require("passport");
require("./services/passport");




// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
