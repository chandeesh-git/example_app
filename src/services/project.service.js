const message = require('../utils/message');
const projectDao = require('../dao/project.dao').projectDetails

const projectService = {
    createProject: async(data) => {
        let project = await projectDao.createProject(data);
        if(project){
            return {'rescode': 200, 'msg': message.PROJECT_CREATED, 'data':project};
        } else {
            return {'rescode': 401, 'msg': message.INVALID_DETAILS, 'data': {}};
        }
    },

    projectList: async() => {
        let projectList = await  projectDao.projectList();
        if(projectList){
			return {'rescode': 200, 'msg': message.PROJECT_LIST, 'data':projectList};
		} else {
			return {'rescode': 401, 'msg': message.NO_DATA_AVAILABLE, 'data': {}}
		}
    },

    editProject: async(data) => {
        let project = await projectDao.editProject(data);
        if(project){
            return {'rescode': 200, 'msg': message.PROJECT_UPDATED, 'data':project};
        } else {
            return {'rescode': 401, 'msg': message.INVALID_DETAILS, 'data': {}};
        }
    },

    
    deleteProject: async(data) => {
        let result = await projectDao.deleteProject(data);
        if(result){
			return {'rescode': 200, 'msg': message.PROJECT_REMOVED, 'data': result};
		} else {
			return {'rescode': 401, 'msg': message.NO_DATA_AVAILABLE, 'data': {}}
		}
    },
}

module.exports = projectService