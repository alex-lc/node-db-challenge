const express = require('express');

const resourcesRouter = require('./resources/resources-router.js');

const server = express();

server.use(express.json());
server.use('/api/resources', resourcesRouter);

server.get('/', (req, res) => {
    res.status(200).json({ we: 'are working' });
});

module.exports = server;