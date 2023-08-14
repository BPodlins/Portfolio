const express = require('express');
const router = express.Router();
const Certificate = require('./Models/certificate.js');
const Project = require('./Models/project.js');
const ejs = require('ejs');

router.get('/', async (req, res) => {
    res.sendFile("../src/Components/Home/Home");
});

router.get('/certificates', async (req, res) => {
    try {
        const certificates = await Certificate.find();
        res.json(certificates);
        res.render("../src/Components/Certificates/Certificates")
    } catch (error) {
        console.error('Error fetching certificates:', error);
        res.status(500).json({ error: 'Failed to fetch certificates' });
    }
});

router.get('/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({ error: 'Failed to fetch projects' });
    }
});


module.exports = router;
