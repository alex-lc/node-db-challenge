const express = require('express');

const Tasks = require('./tasks-model.js');

const router = express.Router();

// end points

/* GET list of all tasks */
router.get('/', (req, res) => {
    Tasks.getTasks()
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(err => {
            res.status(400).json({ error: 'We could not retrieve the list of tasks.' });
        })
});

/* POST to create a new task */
router.post('/:id', (req, res) => {

    const id = req.params.id;
    const newTask = { ...req.body, project_id: id };

    Tasks.addTask(newTask)
        .then(task => {
            res.status(201).json(task);
        })
        .catch(err => {
            res.status(400).json({ error: 'We could not create that task.' });
        })
});

module.exports = router;