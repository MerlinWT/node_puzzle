var express = require('express'),
    app = express();

app.get('/', function(req, res){
    res.send('hello world !!!');
});


var server = app.listen(8000, function(){
    var host = server.address().address,
        port = server.address().port;

    console.log('http://%s:%s', host, port);
});