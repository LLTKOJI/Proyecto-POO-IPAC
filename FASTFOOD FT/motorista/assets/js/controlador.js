var idMotorista = '62fd95622f671201a26e095c';
var nombreMotorista = 'Rick75';

function inciarSecion() {
    document.getElementById('iniciar-secion-motorista').classList.add('no-ver');
    document.getElementById('usuario-motorista').classList.remove('no-ver');

}

function ordenesTomadas() {
    document.getElementById('tomar-ordenes').classList.add('no-ver');
    document.getElementById('ordenes-tomadass').classList.remove('no-ver');
    document.getElementById('tomar-orden').classList.remove('switch-orden');
    document.getElementById('ordenes-tomadas').classList.add('switch-orden');
}

function tomarOrden() {
    document.getElementById('tomar-ordenes').classList.remove('no-ver');
    document.getElementById('ordenes-tomadass').classList.add('no-ver');
    document.getElementById('tomar-orden').classList.add('switch-orden');
    document.getElementById('ordenes-tomadas').classList.remove('switch-orden');
}

function verEntregas() {
    document.getElementById('ver-entregas').classList.remove('no-ver');
    document.getElementById('usuario-motorista').classList.add('no-ver');
}

function volverMenu(volver) {
    document.getElementById(volver).classList.add('no-ver');
    document.getElementById('usuario-motorista').classList.remove('no-ver');
}

function entregarPedido() {
    document.getElementById('procesar-ordenes').classList.remove('no-ver');
    document.getElementById('usuario-motorista').classList.add('no-ver');
}

function cerrarSesion() {
    document.getElementById('iniciar-secion-motorista').classList.remove('no-ver');
    document.getElementById('usuario-motorista').classList.add('no-ver');
}

