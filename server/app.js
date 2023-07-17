const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/portfolio';

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

app.get("/", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
 });

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serving on port ${port}`)
})
