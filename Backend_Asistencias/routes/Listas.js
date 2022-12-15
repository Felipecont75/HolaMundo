const {Router} = require("express")
const {getPase_de_lista, getLista_por_ID, addAsistencia} = require("../controllers/Listas")
const router = Router()

//http://localhost:4008/api/v1/Listas

/// GET ///
router.get("/", getPase_de_lista)

router.get("/Id_Alumno/:Id_Alumno", getLista_por_ID)

/// POST ///
router.post("/", addAsistencia)

module.exports = router