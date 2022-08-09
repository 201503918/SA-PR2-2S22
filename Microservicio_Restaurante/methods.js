const express = require("express");
const router = express.Router();

// ******************************* FUNCIONES *************************************************
const RecibirPedido = (req = Request, res = Response) => {
    try {
        let body = req.body;
        let usuario= body.usuario;
        let pedido = body.pedido;
        console.log("Ejecutando petición >>> RecibirPedido")
        res.send({
            'message': 'El pedido: '+pedido+' del usuario: '+usuario+' se ha recibido y registrado con el código p00123 exitosamente en SABurguer'
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
            'message': usuario+' tú pedido: '+codigopedido+ ' esta en cola de preparación en: SABurguer' 
        }); 
    } catch (error) {
        res.send({
            'message': 'Error: '+error.message
        }); 
        return;
    }   
} 

const AvisarRepartidor = (req = Request, res = Response, next) => {

    try{
        let body = req.body;
        let repartidor= body.repartidor;
        let codigopedido = body.codigopedido;
        console.log("Ejecutando petición >>> AvisarRepartidor")
        res.send({
            'message': repartidor+' el pedido: '+codigopedido+ ' esta listo para recoger y entregar' 
        }); 
    } catch (error) {
        res.send({
            'message': 'Error: '+error.message
        }); 
        return;
    }   
} 

// ************************** RUTAS *******************************
router.post("/recibirpedido", RecibirPedido);
router.post("/estadopedidocliente", InformarEstadoPedidoCliente);
router.post("/avisarrepartidor", AvisarRepartidor);


module.exports = router;