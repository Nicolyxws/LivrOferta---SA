const repo = require("../repositories/usuario.repo");

async function list(req, res, next) {
    try{
        const usuario = await repo.list(req.usuario.id);
        res.json(usuario);
    } catch (error) {
        next(error);
    }  
}

async function create(req, res, next) {
    try{
        const id = await repo.create(req.body);
        res.status(201).json({ id });
    } catch (error) {
        next(error);
    }
}

module.exports = { list, create };
