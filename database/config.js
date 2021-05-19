const mongoose = require('mongoose');

const dbConnection = async () => {

    try {

        await mongoose.connect(process.env.MONGODB_ATLAS, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log("Estamos conectados");

    } catch (e) {
        console.log('hubo un error en la conexion');
        throw new Error('Error en la conexion hacia la base de datos');
    }
}


module.exports = {
    dbConnection
}