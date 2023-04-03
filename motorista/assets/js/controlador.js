var idMotorista = '62fd95622f671201a26e095c';
var nombreMotorista = 'Rick75';

function inciarSecion(){
    document.getElementById('iniciar-secion-motorista').classList.add('no-ver');
    document.getElementById('usuario-motorista').classList.remove('no-ver');
    
reenderizarOrdenes();

}

function ordenesTomadas(){
    document.getElementById('tomar-ordenes').classList.add('no-ver');
    document.getElementById('ordenes-tomadass').classList.remove('no-ver');
    document.getElementById('tomar-orden').classList.remove('switch-orden');
    document.getElementById('ordenes-tomadas').classList.add('switch-orden');
}

function tomarOrden(){
    document.getElementById('tomar-ordenes').classList.remove('no-ver');
    document.getElementById('ordenes-tomadass').classList.add('no-ver');
    document.getElementById('tomar-orden').classList.add('switch-orden');
    document.getElementById('ordenes-tomadas').classList.remove('switch-orden');
}

function verEntregas(){
    document.getElementById('ver-entregas').classList.remove('no-ver');
    document.getElementById('usuario-motorista').classList.add('no-ver');    
}

function volverMenu(volver){
    document.getElementById(volver).classList.add('no-ver');
    document.getElementById('usuario-motorista').classList.remove('no-ver');
}

function entregarPedido(){
    document.getElementById('procesar-ordenes').classList.remove('no-ver');
    document.getElementById('usuario-motorista').classList.add('no-ver');
}

function cerrarSesion(){
    document.getElementById('iniciar-secion-motorista').classList.remove('no-ver');
    document.getElementById('usuario-motorista').classList.add('no-ver');
}

function reenderizarOrdenes(){
    $.ajax({
        url:`/ordenes/`,
        method:"GET",
        dataType:"json",
        success:(res)=>{
            console.log(res);
            $("#tomar-ordenes").empty();
            for(let i=0;i<res.length;i++){
                console.log(res[i]._id);
                
                 obtenerProducto(res[i]._id, res[i]);
                

                
            }
        },
        error:(error)=>{
            console.error(error);
        }

    });
}

function obtenerMotorista(id){
    $.ajax({
        url:`/ordenes/${id}/moto`,
        method:"GET",
        dataType:"json",
        success:(res)=>{
            console.log('res',res);
            return res;
                
        },
        error:(error)=>{
            console.error(error);
        }

    });
}

var respuesta;
function obtenerProducto(id,re){
    $.ajax({
        url:`/ordenes/${id}/product`,
        method:"GET",
        dataType:"json",
        success:(res)=>{
            $("#tomar-ordenes").append(
                `<div class="tomar-orden-caja">
                <div class="toc-1">
                    <img class="edit-logo-profile" src="assets/img/logo-perfil.png" alt="edit-logo-profile" >
                    <img class="edit-logo-profile" src="../administrative/assets/img/image 8.png" alt="edit-logo-profile" >
                    <div>
                        <p>${res.producto[0].nombre} x${re.cantidad}</p>
                        <p>Mcdonald's Kennedy</p>
                    </div>
                </div>
                <p class="tomarparra">Entrega: ${re.ubicacion}</p>
                <div class="toc-1">
                    <p class="tomarparra">Usuario: </p>
                    <button class="boton-tomar" onclick="tomarOrdenn()">Tomar</button>
                </div>
            </div>`
            )
        },
        error:(error)=>{
            console.error(error);
        }

    });

    
}

function tomarOrdenn(){
    $.ajax({
        url:`/ordenes/62fd7d4d2f671201a26e08f8/62f865430e4b172a664f8762`,
        method:"PUT",
        dataType:"json",
        success:(res)=>{
            console.log('Res', res);
            $("#ordenes-tomadass").empty();
            $("#ordenes-tomadass").append(
                `<div class="orden-tomada">
                <div class="toc-1">
                    <img class="edit-logo-profile" src="assets/img/logo-perfil.png" alt="edit-logo-profile" onclick="selectOption(7)">
                    <img class="edit-logo-profile" src="../administrative/assets/img/image 8.png
                    " alt="edit-logo-profile" onclick="selectOption(7)">
                    <div class="title">
                        <p>Big Mac x2</p>
                        <p>Mcdonald's Kennedy</p>
                    </div>
                </div>
                <p class="tomarparra">Entrega: Res. Honduras</p>
                <div class="toc-1">
                    <p class="tomarparra">Usuario: erick81</p>
                    <b>Número:</b><p class="num">94588778</p>
                </div>
                <div class="botones-estados ">
                    <button class="estado-seleccionado">Tomada</button>
                    <button>En camino</button>
                </div>
                <div class="botones-estados">
                    <button>En el Origen</button>
                    <button>En el destino</button>
                </div>

                <div style="display: flex; justify-content:center;">
                    <button onclick="entregarPedido()" class="boton-entregar">Entregar</button>
                </div>
                

            </div>`
            )
        },
        error:(error)=>{
            console.error(error);
        }

    });
    
}