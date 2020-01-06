const express = require('express')
//var enforce = require('express-sslify');
//const serveStatic = require('serve-static')
//const path = require('path')

const app = express()

//app.use('/', serveStatic(path.join(__dirname, '/dist')))
//app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(express.static(__dirname + '/dist'));
/*app.use('/teste', function(){
    console.log("oi")
})*/

const port = process.env.PORT || 8080
app.listen(port)

console.log('Web server na porta: '+port)
