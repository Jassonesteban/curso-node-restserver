const {response, request} = require('express')

 const usuariosGet = (req = request, res = response) => {

    const query = req.query;

    res.json({
        msg: 'Get a mi api - el controlador',
        query
    });
}

const usuariosPost = (req, res = response) => {

    const {nombre, edad} = req.body;

    res.json({
        msg: 'post a mi api - controlador',
        nombre, edad
    });
}

const usuariosPut = (req, res = response) => {

    const {id} = req.params;

    res.json({
        msg: 'put a mi api - controlador',
        id
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete a mi api - controlador'
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch a mi api - controlador'
    });
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}