const express = require("express")
const app = express() // Copia inteira do framework está contido na variável agr

app.get('/', function(req, res){ // Get-> Define a Rota
    res.send("Seja Bem Vindo ao meu app!")
})

app.get("/sobre", function(req,res){
    res.send("Minha pagina sobre")
})

app.get("/blog", function(req,res){
    res.send("Meu blog")
})

app.get("/blog/:nome/:sobrenome", function(req,res){
    res.send(req.params) //O req desse jeito, vai criar uma resposta em JSON
})

app.get("/blog/:nome/:sobrenome/:cor", function(req,res){
    res.send("Ola "+ req.params.nome) //O req desse jeito, vai criar uma resposta em JSON
})

/*Res é a resposta que você vai enviar ao cliente, pode ser objeto, mensagem ou até mesmo 
arquivo HTML*/

app.listen(8081, function(){ /* Cria um Servidor HTTP, Única condição é que essa linha tem 
                                que ser a última do seu programa */
    
    console.info("Servidor rodando na url http://localhost:8081")
}) // função CallBack para verificar que está funcionando
