
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categories').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {category_name: 'rowValue1'},
        {category_name: 'rowValue2'},
        {category_name: 'rowValue3'}
      ]);
    });
};
