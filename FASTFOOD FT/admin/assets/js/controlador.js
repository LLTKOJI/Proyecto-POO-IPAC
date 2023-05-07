var antes;
var opcAntes;

antes = 'home-menu';
opcAntes = '1';

function cambiarVentana(nombre, numeroOpcion) {

    agregarRemoverClase(antes, nombre);
    cambiarColorMenu(opcAntes, numeroOpcion);
    antes = nombre;
    opcAntes = numeroOpcion;
}

function agregarRemoverClase(antes, despues) {
    document.getElementById(antes).classList.add('no-ver');
    document.getElementById(despues).classList.remove('no-ver');
}

function cambiarColorMenu(antes, despues) {
    document.getElementById(despues).classList.add('select-opt');
    document.getElementById(antes).classList.remove('select-opt');

}

function iniciarSesion() {
    document.getElementById('init-sec').classList.add('no-ver');
    document.getElementById('home').classList.remove('no-ver');
    document.getElementById('home-menu').classList.remove('no-ver');
    antes = 'home-menu';
    opcAntes = '1';

    const usuario = document.getElementById('usuario-input').value;
    const contrasenia = document.getElementById('contrasenia-input').value;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "nombreUsuario": usuario,
        "contrasenia": contrasenia
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:3002/administracion/login", requestOptions)
        .then(response => response.json())
        .then(data => {
            if (data.autenticado) {
                console.log('Autenticado exitosamente');
            } else {
                alert('Autenticado exitosamente');
            }
        })
        .catch(error => console.log('error', error));
}

function guardarEmpresa() {
    const nombreEmpresa = document.getElementById("nombreEmpresa").value;
    const ubicacionEmpresa = document.getElementById("ubicacionEmpresa").value;
    const categoria = document.getElementById("categoria").innerText;
    const logoEmpresa = document.getElementById("logoEmpresa").value;

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre: nombreEmpresa,
            categoria: categoria,
            logo: logoEmpresa,
            ubicacion: [ubicacionEmpresa]
        }),
        redirect: 'follow'
    };

    fetch("http://localhost:3002/empresas", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

function cambiarCategoria(catego) {
    $('#categoria')[0].innerText = catego;
}

function guardarProducto() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var nombre = document.getElementById("nombreProducto").value;
    var categoria = document.getElementById("local").innerText;
    var descripcion = document.getElementById("decripcionProducto").value;
    var imagen = document.getElementById("imagenProducto").value;
    var precio = document.getElementById("precioProducto").value;

    var raw = JSON.stringify({
        "nombre": nombre,
        "categoria": categoria,
        "descripcion": descripcion,
        "imagen": imagen,
        "precio": precio
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:3002/productos", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

document.addEventListener("DOMContentLoaded", function () {
    cargarMotorista();
});


// Función para cargar los datos del motorista
function cargarMotorista() {
    // Hacer la petición GET a la API
    fetch("http://localhost:3002/motoristas/6455be0add671441b34c3246")
        .then(response => response.json())
        .then(data => {
            // Mostrar los datos del motorista en la página
            const nombreCompleto = `${data.nombres} ${data.apellidos}`;
            document.getElementById("nombreMotorista").innerText = nombreCompleto;
            document.getElementById("telefonoMotorista").innerText = data.telefono;
            document.getElementById("ciudadMotorista").innerText = data.ciudad;
            document.getElementById("fechaNacimientoMotorista").innerText = data.fechaNacimiento;
            document.getElementById("modeloMotocicleta").innerText = data.modeloMoto;
            document.getElementById("generoMotorista").innerText = data.genero;
            document.getElementById("placaMotocicleta").innerText = data.placa;
            document.getElementById("imagenMotorista").src = data.foto;
        })
        .catch(error => console.log('error', error));

    // Agregar el listener al botón de aprobar
    const botonAprobar = document.querySelector(".fondo-apr-mot .boton.aprobar");
    botonAprobar.addEventListener("click", () => {
        aprobarMotorista("6455be0add671441b34c3246");
    });

    // Agregar el listener al botón de rechazar
    const botonRechazar = document.querySelector(".fondo-apr-mot .boton.rechazar");
    botonRechazar.addEventListener("click", () => {
        rechazarMotorista("6455be0add671441b34c3246");
    });
}





