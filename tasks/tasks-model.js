const db = require('../data/db-config');

module.exports = {
    getTasks,
    addTask
};

/* GET list of tasks */
function getTasks() {
    return db('tasks');
}

/* POST to create a new task */
function addTask(task) {
    return db('tasks').insert(task, 'id');
}
