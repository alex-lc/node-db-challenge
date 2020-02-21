const db = require('../data/db-config');

module.exports = {
    getProjects,
    addProject
};

/* GET list of projects */
function getProjects() {
    return db('projects');
}

/* POST to create a new project */
function addProject(project) {
    return db('projects').insert(project, 'id');
}