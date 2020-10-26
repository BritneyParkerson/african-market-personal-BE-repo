
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {
					product_name: 'Apples',
					image_url: 'https://cdn.pixabay.com/photo/2016/11/30/15/00/orchard-1872997_960_720.jpg',
					price: 0.89,
					description: 'Fresh Picked Apples',
					country: 'Tanzania',
					city: 'Dodoma',
					address: '852 Orchard Grove',
					zip_code: '00000',
					created_at: new Date(),
					user_id: 2,
					category_id: 8,
        },
        {
        product_name: "Whole Chickens",
        image_url: "https://cdn.pixabay.com/photo/2019/01/31/21/37/chicken-3968002_960_720.jpg",
        price: 3,
        description: "Whole chickens",
        country: "Kenya",
        city: "Cape Town",
        address: "24425 Feather Lane",
        zip_code: "7100",
        created_at: new Date(),
        user_id: 3,
        category_id: 3,
      },
      {
        product_name: "Potatoes",
        image_url: "https://cdn.pixabay.com/photo/2016/08/11/08/43/potatoes-1585060_960_720.jpg",
        price: 3,
        description: "Potatoes",
        country: "Kenya",
        city: "Cape Town",
        address: "24425 Feather Lane",
        zip_code: "7100",
        created_at: new Date(),
        user_id: 3,
        category_id: 12,
      },
      {
        product_name: "Beef Cuts",
        image_url: "https://cdn.pixabay.com/photo/2017/09/17/14/23/meat-2758553_960_720.jpg",
        price: 4,
        description: "Grass fed beef",
        country: "Tanzania",
        city: "Addis Ababa",
        address: "2333 Bullmoo Drive",
        zip_code: "1230",
        created_at: new Date(),
        user_id: 4,
        category_id: 2,
      },
      {
        product_name: "Fresh Eggs",
        image_url: "https://cdn.pixabay.com/photo/2014/04/05/11/38/food-316412_960_720.jpg",
        price: 1.99,
        description: "Farm Fresh Eggs",
        country: "Morroco",
        city: "Nairobi",
        address: "344 Hen Street",
        zip_code: "00100",
        created_at: new Date(),
        user_id: 1,
        category_id: 1,
      }
      ]);
    });
};
