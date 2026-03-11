const repo = require("../repositories/livro.repo");
 
async function ListarLivros(req, res, next) {
    try {
        const itens = await repo.list(req.livros.id);
        res.json(item);
    } catch (e) {next(e); }
}

async function CriarLivros(req, res, next) {
   try{
    const id = await repo.create(req.livros.id, req.body);
    res.status(201).json({ id});
} catch (e) { next(e); }
}

async function DeleteLivro(req, res, next) {
 try {
    console.log(' deletando livro com id:', req.params.id);
    await repo.DeleteLivro(req.params.id);
    res.status(204).send();
  } catch (e) {
    next(e);
    }
}

module.exports = { ListarLivros, CriarLivros, DeleteLivro };