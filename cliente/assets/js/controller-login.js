
const CONTENT_LOGIN_USER = 1;
const CONTENT_REGISTER = 2;
const INTERFACE_CLIENT = 3;
const CONTENT_REGISTER_CLIENT = 4;
const CONTENT_REGISTER_DRIVER = 5;
const CONTENT_LOGIN = 6;
const INTERFACE_CLIENT_OPTION = 7;
const INTERFACE_CLIENT_RESTAURANTE = 8;
const INTERFACE_CLIENT_ORDEN = 9;
const OPCION_ORDEN_ACTIVA = 10;
const OPCION_ORDEN_HISTORIAL = 11;
const INTERFACE_CLIENT_RESTAURANTE_MENU = 12;
const INTERFACE_INFO_PROD_RESTAURANTE = 13;
const CONTENIDO_MODAL_PEDIDOS = 14;

let selectOption = option => {
    switch (option) {
        case CONTENT_REGISTER:
            document.getElementById('content-register').style.display = "flex";
            document.getElementById('content-login').style.display = "none";
            document.getElementById('content-login-user').style.display = "none";
            document.getElementById('content-register-client').style.display = "none";
            document.getElementById('content-register-driver').style.display = "none";
            document.getElementById('interface-client').style.display = "none";
            document.getElementById('interface-client-option').style.display = "none";
            document.getElementById('interface-client-restaurante').style.display = "none";
            document.getElementById('interface-client-orden').style.display = "none";
            document.getElementById('interface-client-restaurante-menu').style.display = 'none';
            document.getElementById('interface-info-prod-restaurante').style.display = 'none'; 
            document.getElementById('contenido-modal-pedidos').style.display = 'none'; 
            break;
        case CONTENT_REGISTER_CLIENT:
            document.getElementById('content-register').style.display = "none";
            document.getElementById('content-login').style.display = "none";
            document.getElementById('content-login-user').style.display = "none";
            document.getElementById('content-register-client').style.display = "flex";
            document.getElementById('content-register-driver').style.display = "none";
            document.getElementById('interface-client').style.display = "none";  
            document.getElementById('interface-client-option').style.display = "none";
            document.getElementById('interface-client-restaurante').style.display = "none";  
            document.getElementById('interface-client-orden').style.display = "none";  
            document.getElementById('interface-client-restaurante-menu').style.display = 'none';   
            document.getElementById('interface-info-prod-restaurante').style.display = 'none';  
            document.getElementById('contenido-modal-pedidos').style.display = 'none'; 
  
            break;
        case CONTENT_REGISTER_DRIVER:
            document.getElementById('content-register').style.display = "none";
            document.getElementById('content-login').style.display = "none";
            document.getElementById('content-login-user').style.display = "none";
            document.getElementById('content-register-client').style.display = "none";
            document.getElementById('content-register-driver').style.display = "flex"; 
            document.getElementById('interface-client').style.display = "none";
            document.getElementById('interface-client-option').style.display = "none";
            document.getElementById('interface-client-restaurante').style.display = "none";
            document.getElementById('interface-client-orden').style.display = "none";
            document.getElementById('interface-client-restaurante-menu').style.display = 'none';
            document.getElementById('interface-info-prod-restaurante').style.display = 'none';
            document.getElementById('contenido-modal-pedidos').style.display = 'none';  
            break;
        case CONTENT_LOGIN_USER:
            document.getElementById('content-register').style.display = "none";
            document.getElementById('content-login').style.display = "none";
            document.getElementById('content-login-user').style.display = "flex";
            document.getElementById('content-register-client').style.display = "none";
            document.getElementById('content-register-driver').style.display = "none"; 
            document.getElementById('interface-client').style.display = "none";
            document.getElementById('interface-client-option').style.display = "none";
            document.getElementById('interface-client-restaurante').style.display = "none";
            document.getElementById('interface-client-orden').style.display = "none";
            document.getElementById('interface-client-restaurante-menu').style.display = 'none';
            document.getElementById('interface-info-prod-restaurante').style.display = 'none';
            document.getElementById('contenido-modal-pedidos').style.display = 'none'; 
            break;
        case INTERFACE_CLIENT:
            document.getElementById('content-register').style.display = "none";
            document.getElementById('content-login').style.display = "none";
            document.getElementById('content-login-user').style.display = "none";
            document.getElementById('content-register-client').style.display = "none";
            document.getElementById('content-register-driver').style.display = "none"; 
            document.getElementById('interface-client').style.display = "flex";
            document.getElementById('interface-client-option').style.display = "none";
            document.getElementById('interface-client-restaurante').style.display = "none";
            document.getElementById('interface-client-orden').style.display = "none";
            document.getElementById('interface-client-restaurante-menu').style.display = 'none';
            document.getElementById('interface-info-prod-restaurante').style.display = 'none';  
            document.getElementById('contenido-modal-pedidos').style.display = 'none'; 
            break;
        case CONTENT_LOGIN:
            document.getElementById('content-register').style.display = "none";
            document.getElementById('content-login').style.display = "flex";
            document.getElementById('content-login-user').style.display = "none";
            document.getElementById('content-register-client').style.display = "none";
            document.getElementById('content-register-driver').style.display = "none"; 
            document.getElementById('interface-client').style.display = "none";
            document.getElementById('interface-client-option').style.display = "none";
            document.getElementById('interface-client-restaurante').style.display = "none";
            document.getElementById('interface-client-orden').style.display = "none";
            document.getElementById('interface-client-restaurante-menu').style.display = 'none';
            document.getElementById('interface-info-prod-restaurante').style.display = 'none';  
            document.getElementById('contenido-modal-pedidos').style.display = 'none'; 
            break;
        case INTERFACE_CLIENT_OPTION:
            document.getElementById('content-register').style.display = "none";
            document.getElementById('content-login').style.display = "none";
            document.getElementById('content-login-user').style.display = "none";
            document.getElementById('content-register-client').style.display = "none";
            document.getElementById('content-register-driver').style.display = "none"; 
            document.getElementById('interface-client').style.display = "none";
            document.getElementById('interface-client-option').style.display = "flex";
            document.getElementById('interface-client-restaurante').style.display = "none";
            document.getElementById('interface-client-orden').style.display = "none";
            document.getElementById('interface-client-restaurante-menu').style.display = 'none';
            document.getElementById('interface-info-prod-restaurante').style.display = 'none';
            document.getElementById('contenido-modal-pedidos').style.display = 'none';   
            break;
        case INTERFACE_CLIENT_RESTAURANTE:
            document.getElementById('content-register').style.display = "none";
            document.getElementById('content-login').style.display = "none";
            document.getElementById('content-login-user').style.display = "none";
            document.getElementById('content-register-client').style.display = "none";
            document.getElementById('content-register-driver').style.display = "none"; 
            document.getElementById('interface-client').style.display = "none";
            document.getElementById('interface-client-option').style.display = "none";
            document.getElementById('interface-client-restaurante').style.display = "flex";
            document.getElementById('interface-client-orden').style.display = "none";
            document.getElementById('interface-client-restaurante-menu').style.display = 'none';
            document.getElementById('interface-info-prod-restaurante').style.display = 'none';
            document.getElementById('contenido-modal-pedidos').style.display = 'none';   
            break;
        case INTERFACE_CLIENT_ORDEN:
            document.getElementById('content-register').style.display = "none";
            document.getElementById('content-login').style.display = "none";
            document.getElementById('content-login-user').style.display = "none";
            document.getElementById('content-register-client').style.display = "none";
            document.getElementById('content-register-driver').style.display = "none"; 
            document.getElementById('interface-client').style.display = "none";
            document.getElementById('interface-client-option').style.display = "none";
            document.getElementById('interface-client-restaurante').style.display = "none";
            document.getElementById('interface-client-orden').style.display = "flex";
            document.getElementById('interface-client-restaurante-menu').style.display = 'none';
            document.getElementById('interface-info-prod-restaurante').style.display = 'none';  
            document.getElementById('contenido-modal-pedidos').style.display = 'none'; 
            break;
        case INTERFACE_CLIENT_RESTAURANTE_MENU:
            document.getElementById('content-register').style.display = "none";
            document.getElementById('content-login').style.display = "none";
            document.getElementById('content-login-user').style.display = "none";
            document.getElementById('content-register-client').style.display = "none";
            document.getElementById('content-register-driver').style.display = "none"; 
            document.getElementById('interface-client').style.display = "none";
            document.getElementById('interface-client-option').style.display = "none";
            document.getElementById('interface-client-restaurante').style.display = "none";
            document.getElementById('interface-client-orden').style.display = "none";
            document.getElementById('interface-client-restaurante-menu').style.display = 'flex';
            document.getElementById('interface-info-prod-restaurante').style.display = 'none';
            document.getElementById('contenido-modal-pedidos').style.display = 'none';   
            break;
        case INTERFACE_INFO_PROD_RESTAURANTE:
            document.getElementById('content-register').style.display = "none";
            document.getElementById('content-login').style.display = "none";
            document.getElementById('content-login-user').style.display = "none";
            document.getElementById('content-register-client').style.display = "none";
            document.getElementById('content-register-driver').style.display = "none"; 
            document.getElementById('interface-client').style.display = "none";
            document.getElementById('interface-client-option').style.display = "none";
            document.getElementById('interface-client-restaurante').style.display = "none";
            document.getElementById('interface-client-orden').style.display = "none";
            document.getElementById('interface-client-restaurante-menu').style.display = 'none';
            document.getElementById('interface-info-prod-restaurante').style.display = 'flex'; 
            document.getElementById('contenido-modal-pedidos').style.display = 'none';  
            break;
        case CONTENIDO_MODAL_PEDIDOS:
            document.getElementById('content-register').style.display = "none";
            document.getElementById('content-login').style.display = "none";
            document.getElementById('content-login-user').style.display = "none";
            document.getElementById('content-register-client').style.display = "none";
            document.getElementById('content-register-driver').style.display = "none"; 
            document.getElementById('interface-client').style.display = "flex";
            document.getElementById('interface-client-option').style.display = "none";
            document.getElementById('interface-client-restaurante').style.display = "none";
            document.getElementById('interface-client-orden').style.display = "none";
            document.getElementById('interface-client-restaurante-menu').style.display = 'none';
            document.getElementById('interface-info-prod-restaurante').style.display = 'none'; 
            document.getElementById('contenido-modal-pedidos').style.display = 'flex';  
            break;
        default:
            break;

    }
}


