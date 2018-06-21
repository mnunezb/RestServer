require('./config/config')

const express = require('express')

// Using Node.js `require()`
const mongoose = require('mongoose');
const path = require('path');

const app = express();

const bodyParser = require('body-parser')

//Habilitar la carpeta public
app.use(express.static(path.resolve(__dirname, '../public')));


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

//configuracion global de rutas 
app.use(require('./routes/index'))
 

  mongoose.connect(process.env.URLDB,(err, res)=>{
      if(err){
          throw err;
      }else{
          console.log("Base de datos ONLINE");
      }
  });
 
app.listen(process.env.PORT, ()=>{
    console.log("Escuchando puerto", process.env.PORT);
})