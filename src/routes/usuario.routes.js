const express = require("express")
const {list, create} = require("../controller/usuario.controller")
const router = express.Router()

router.get("/:id", list)
router.post("/", create)

module.exports = router