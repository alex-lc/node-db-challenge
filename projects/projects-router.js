const express = require('express');

const Projects = require('./projects-model.js');

const router = express.Router();

// endpoints

/* GET list of projects */
router.get('/', (req, res) => {
    Projects.getProjects()
        .then(list => {
            res.status(200).json(list);
        })
        .catch(err => {
            res.status(400).json({ error: 'We could not retrieve the list of projects.' });
        })
});

/* POST to create a new project */
router.post('/', (req, res) => {

    const newProject = req.body;

    Projects.addProject(newProject)
        .then(project => {
            res.status(201).json(project);
        })
        .catch(err => {
            res.status(400).json({ error: 'We could not create that project.' });
        })
});

module.exports = router;
