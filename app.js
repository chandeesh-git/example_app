var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');

// Your routes live here
var routes = require('./src/routes');
// Bootstrap Express
var app = express();
//Connect Swagger
const expressSwagger = require('express-swagger-generator')(app);

// For Sequelize
const db = require('./db/sequelize_models/');

// db.sequelize.sync({ alter: true });

const options = {
	swaggerDefinition: {
		info: {
			description: 'This is Example app',
			title: 'Swagger',
			version: '1.0.0',
		},
		host: 'localhost:3000',
		basePath: '/',
		produces: ['application/json', 'application/xml'],
		schemes: ['http', 'https'],
		securityDefinitions: {
			JWT: {
				type: 'apiKey',
				in: 'header',
				name: 'Authorization',
				description: '',
			},
		},
	},
	basedir: __dirname, // app absolute path
	files: ['./routes/**/*.js', './src/controllers/**/*.js'], // Path to the API handle folder
};
expressSwagger(options);

var port = process.env.PORT || 3000

// var devEnv = app.get('env') == 'development';

// The following settings applies to all environments
app.set('port', port);

// Include request parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.get('/',(req,res) => {
    res.send('app starting');
})

routes(app);

//start server

http.createServer(app).listen(port, function(){
    console.log('Server is running at http://locahost' + ':' + port);
})