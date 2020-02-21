
exports.up = function (knex) {
    return knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects');
};

exports.down = function (knex) {
    return knex.schema.createTable('projects', tbl => {
        // project primary id
        tbl.increments();

        // project name req.
        tbl.string('project_name', 128)
            .notNullable();

        // project desc optional
        tbl.string('project_desc', 128);

        // completed boolean
        tbl.boolean('completed').defaultTo('false');

    }).createTable('resources', tbl => {
        // resource primary id
        tbl.increments();

        // resource name req.
        tbl.string('resource_name', 128)
            .notNullable()
            .unique();

        // resource desc optional
        tbl.string('resource_description', 128);

    }).createTable('tasks', tbl => {
        // task primary id
        tbl.increments();

        // tasks id foreign
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        // tasks desc
        tbl.string('description', 128)
            .notNullable();

        // task notes
        tbl.string('notes', 128);

        // completed boolean
        tbl.boolean('completed').defaultTo('false');

    }).createTable('project_resources', tbl => {
        // bridge to projects
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects');

        // bridge to resources
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('resources');

        // compound key
        tbl.primary(['project_id', 'resource_id']);
    })
};