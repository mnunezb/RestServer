const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');

let rolesValidos={
    values:['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} No es un rol válido'
};

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        require: [true, 'El nombre es necesario'],
    },
    email:{
        type: String,
        unique: true,
        require: [true, 'El correo es necesario']
    },
    password:{
        type: String,
        require: [true, 'El Pass es necesario']
    },
    img:{
        type: String,
        require: false
    },
    role:{
        type: String,
        require:[true, 'El rol es obligatorio'],
        default: 'USER_ROLE',
        enum: rolesValidos
    },//default : 'USER_ROLE'
    estado:{
        type: Boolean,
        default: true,
       // require: [true, 'El estado es obligatorio']
    },
    google:{
        type: Boolean,
        default: false,
       // require:[true, 'Google es obligatorio']
    }
});

usuarioSchema.methods.toJSON = function(){
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;
}

usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser unico'});

module.exports = mongoose.model('Usuario', usuarioSchema);