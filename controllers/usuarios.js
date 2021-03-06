const { response, request } = require('express');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const Usuario = require('../models/usuario');

const usuariosGet = (req = request, res = response) => {

    const query = req.query;

    res.json({
        msg: 'Get a mi api - el controlador',
        query
    });
}

/* --------------- Crear un nuevo usuario -----------------------*/

const usuariosPost = async (req, res = response) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }
    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario({ nombre, correo, password, rol });
    //verificar si el correo existe
    const existeEmail = await Usuario.findOne({ correo });
    if (existeEmail) {
        return res.status(400).json({
            msg: 'El correo ya esta registrado en el sistema'
        });
    }
    //encriptar la contraseña
    const salt = bcryptjs.genSaltSync(10);
    usuario.password = bcryptjs.hashSync(password, salt);
    //guardar en bd
    await usuario.save();
    res.json({
        msg: 'Registro de un nuevo usuario',
        usuario
    });
}


/* --------------- Actualizar un nuevo usuario -----------------------*/

const usuariosPut = (req, res = response) => {

    const { id } = req.params;

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