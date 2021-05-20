module.exports = (app) => {

    //Default route
    app.get('/', function(req, res) {
        res.format({
            'text/html': function() {
                res.redirect('/api-docs.json');
            },
            'application/json': function() {
                res.redirect('/api-docs.json');
            }
        });
        }
    );

    //Project routes
    app.use('/project', require('./project.routes.js')(app));
}