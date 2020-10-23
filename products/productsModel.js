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
		.join('users', 'products.user_id', '=', 'user_id')
		.where('products.user_id', id)
		.select(
			'products.id as product_id',
			'product_name',
			'product_image_url',
			'product_price',
			'product_description',
			'product_country',
			'product_city',
			'product_address',
			'product_zip_code'
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
