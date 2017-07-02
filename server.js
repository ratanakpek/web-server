var express = require('express');
var app = express();
var PORT = 3000;

var middleware ={
  requiredAuthentication:function(req, res, next){
      console.log('private route hit!');
      next();
  },
    logger: function(req, res, next){
      console.log(req.method+' '+ req.originalUrl+' '+ new Date().toString());
      next();
    }
};

//app.use(middleware.requiredAuthentication);

app.use(middleware.logger);

app.get('/', function (req, res) {
    res.send('Hello Express!');

});

app.get('/about', middleware.requiredAuthentication, function (req, res) {
    res.send('About!');
});

app.get('/contact', function (req, res) {
    res.send('Contact!');
});


app.use(express.static(__dirname+'/public'));
app.listen(PORT, function(){
    console.log('Express server started on port '+ PORT+'!');
});