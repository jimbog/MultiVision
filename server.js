var express = require('express'); //bring the express module
    stylus = require('stylus');
    mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development'; //set the environment

var app = express(); //create the express application

function compile(str, path){
    return stylus(str).set('filename', path);
}

//here we set the configuration for our app
app.configure(function() {
    app.set('views', __dirname + '/server/views'); //pass a callback to setup the configuration
    app.set('view engine', 'jade');
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(stylus.middleware(
        {
            src: __dirname + '/public',
            compile: compile
        }
    ));
    app.use(express.static(__dirname + '/public'))
});

mongoose.connect('mongodb://localhost/multivision')
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
    console.log('multivision db opened');
});
var messageSchema = mongoose.Schema({message: String});
var Message = mongoose.model('Message', messageSchema);
var mongoMessage;
Message.findOne().exec(function(err, messageDoc) {
    mongoMessage = messageDoc.message;
});

app.get('/partials/:partialPath', function(req, res){
    res.render('partials/' + req.params.partialPath);
});

app.get('*', function(req, res) {
    res.render('index', {
        mongoMessage: mongoMessage
    });
}); //any request will be handled by this route, the client will take care of the routing since the server will only serve the index

//now we start listening in the given port
var port = 3030;
app.listen(port);
console.log('Listening on port ' + port + '...')//give feedback when the server starts




