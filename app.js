var express = require('express');
var engines = require('consolidate');
var app = express();

var opts = {
    host     : 'localhost',
    database : 'callbackalarm',
    protocol : 'postgres',
    password : '',
    port     : '',
    username : 'csbuja'
};

var connection = process.env.DATABASE_URL ||  "postgres://" + opts['username'] + ":" + opts['password'] + "@" + opts['host'] + "/" + opts['database'];

app.set('views', __dirname + '/views');
app.engine('html', engines.mustache);
app.set('view engine', 'html');


app.set('port', process.env.PORT || 3000);
app.use(express.static('public'))

app.get('/',function(req,res){
	res.render('index.html');
});
app.post('/newProspect', function(req, res) {
	var email = req.body.email
});

app.listen(app.get('port'));
console.log('Listening on port: ' + app.get('port'));