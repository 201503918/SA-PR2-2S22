const express = require("express");
const jwt = require("jsonwebtoken");
const keyjwt = require("./keyjwt");
const router = express.Router();

// ******************************* FUNCIONES *************************************************
const Login = (req = Request, res = Response) => {
    try {
        let body = req.body;
        let usuario= body.usuario;
        let password = body.password;
        let rol = body.rol;

        let usuarios = ["Brayan","SABurguer","SARepartidor"];
        let passwords = ["123","321","159"];
        let roles = ["CLIENTE","RESTAURANTE","REPARTIDOR"];

        let posicionuser = 0;
        let usercorrect = false;
        console.log("Ejecutando petición >>> Login")
        for (let index = 0; index < usuarios.length; index++) {
            if(usuario==usuarios[index]){
                usercorrect=true;
                posicionuser=index;
                break;
            }  
        }

        if(usercorrect){
            if(password==passwords[posicionuser]){
                if(rol.toUpperCase()==roles[posicionuser]){
                    const payload = {
                        check: true
                    }
                    const token = jwt.sign(payload,keyjwt.key,{
                        expiresIn:'1d'
                    });
                    res.send({
                        'message': '¡LOGIN EXITOSO! - Bienvenido '+rol.toUpperCase()+': '+usuario,
                        'token': token
                    });
                }else{
                    res.send({
                        'message': 'Error, ROL INCORRECTO: El usuario: '+usuario+' tine Rol de: '+roles[posicionuser]
                    });
                }
            }else{
                res.send({
                    'message': 'Error: El password ingresado del usuario: '+usuario+' es incorrecto'
                }); 
            }
        }else{
            res.send({
                'message': 'Error: El nombre de usuario ingresado: '+usuario+' es incorrecto o no existe'
            }); 
        }
    } catch (error) {
        res.send({
            'message': 'Error: '+error.message
        }); 
    }
}

const ValidateToken = (req = Request, res = Response, next) => {

    try{
        console.log("Ejecutando petición >>> ValidarToken")
        let token = req.headers['x-access-token'] || req.headers['authorization'];
        if(!token){
            res.status(401).send({
                'message': 'Error: Es necesario ingresar un token para continuar'
            })
            return;
        }

        if(token.startsWith('Bearer ')){
            token = token.slice(7,token.length);
        }
        if(token){
            jwt.verify(token,keyjwt.key,(error,decoded)=>{
                if(error){
                    res.send({
                        'message': 'Error: El token ingresado no es válido'
                    })
                    return;
                }else{
                    req.decoded = decoded;
                    next();
                }
            })
        }   
    } catch (error) {
        res.send({
            'message': 'Error: '+error.message
        }); 
        return;
    }   
} 

// ************************** RUTAS *******************************
router.post("/login", Login);
router.get("/info", ValidateToken, (req = Request, res = Response)=>{
    console.log("Ejecutando petición >>> ObtenerPaginaInicio")
    res.send({
        'message': 'Se valido exitosamente el token, ¡BIENVENIDO! INGRESANDO A LA PAGINA DE INICIO'
    })
});

module.exports = router;