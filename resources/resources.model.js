const db = require('../data/db-config');

module.exports = {
    addResource,
    getResources
}

// POST to add a new resource
function addResource(resource) {
    return db('resources').insert(resource, 'id');
}

function getResources() {
    return db('resources');
}