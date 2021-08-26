
exports.up = async function (knex) {
  return knex.schema.createTable('books', (table) => {
      table.increments('id');
      table.string('title');
      table.string('author');
      table.string('isbn');
      table.boolean('checked_out');
      table.integer("user_id")
      table.timestamp('checked_out_date');
      table.timestamp('due_back_date');
      table.foreign('user_id').references('users.id').onDelete("SET NULL");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('books');
};
