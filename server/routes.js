const express = require('express');
var router = express.Router();


 router.get("/", (req, res) => {
    res.json({});
  });

  router.get("/about", (req, res) => {
    res.json({});
  });

  router.get("/certificates", (req, res) => {
    res.json({});
  });

  router.get("/projects", (req, res) => {
    res.json({});
  });

  router.get("/contact", (req, res) => {
    res.json({});
  });

  module.exports = router;