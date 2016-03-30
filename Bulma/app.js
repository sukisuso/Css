var http = require('http');

var port = (process.env.PORT || process.env.VCAP_APP_PORT || 3005);

var express = require('express');
var router = require('./router');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended : true
}));

router.redirect(app);

app.listen(port);
console.log('Server running at localhost:' + port);