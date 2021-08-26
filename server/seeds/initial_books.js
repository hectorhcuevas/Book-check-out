
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {
          isbn: "9781593279509",
          title: "Eloquent JavaScript, Third Edition",
          author: "Marijn Haverbeke",
          checked_out: false
      },
      {
          isbn: "9781491943533",
          title:"Practical Modern JavaScript",
          author:"Nicolás Bevacqua",
          checked_out: false
      },
      {
          isbn: "9781593277574",
          title:"Understanding ECMAScript 6",
          author: "Nicholas C. Zakas",
          checked_out: false
      },
      {
          isbn: "9781449365035",
          title: "Speaking JavaScript",
          author:"Axel Rauschmayer",
          checked_out: false
      },
      {
          isbn:"9781449331818",
          title:"Learning JavaScript Design Patterns",
          author:"Addy Osmani",
          checked_out: false
      },
      {
          isbn:"9798602477429",
          title:"You Don't Know JS Yet",
          author:"Kyle Simpson",
          checked_out: false
      },
      {
          isbn:"9781484200766",
          title:"Pro Git",
          author:"Scott Chacon and Ben Straub",
          checked_out: false
      },
      {
          isbn:"9781484242216",
          title:"Rethinking Productivity in Software Engineering",
          author:"Caitlin Sadowski, Thomas Zimmermann",
          checked_out: false
      },
      ]);
    });
};