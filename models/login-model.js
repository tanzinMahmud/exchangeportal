var db = require('./db');
module.exports = {
	validateUser: function(email, password, callback){
		var sql = "SELECT * FROM customer WHERE email=? AND password=?";
		var sqlParam = [email, password];
		db.executeQuery(sql, sqlParam, function(result){
			if(!result)
			{
				callback(false);
			}
			else
			{
				callback(result.length != 0);
			}
		});
	}
};
