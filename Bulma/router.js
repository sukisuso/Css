/**
 * Router 
 * Jesus Juan Aguilar 03/2016
 * */


function route(app) {
	
	app.get('/', function(req, res) {
		console.log('arrrive');
		res.sendFile(__dirname + '/index.html');
		res.end();
	});
	
	
}

exports.redirect = route;