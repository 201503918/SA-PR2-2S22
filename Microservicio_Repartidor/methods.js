const express = require("express");
const router = express.Router();

// ******************************* FUNCIONES *************************************************
const RecibirPedidoRestaurante = (req = Request, res = Response) => {
    try {
        let body = req.body;
        let usuario= body.usuario;
        let pedido = body.pedido;
        let direccion = body.direccion;
        let restaurante = body.restaurante;
        console.log("Ejecutando petición >>> RecibirPedidoRestaurante")
        res.send({
            'message': 'SARepartidor, el pedido: '+pedido+' del usuario: '+usuario+' esta listo para recoger en:'+restaurante+' y Entregar en: '+direccion
        }); 
       
    } catch (error) {
        res.send({
            'message': 'Error: '+error.message
        }); 
    }
}

const InformarEstadoPedidoCliente = (req = Request, res = Response, next) => {

    try{
        let body = req.body;
        let usuario= body.usuario;
        let codigopedido = body.codigopedido;
        console.log("Ejecutando petición >>> InformarEstadoPedidoCliente")
        res.send({
            'message': usuario+' tú pedido: '+codigopedido+ ' esta en camino y proximo a entregar en la dirección indicada' 
        }); 
    } catch (error) {
        res.send({
            'message': 'Error: '+error.message
        }); 
        return;
    }   
} 

const PedidoEntregado = (req = Request, res = Response, next) => {

    try{
        let body = req.body;
        let usuario= body.usuario;
        let pedido = body.pedido;
        let direccion = body.direccion;
        let restaurante = body.restaurante;
        console.log("Ejecutando petición >>> PedidoEntregado")
        res.send({
            'message': 'El pedido: '+pedido+ ' realizado por: '+usuario+' en el restaurante: '+restaurante+' ha sido entregado por: SARepartidor en: '+direccion 
        }); 
    } catch (error) {
        res.send({
            'message': 'Error: '+error.message
        }); 
        return;
    }   
} 

// ************************** RUTAS *******************************
router.post("/recibirpedidorestaurante", RecibirPedidoRestaurante);
router.post("/informarcliente", InformarEstadoPedidoCliente);
router.post("/actualizarestadopedido", PedidoEntregado);


module.exports = router;