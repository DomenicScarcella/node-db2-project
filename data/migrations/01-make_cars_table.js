// DO YOUR MAGIC
exports.up = function (knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();

        tbl.text('vin', 17).unique().notNullable();

        tbl.text('make', 128).notNullable();

        tbl.text('model', 256).notNullable();

        tbl.integer('mileage').unsigned().notNullable();

        tbl.text('title', 128);

        tbl.text('transmission', 128);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('cars');
};
