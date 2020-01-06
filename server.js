//Importa as dependências que acabamos de instalar
const express = require('express');
const path = require('path');

const app = express();

// Serve os arquivos estáticos da pasta dist (gerada pelo ng build)
app.use(express.static(__dirname + '/dist/frontend'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/dist/frontend/index.html'));
});

// Inicia a aplicação pela porta configurada
app.listen(process.env.PORT || 8080);

// const express = require('express')
// //var enforce = require('express-sslify');
// //const serveStatic = require('serve-static')
// //const path = require('path')

// const app = express()

// //app.use('/', serveStatic(path.join(__dirname, '/dist')))
// //app.use(enforce.HTTPS({ trustProtoHeader: true }));
// app.use(express.static(__dirname + '/dist'));
// /*app.use('/teste', function(){
//     console.log("oi")
// })*/

// const port = process.env.PORT || 8080
// app.listen(port)

// console.log('Web server na porta: '+port)
