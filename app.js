var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var config = require('./config.js');
var swig = require('swig');

var routes;
var db;

if(process.env.USERNAME === 'lenova') {
	mongoose.connect('mongodb://localhost/fridgething');
} else {
	mongoose.connect('mongodb://admin:pass@ds033569.mongolab.com:33569/heroku_333lzs8c');
}
db = mongoose.connection;

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', './templates');

app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
})); 
app.use(cookieParser(config.cookieSecret));

app.use(function nocache(req, res, next) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
})

routes = require('./router.js')(app);
app.use(express.static('./public'))

db.once('open', function(){
	console.log('Connected to db successfully');
	app.listen(process.env.PORT || 5000, function() {
		console.log('Server started and listening on port ' + process.env.PORT || 5000);
	});
})