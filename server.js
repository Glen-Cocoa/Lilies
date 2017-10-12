var express = require('express')

var app = express()

app.use('/', express.static(__dirname + '/'));

app.get('/',function(req,res){
  res.sendfile('./index.html');
});

var listener = app.listen(4200, function() {
		console.log('Server started on ' + listener.address().port);
	});

var logger = function(req, res, next) {
		console.log(req.method, req.url);
		next();
};