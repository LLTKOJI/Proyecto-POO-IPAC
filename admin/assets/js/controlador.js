//Controlador
//Pormientras
// document.getElementById('init-sec').classList.add('no-ver');
//     document.getElementById('home').classList.remove('no-ver');

var antes;
var opcAntes;

antes = 'home-menu';
opcAntes = '1';
function iniciarSecion(){
    document.getElementById('init-sec').classList.add('no-ver');
    document.getElementById('home').classList.remove('no-ver');
    document.getElementById('home-menu').classList.remove('no-ver');
    antes = 'home-menu';
    opcAntes = '1';
    
}

function cambiarVentana(nombre,numeroOpcion){
    
    agregarRemoverClase(antes, nombre);
    cambiarColorMenu(opcAntes, numeroOpcion);
    antes = nombre;
    opcAntes = numeroOpcion;
}

function agregarRemoverClase(antes,despues){
    document.getElementById(antes).classList.add('no-ver');
    document.getElementById(despues).classList.remove('no-ver');
}

function cambiarColorMenu(antes,despues){
    document.getElementById(despues).classList.add('select-opt');
    document.getElementById(antes).classList.remove('select-opt');
    
}

function guardarProducto(){
    console.log('Hola');
    console.log(document.getElementById('nombreProducto').value);
    console.log( $('#local')[0].innerText);
    console.log(document.getElementById('decripcionProducto').value);
    console.log(document.getElementById('imagenProducto').value);
    console.log(document.getElementById('precioProducto').value);

    let parametros = {
        nombre: document.getElementById('nombreProducto').value,
        empresa: '62f872040e4b172a664f8788',
        descripcion: document.getElementById('decripcionProducto').value,
        imagen: document.getElementById('imagenProducto').value,
        precio: document.getElementById('precioProducto').value    
    }

    $.ajax({
        url:`/productos/`,
        method:'POST',
        data:parametros,
        dataType:'json',
        success:(res)=>{
            console.log(res);
        },
        error:(error)=>{
            console.error(error);
        }
    });
}

function guardarEmpresa(){
    
    if($('#categoria')[0].innerText !== 'categoría'){
        
    let parametros = {
        nombre: document.getElementById('nombreEmpresa').value,
        ubicacion: [document.getElementById('ubicacionEmpresa').value],
        categoria: $('#categoria')[0].innerText,
        logo: document.getElementById('logoEmpresa').value    
    }

    $.ajax({
        url:`/empresas/`,
        method:'POST',
        data:parametros,
        dataType:'json',
        success:(res)=>{
            console.log(res);
        },
        error:(error)=>{
            console.error(error);
        }
    });
    }else alert('Complete el campo de ategoria')
}

function cambiarCategoria(catego){
    $('#categoria')[0].innerText = catego;
}