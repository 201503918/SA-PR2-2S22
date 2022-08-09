const express = require("express");
const router = express.Router();

// ******************************* FUNCIONES *************************************************
const SolicitarPedido = (req = Request, res = Response) => {
    try {
        let body = req.body;
        let usuario= body.usuario;
        let restaurante = body.restaurante;
        let pedido = body.pedido;
        console.log("Ejecutando petición >>> SolicitarPedido")
        res.send({
            'message': 'Solicitud del pedido: '+pedido+' en el restaurante: '+restaurante+' ha sido generado exitosamente para el usuario: '+usuario,
            'numeropedido': 'p00123'
        }); 
       
    } catch (error) {
        res.send({
            'message': 'Error: '+error.message
        }); 
    }
}

const EstadoPedidoRestaurante = (req = Request, res = Response, next) => {
    try{
        let body = req.body;
        let usuario= body.usuario;
        let codigopedido = body.codigopedido;
        console.log("Ejecutando petición >>> EstadoPedidoRestaurante")
        res.send({
            'message': usuario+' tú de pedido: '+codigopedido+ ' se esta preparando en el restaurante: SABurguer' 
        }); 
    } catch (error) {
        res.send({
            'message': 'Error: '+error.message
        }); 
        return;
    }   
} 

const EstadoPedidoRepartidor = (req = Request, res = Response, next) => {

    try{
        let body = req.body;
        let usuario= body.usuario;
        let codigopedido = body.codigopedido;
        console.log("Ejecutando petición >>> EstadoPedidoRepartidor")
        res.send({
            'message': usuario+' tú de pedido: '+codigopedido+ ' esta en camino por el repartidor: SARepartidor' 
        }); 
    } catch (error) {
        res.send({
            'message': 'Error: '+error.message
        }); 
        return;
    }   
} 

// ************************** RUTAS *******************************
router.post("/solicitarpedido", SolicitarPedido);
router.post("/estadopedidorestaurante", EstadoPedidoRestaurante);
router.post("/estadopedidorepartidor", EstadoPedidoRepartidor);


module.exports = router;