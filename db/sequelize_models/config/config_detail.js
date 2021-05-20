//loading env
const dotenv = require('dotenv');

dotenv.config();

let customize_string = process.env;

module.exports = {
	db_host: customize_string.EXAMPLE_APP_DB_HOST,
	db_user_name: customize_string.EXAMPLE_APP_DB_USERNAME,
	db_password: customize_string.EXAMPLE_APP_DB_PASSWORD,
	db_name: customize_string.EXAMPLE_APP_DB_NAME,
	db_dialect: customize_string.EXAMPLE_APP_DB_DIALECT,
	db_pool: {
		max: customize_string.EXAMPLE_APP_DB_POOL_MAX | 0,
		min: customize_string.EXAMPLE_APP_DB_POOL_MIN | 0,
		acquire: customize_string.EXAMPLE_APP_DB_POOL_ACQUIRE | 0,
		idle: customize_string.EXAMPLE_APP_DB_POOL_IDLE | 0,
	},
	port: customize_string.EXAMPLE_APP_PORT,
	base_url: customize_string.EXAMPLE_APP_BASE_URL,
	env_variable: customize_string.EXAMPLE_APP_NODE_ENV,
	// swagger_origin: customize_string.EXAMPLE_APP_SWAGGER_ORIGIN,

}