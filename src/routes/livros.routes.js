const express = require("express")
const livrosController = require("../controller/livros.controller")
const router = express.Router()

router.get("/", livrosController.ListarLivros)

router.post("/", livrosController.CriarLivros)

// router.get("/:id", livrosController.DetalharLivro)

router.delete("/:id", livrosController.DeleteLivro)

// router.put("/:id", livrosController.atualizarLivros)

module.exports = router ;