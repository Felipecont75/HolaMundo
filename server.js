const express = requiere ('express')

class Server{
constructor(){
   this.app = express()
}
routes(){

this.app.get{'/', (req,res) =>{
 res.send('Hello WOrld')
}
}
listen(){
this.app.listen(process.env.PORT, ()=>)
console.log{"Backend en ejecucion en el puerto", process.env.PORT 

}

}

}
module.exports=Server