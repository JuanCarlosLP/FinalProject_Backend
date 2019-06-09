const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'El Nombre es necesario']
    },
    lastName: {
        type: String,
        required: [true, 'El Apellido es necesario']
    },
    userName: {
        type: String,
        unique: true,
        required: [true, 'El Nombre de Usuario es necesario']
    },
    password: {
        type: String,
        required: [true, 'La Contraseña es obligatoria']
    },
    estado: {
        type: Boolean,
        default: true
    },
    access: {
        type: String
    }
});

usuarioSchema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;
}

usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });

module.exports = mongoose.model('Usuario', usuarioSchema);