var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(__dirname + '/dist'));
app.listen(process.env.PORT || 8080);
app.get('*', function(req, res){
 res.sendFile(path.resolve(__dirname, 'dist', 'index.htm'))
});