let selectOptionOrden = option => {
    switch (option) {
        case OPCION_ORDEN_ACTIVA: 
            document.getElementById('menu-options-foods-1').style.display = 'block';
            document.getElementById('menu-options-foods-2').style.display = 'none';
            document.getElementById('opcion-orden-activas').classList.add('opcion-activa');
            document.getElementById('opcion-orden-historial').classList.remove('opcion-activa');
            document.getElementById('opcion-activa').style.transform = 'translateX(0)';
            
            break;
        case OPCION_ORDEN_HISTORIAL: 
            document.getElementById('menu-options-foods-1').style.display = 'none';
            document.getElementById('menu-options-foods-2').style.display = 'block';
            document.getElementById('opcion-orden-activas').classList.remove('opcion-activa');
            document.getElementById('opcion-orden-historial').classList.add('opcion-activa');
            document.getElementById('opcion-activa').style.transform = 'translateX(100%)';
            
            break;
        default:
            break;
    }
}
        
let blockPag = option => {
    document.getElementById('content-register').style.display = "none";
    document.getElementById('content-login').style.display = "flex";
    document.getElementById('content-login-user').style.display ="none";
    document.getElementById('content-register-driver').style.display = "none";
    document.getElementById('content-register-client').style.display = "none";
    document.getElementById('interface-client').style.display = "none";
    document.getElementById('interface-client-option').style.display = "none";
    document.getElementById('interface-client-restaurante').style.display = "none";
    document.getElementById('interface-client-orden').style.display = "none";
    document.getElementById('menu-options-foods-1').style.display = 'block';
    document.getElementById('menu-options-foods-2').style.display = 'none';
    document.getElementById('interface-client-restaurante-menu').style.display = 'none';
    document.getElementById('interface-info-prod-restaurante').style.display = 'none';
    document.getElementById('contenido-modal-pedidos').style.display = 'none';  

}







