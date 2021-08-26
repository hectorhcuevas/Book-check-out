
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          first_name: "Abagail",
          last_name: "Spours"
        }, {
          first_name: "Penney",
          last_name: "Pactat"
        }, {
          first_name: "Jammal",
          last_name: "Furlow"
        }, {
          first_name: "Lanae",
          last_name: "Clements"
        }, {
          first_name: "Alvan",
          last_name: "Dauber"
        }, {
          first_name: "Cole",
          last_name: "Pattini"
        }, {
          first_name: "Isidoro",
          last_name: "Dumingo"
        }, {
          first_name: "Al",
          last_name: "Spensly"
        }, {
          first_name: "Sidnee",
          last_name: "Nevill"
        }, {
          first_name: "Nickolaus",
          last_name: "Skellorne"
        }
      ]);
    });
};
