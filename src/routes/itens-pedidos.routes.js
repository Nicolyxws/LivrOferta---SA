const express = require("express")
const {list, create} = require("../controller/itens-pedidos.controller")
const router = express.Router()

router.get("/:id", list)
router.post("/criar", create)

module.exports = router