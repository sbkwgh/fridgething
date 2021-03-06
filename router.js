var index = require('./routes/index.js');
var account = require('./routes/account.js');
var api = require('./routes/api.js');
var item = require('./routes/api/item.js');
var recipes = require('./routes/api/recipes.js');

module.exports = function(app) {
	app.use('/', index);
	app.use('/account', account);
	app.use('/api', api);
	app.use('/api/item', item);
	app.use('/api/recipes', recipes);
};