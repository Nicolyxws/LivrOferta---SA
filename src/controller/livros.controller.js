const {list, create} = require("../repositories/livros.repo");
 
async function list2(req, res, next) {
    try {
        const itens = await list(req.livros.id);
        res.json(item);

    } catch (e) { 
      next (e);  }
}

async function create2(req, res, next) {
    try {
        const id = await create(req.body);
        res.status(201).json({ id});
    } catch (e) {
      next(e);
    }
}

module.exports = { list2, create2};