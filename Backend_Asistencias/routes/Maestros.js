const {Router} = require("express")
const {getMaster, getMasterByID,  addMaster} = require("../controllers/Maestros")
const router = Router()

//http://localhost:4008/api/v1/Maestros

/// GET ///
router.get("/", getMaster)
router.get("/Maestro_/:Maestro_", getMasterByID)

/// POST ///
router.post("/", addMaster)

module.exports = router