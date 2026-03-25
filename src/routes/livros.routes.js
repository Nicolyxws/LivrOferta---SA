const express = require("express")
const {list2, create2} = require("../controller/livros.controller")
const router = express.Router()

router.get("/:id", list2)
router.post("/criar", create2)

module.exports = router