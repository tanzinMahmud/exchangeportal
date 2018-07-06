var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'exchange_portal'
});

module.exports = {
	validateUser: function(name, email, password, callback){
		///var sql = "SELECT * FROM users WHERE username=? AND password=?";
		var sql = "UPDATE customer SET customer_id=null, first_name=?, email=?, password=?";
		var sqlParam = [name, email, password];
		connection.query(sql, sqlParam, function(error, result){
			if(error)
			{
				//console.log(error);
				callback(false);
			}
			else
			{
				if(result.length == 0)
				{
					callback(false);
				}
				else
				{
					//console.log(result);
					callback(true);
				}
			}
		});
	}
};
