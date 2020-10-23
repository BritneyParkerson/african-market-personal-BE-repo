const db = require('../data/dbConfig.js');

module.exports = {
    addCategory,
    find,
    findBy,
    findById,
    remove,
    update
}


async function addCategory(category) {
	const [id] = await db('categories').insert(category, 'id');
	return db('categories').where({ id }).first();
  }
  
  function find() {
	return db('categories');
  }
  
  function findBy(filter) {
	return db('categories').where(filter);
  }

  function update(updates, id) {
    return db('categories')
    .where({ id })
    .update(updates);
}
  
  function findById(id) {
	db('categories').where({ id }).first();
  }
  
  function remove(id) {
	return db('categories').where({ id }).del();
  }
