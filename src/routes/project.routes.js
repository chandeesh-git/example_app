var router = require('express').Router();

module.exports = (app) => {
    const project = require('../controllers/project.ctrl');
    router.post('/create',(req, res, next) => {
        project.createProject(req, res)
    })

    router.get('/listAll',(req, res, next) => {
        project.projectList(req, res)
    })

    router.put('/edit',(req, res, next) => {
        project.editProject(req, res)
    })
    
    router.delete('/remove', (req, res, next) => {
        project.deleteProject(req, res)
    })

    return router;
}