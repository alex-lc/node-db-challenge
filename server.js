const express = require('express');

const resourcesRouter = require('./resources/resources-router.js');
const projectsRouter = require('./projects/projects-router.js');
const tasksRouter = require('./tasks/tasks-router.js');

const server = express();

server.use(express.json());
server.use('/api/resources', resourcesRouter);
server.use('/api/projects', projectsRouter);
server.use('/api/tasks', tasksRouter);

server.get('/', (req, res) => {
    res.status(200).json({ we: 'are working' });
});

module.exports = server;