


//========
//puerto
//=====
process.env.PORT = process.env.PORT || 3000; 

//========
//Entorno
//=====

process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

//========
//Base de datos
//=====
let urlDB;
if(process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/cafe'
}else{
    urlDB = 'mongodb://cafe-user:123456a@ds163300.mlab.com:63300/cafe_mar';
}

process.env.URLDB = urlDB;
