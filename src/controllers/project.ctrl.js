const { response } = require('../utils/utility');
const message = require('../utils/message');
const projectService = require('../services/project.service');

/**
 * @typedef project
 * @property {string} project_name - project name
 * @property {integer} project_enabled - site address
 */

/**
 * This function is used to create project
 * @route POST /project/create
 * @security JWT 
 * @group Project
 * @param {project.model} project.body.required -the new point
 * @returns {Response} -200 -response object containing data, message and component code
 * @returns {Error} default - Unexpected error
 */

/**
 * @typedef Response
 * @property {integer} user
 * @property {string} message.required -response message
 * @property {data} response data payload
 */

exports.createProject = async(req, res) => {
	try {
	   let data  = req.body;
	   let result = await projectService.createProject(data);
	   return response(res, result.rescode, result.msg, result.data);
	} catch (e){
	   return response(res, 500, message.DB_ERROR, {}, null);
	}
}

/**
 * This function is used to get list of projects
 * @route GET /project/listAll
 * @security JWT
 * @group Project
 * @returns {Response} 200 - response object containing data, message and component code
 * @returns {Error}  default - Unexpected error
 */

exports.projectList = async (req, res) => {
	try {
		console.log("mmmmmmmmmmmmmmmmm ererrrrrrrrrrrrrrrrrrrr")
		let result = await projectService.projectList();
		return response(res, result.rescode, result.msg, result.data);
	} catch (e) {
		console.log("error===>>>" + e);
		return response(res, 500, message.DB_ERROR, {}, null)
	}
};

/**
 * @typedef projectEdit
 * @property {string} project_name - project_name
 * @property {integer} project_id.data.required - project ID from jira
 */

/**
 * This function is used to update project
 * @route PUT /project/edit
 * @security JWT
 * @group Project
 * @param {projectEdit.model} projectEdit.body.required -the new point
 * @returns {Response} 200 - response object containing data, message and status code
 * @returns {Error}  default - Unexpected error
 */

/**
 * @typedef Response
 * @property {integer} status
 * @property {string} message.required - response message
 * @property {data} response data payload
 */
exports.editProject = async (req, res) => {
	try {
		let data = req.body;	
		let result = await projectService.editProject(data);
		return response(res, result.rescode, result.msg, result.data);
	} catch (e) {
		console.log("error===>>>" + e);
		return response(res, 500, message.DB_ERROR, {}, null)
	}
};

/**
 * This function is used to remove project
 * @route DELETE /project/remove
 * @security JWT
 * @group Project
 * @param {integer} project_id.query.required - project id
 * @returns {Response} 200 - response object containing data, message and component code
 * @returns {Error}  default - Unexpected error
 */

exports.deleteProject = async (req, res) => {
	try {
		let data = {};
		data['project_id'] = req.query.project_id;
		let result = await projectService.deleteProject(data);
		return response(res, result.rescode, result.msg, result.data);
	} catch (e) {
		console.log("error===>>>" + e);
		return response(res, 500, message.DB_ERROR, {}, null)
	}
};
