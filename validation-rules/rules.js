module.exports = {
	customer: {
		create: {
			name: {type: "string", required: true, min: 3, message: "Name required"},
			email: {type: "email", required: true, message: "Valid email required"},
			password: {required: true, min: 8, message: "Password required"},
			confirmPassword: {required: true, min: 8, message: "Confirm and password must be same"},
		},
		edit: {},
		search: {}
	},
	product: {},
	user: {}
};