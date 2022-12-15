const {Router} = require("express")
const {getRelacion_Alumno_Maestro, addAdmin, Started, DeleteByID} = require("../controllers/Admin_Es")
const router = Router()

//http://localhost:4008/api/v1/admin

/// GET ///
router.get("/", getRelacion_Alumno_Maestro)

/// POST ///
router.post("/", addAdmin)
router.post("/Started", Started)

/// DELETE ///
router.delete("/", DeleteByID)



module.exports = router