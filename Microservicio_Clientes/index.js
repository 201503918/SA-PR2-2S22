const express = require("express");
const cors = require('cors');

const methods = require("./methods");

const app=express();

// ******************************** settings ********************************************
this.port = 3001;

// ******************************** middlewares *****************************************
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-COntrol-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(cors())
app.use(express.json({limit:'5mb'}))
app.use(express.urlencoded({extended:false, limit:'5mb'}))


// Para mostra de mejor manera las peticiones GET/POST
app.use(express.json());
app.use(methods)

  //******************************** Empezando el servidor ********************************
app.listen(this.port,()=> {
    console.log('Ejecutando servidor Cliente en el puerto: ',this.port);
});