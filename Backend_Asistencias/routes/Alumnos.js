const {Router} = require("express")
const {getStudent, getStudentByID, addStudent} = require("../controllers/Alumnos")
const router = Router()

//http://localhost:4008/api/v1/Alumnos

/// GET ///
router.get("/", getStudent)
router.get("/ID_Alumno/:ID_Alumno", getStudentByID)

/// POST ///
router.post("/", addStudent)


module.exports = router