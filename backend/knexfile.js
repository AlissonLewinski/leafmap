//const {db} = require('./.env')

module.exports = {

	client: 'postgresql',
	connection: `${process.env.DATABASE_URL}?ssl=true`,
	pool: {
		min: 2,
		max: 10
	},
	ssl: true
};
