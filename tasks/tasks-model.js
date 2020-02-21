const db = require('../data/db-config');

module.exports = {
    getTasks,
    addTask
};

/* GET list of tasks */
function getTasks() {
    return db('tasks')
        .join('projects', 'tasks.project_id', 'projects.id')
        .select('tasks.*', 'projects.project_name', 'projects.project_desc')
}

/* POST to create a new task */
function addTask(task) {
    return db('tasks').insert(task, 'id');
}
