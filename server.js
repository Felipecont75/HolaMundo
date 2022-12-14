const express = require('express')
const valorantRouter = require ('./routes/valorant')

const messagesRouter = require('./routes/messager')
const usuariosRouter = require('./routes/usuarios')
const cors = require("cors")

class Server{
    constructor(){
        this.app = express()
        this.paths ={
            messages:"/api/v1/messages",   
            usuarios: "/api/v1/usuarios",
            valorant:"/api/v1/valorant"
        }
        this.middlewares()
        this.routes()
    }

    routes(){      
        //this.app.get('/',(req, res)=>{
            //res.send('Hola mundo')
       // })
       this.app.use(this.paths.messages, messagesRouter)
       this.app.use(this.paths.usuarios, usuariosRouter)
       this.app.use(this.paths.usuarios, valorantRouter)
    }

    middlewares(){
        this.app.use(cors()) //Permite solicitudes de origen cruzado
        this.app.use(express.json()) //Habilita la lectura de contendi en formato JSON
    }

    listen(){
        this.app.listen(process.env.PORT,()=> {
            console.log("Backend en ejecución en el puerto", process.env.PORT)
        })
    }
}

module.exports = Server