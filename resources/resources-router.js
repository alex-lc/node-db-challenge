const express = require('express');

const Resources = require('./resources.model.js');

const router = express.Router();

// endpoints

/* GET list of resources */
router.get('/', (req, res) => {
    Resources.getResources()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(err => {
            res.status(400).json({ error: 'We could not retrieve the list of resources.' });
        })
});

/* POST to create a new resource */
router.post('/', (req, res) => {

    const newResource = req.body;
    Resources.addResource(newResource)
        .then(resource => {
            res.status(201).json(resource);
        })
        .catch(err => {
            res.status(400).json({ error: 'Resource could not be created.' });
        })
});



module.exports = router;