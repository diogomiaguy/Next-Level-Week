const express = require("express")
const server = express()

//configurar pasta public
server.use(express.static("public"))
//configurar caminhos da aplicação
//req= requisição | res= resposta

//template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views",{
  express: server,
  noCache: true
})


//rota inicial
server.get("/", (req,res) => {
  // res.sendFile(__dirname + "/views/index.html")
  return res.render("index.html")
})
//rota create-point
server.get("/create-point", (req,res) => {
  return res.render("create-point.html")
})
//rota search-results
server.get("/search-results", (req,res) => {
  return res.render("search-results.html")
})


//ligar o servidor
server.listen(3000, ()=>{
  console.log("Servidor iniciado...")
})