
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categories').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {category_name: 'Animal Products - Livestock'},
        {category_name: 'Animal Products - Poultry'},
        {category_name: 'Animal Products - Other'},
        {category_name: 'Beans'},
        {category_name: 'Cereal - Maize'},
        {category_name: 'Cereal - Rice'},
        {category_name: 'Cereal - Other'},
        {category_name: 'Fruits'},
        {category_name: 'Peas'},
        {category_name: 'Roots & Tubers'},
        {category_name: 'Seeds & Nuts'},
        {category_name: 'Vegetables'},
        {category_name: 'Other'}
      ]);
    });
};




