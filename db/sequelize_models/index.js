const Sequelize = require('sequelize');
const dbConfig = require('./config/config_detail');

const sequelize = new Sequelize(dbConfig.db_name, dbConfig.db_user_name, dbConfig.db_password, {
	host: dbConfig.db_host,
	dialect: dbConfig.db_dialect,
	operatorsAliases: false,
	define: {
		freezeTableName: true,
		underscored: true,
		timestamps: true
	},
	pool: {
		max: dbConfig.db_pool.max,
		min: dbConfig.db_pool.min,
		acquire: dbConfig.db_pool.acquire,
		idle: dbConfig.db_pool.idle
	}
});

const db = {};
db.sequelize = sequelize;
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

db.projectModel = require('./project')(sequelize, Sequelize);

module.exports = db;