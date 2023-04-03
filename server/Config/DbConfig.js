const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

const { PORT, MONGO_USER, MONGO_PASS, MONGO_DBNAME } = process.env;
const MONGO_URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0.trbgah0.mongodb.net/${MONGO_DBNAME}`;
 const startServer = () =>
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      app.listen(PORT || 5000);
      console.log(`🚀 Server ready at http://localhost:${PORT} 🚀`);
    })
    .catch((err) => {
      console.error(err);
    });

// mongoose strict mode
mongoose.set("strictQuery", false);

module.exports = { app, startServer };
