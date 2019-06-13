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

	async update (req, res) {
		let accountType = req.param('accountType');
		let username = req.param('username');
		let password = req.param('password');
		let email = req.param('email');
		let firstName = req.param('firstName');
		let lastName = req.param('lastName');
		
		await Employee.update({
			accountType,
			username,
			password,
			email,
			firstName,
			lastName
		});
		
		return res.redirect('/employees');
	},

};