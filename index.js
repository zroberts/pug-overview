
var express = require('express');
var bp = require('body-parser');

var app = express();

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bp.urlencoded());
app.use(bp.json());

app.get('/', function(req, res){
	res.render('main', {title: "Welcome"});
})

app.post('/api/product/search', function(req, res){
	var _search = req.body;
	console.log(_search);
	res.render('main', {title: 'Found'});
});

app.listen(port, function(){
	console.log('App is now lisiening on port ' +  port);
});

