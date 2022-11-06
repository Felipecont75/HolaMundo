const express = require('express')
const messagesRouter = require('./routes/messager')

class Server{
    constructor(){
        this.app = express()
        this.paths ={
            messages:"/api/vi/messages"   
        }
        this.routes()
    }

    routes(){      
        //this.app.get('/',(req, res)=>{
            //res.send('Hola mundo')
       // })
       this.app.use(this.paths.messages, messagesRouter)
    }

    listen(){
        this.app.listen(process.env.PORT,()=> {
            console.log("Backend en ejecución en el puerto", process.env.PORT)
        })
    }
}

module.exports=Server