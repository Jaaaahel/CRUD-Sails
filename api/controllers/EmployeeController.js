module.exports = {

	async index (req, res) {
		let employees = await Employee.find();

		return res.view('pages/employees', {employees});
	},
	
	async add (req, res) {
		let accountType = req.param('accountType');
		let username = req.param('username');
		let password = req.param('password');
		let email = req.param('email');
		let firstName = req.param('firstName');
		let lastName = req.param('lastName');

		await Employee.create({
			accountType,
			username,
			password,
			email,
			firstName,
			lastName
		});

		return res.redirect('/employees');
		console.log(accountType, username, password, email, firstName, lastName);
	},

	async edit (req, res) {
		let id = req.param("id");
		let employees = await Employee.findOne({id});

		return res.view('pages/update', {employees});
	},

	async update (req, res) {
		let id = req.param("id");
		let accountType = req.param('accountType');
		let username = req.param('username');
		let email = req.param('email');
		let firstName = req.param('firstName');
		let lastName = req.param('lastName');
		
		await Employee.update({id})
		.set({
			accountType,
			username,
			email,
			firstName,
			lastName
		});

		return res.redirect('/employees');
	},

	async delete (req, res) {
		let id = req.param("id");
		let employees = await Employee.findOne({id});
		
		return res.view('pages/destroy', {employees});
	},

	async destroy (req, res) {
		let id = req.param("id");
		
		await Employee.destroy({id})

		return res.redirect('/employees');
	}
};