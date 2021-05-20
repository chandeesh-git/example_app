'use strict'
const sql_conn = require('../../db/sequelize_models');
const { Sequelize, Op } = require("sequelize");
const sequelize = new Sequelize("mysql::memory:");

const projectDetails = {
    createProject: async data => {   
        return sql_conn.projectModel.create(data).catch(console.error);
	},

	projectList: async () => {
		return sql_conn.projectModel.findAll().catch(console.error);
	},

	editProject: async data => {
		return sql_conn.projectModel.update(data, {
			where:{
				'id': data.project_id,
			}
		}).catch(console.error);
	},

	deleteProject: async data => {
		return sql_conn.projectModel.destroy({
			where: { 
                'id': data.project_id
            },
		}).catch(console.error);
	},
}

module.exports = {projectDetails}