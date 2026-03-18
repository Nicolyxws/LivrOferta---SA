const repo = require("../repositories/livros.repo");
 
async function list(req, res, next) {
    try {
        const itens = await repo.list(req.livros.id);
        res.json(item);
    } catch (e) {next(e); }
}

async function create(req, res, next) {
   try{
    const id = await repo.create( req.body);
    res.status(201).json({ id});
} catch (e) { next(e); }
}

module.exports = { list, create };