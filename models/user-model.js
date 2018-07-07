var db = require('./db');
module.exports = {
	getAll: function(callback){
		var sql = "SELECT * FROM categories";
		db.executeQuery(sql, null, function(result){
			callback(result);
		});
	},
	get: function(id, callback){
		var sql = "SELECT * FROM customer WHERE email=?";
		db.executeQuery(sql, [id], function(result){
			callback(result[0]);
		});
	},
	insert: function(customer, callback){
		var sql = "INSERT INTO customer VALUES (null, ?, null, ?, ?, null, null, null, null, null, null)";
		db.executeQuery(sql, [customer.name, customer.email, customer.password], function(result){
			callback(result);
		});
	},
	update: function(id, name, description, callback){
		var sql = "UPDATE categories SET name=?, description=? WHERE id=?";
		db.executeQuery(sql, [name, description, id], function(result){
			callback(result);
		})
	}
};