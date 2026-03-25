const {criar, lista} = require ("../repositories/criar-usuario.repo");

async function list(req, res, next) {
    try {
        const cadastraUsuarios = await lista(req.cadastraUsuarios.id);
        res.json(cadastraUsuarios);

    } catch (e) { 
      next (e);  }      
}

async function creat(req, res, next) {
    try {
        const id = await criar(req.body);
        res.status(201).json({ id });
    } catch (e) {
      next(e);
    }
}

module.exports = { list, creat }