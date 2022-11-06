const {Router} = require("express")
 const router = Router()
   const {
    rootMessage, 
    hiMessage, 
    byMessage,
    postMessage,
    putMessage,
    deleteMessage

} = require ('../controllers/messages') //Ir a un directorio arriba

 router.get("/", rootMessage)//End point
 router.get("/hi",hiMessage)//End point
 router.get('/bye',byMessage)//End point


 
 router.get('/',postMessage)//End point
 router.get('/',putMessage)//End point
 router.get('/',deleteMessage)//End point

 module.exports = router