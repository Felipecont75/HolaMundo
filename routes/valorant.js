const {Router} = require("express")
const {getAgent, getAgentByID, deleteAgentByID, addAgent, updateUserByAgent} = require("../controllers/valorant")
const router = Router()

//http://localhost:4000/api/v1/valorant

//GET
router.get("/", getAgent)
router.get("/id/:id", getAgentByID)

//DELETE
router.delete("/",deleteAgentByID)

//POST
router.post("/",addAgent)

//PUT
router.put("/",updateUserByAgent)


module.exports = router