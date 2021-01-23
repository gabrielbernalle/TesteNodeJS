var http = require('http') // O http de dentro é um modulo do node

http.createServer( function(req,res){
    // função de CallBack req -> requisicao, res ->resposta
    res.end("Ola")
}).listen(8081) // Listen-> escolher qual porta de rede vai abrir o servidor 
// CreateServer -> cria um servidor HTTP

console.log("O servidor rodando")
