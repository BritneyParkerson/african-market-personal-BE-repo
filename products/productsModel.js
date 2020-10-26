const db = require('../data/dbConfig.js');

module.exports = {
    addProduct,
    find,
    findBy,
    findById,
    remove,
    update
}


async function addProduct(product) {
	const [id] = await db('products').insert(product, 'id');
	return db('products').where({ id }).first();
  }
  
  function find() {
	return db('products').join('users', 'products.user_id', '=', 'user_id');
  }
  
  function findById(id) {
	return db('products')
	.join('users', 'products.user_id', '=', 'users.id')
	.join('categories', 'products.category_id', '=', 'categories.id')
	.where('products.user_id', id)
	.select(
		'products.id as id',
		'name',
		'image_url',
		'price',
		'description',
		'country',
		'city',
		'address',
		'zip_code',
		'created_at',
		'user_id',
		'category_id'
		);
}

  function update(updates, id) {
    return db('products')
    .where({ id })
    .update(updates);
}
  
  function findBy(id) {
	db('products').where({ id }).first();
  }
  
  function remove(id) {
	return db('products').where({ id }).del();
  }
