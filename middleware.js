
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
module.exports=middleware;