module.exports = {

	index (req, res) {
		return res.view('pages/employees');

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
	}
};