const express = require ("express")
const {creat, list} = require ("../controller/criar-usuario.controller")
const router = express.Router()

router.get("/:id", list)
router.post("/criar", creat)

module.exports = router