const jwt = require('jsonwebtoken');

//================
//Verrificar Token
//================

let verificaToken = (req, res, next)=>{

    let token = req.get('token');

    jwt.verify(token, process.env.SEED, (err, decoded)=>{
        if(err){
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no válido '
                }
            });
        }

        req.usuario = decoded.usuario;
        next();
    });
}

//================
//Verrificar AdminRole
//================
let verificaAdminRole = (req, res, next)=>{


let usuario = req.usuario

if(usuario.role === 'ADMIN_ROLE'){
    next();
    return;
}

 res.json({
    ok: false,
    err:{
    message: `Para realizar esta acción debe ser usuario Administrador`
    }
})
}


module.exports = {
    verificaToken,
    verificaAdminRole
}