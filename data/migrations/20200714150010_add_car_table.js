
exports.up = function (knex) {
    return knex.schema.createTable('car-dealer', tbl => {
        tbl.increments('id');
        tbl.string('vin', 100).unique().notNullable()
        tbl.string('make', 100).notNullable()
        tbl.string('model', 100).notNullable()
        tbl.float('mileage', 100).notNullable()
        tbl.string('status', 100)
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('car-dealer')
};
