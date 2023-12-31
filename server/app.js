const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors'); 
const ejs = require('ejs');
require('dotenv').config();

const dbUrl = process.env.DB_URL;
mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => { 
    console.log("Database connected");
});

const app = express();

app.use(cors()); 

app.use("/", routes);
app.set('view engine', 'ejs');

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Serving on port ${port}`);
});