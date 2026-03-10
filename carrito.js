let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarAlCarrito(id){

const producto = productos.find(p=>p.id===id);

const existe = carrito.find(p=>p.id===id);

if(existe){

existe.cantidad++;

}else{

carrito.push({...producto,cantidad:1});

}

guardarCarrito();
mostrarCarrito();
actualizarContador();

alert("Producto agregado");

}

function eliminarProducto(id){

carrito = carrito.filter(p=>p.id!==id);

guardarCarrito();
mostrarCarrito();
actualizarContador();

}

function mostrarCarrito(){

const lista=document.querySelector("#lista-carrito");

if(!lista) return;

lista.innerHTML="";

carrito.forEach(p=>{

const fila=document.createElement("tr");

fila.innerHTML=`

<td>${p.nombre}</td>

<td>$${p.precio}</td>

<td>${p.cantidad}</td>

<td>$${p.precio*p.cantidad}</td>

<td>
<button onclick="eliminarProducto(${p.id})">
❌
</button>
</td>

`;

lista.appendChild(fila);

});

calcularTotal();

}

function calcularTotal(){

let subtotal=0;

carrito.forEach(p=>{
subtotal+=p.precio*p.cantidad;
});

let iva=subtotal*0.16;
let total=subtotal+iva;

document.querySelector("#subtotal").textContent=subtotal;
document.querySelector("#iva").textContent=iva.toFixed(2);
document.querySelector("#total").textContent=total.toFixed(2);

}

function actualizarContador(){

const contador=document.querySelector("#contador-carrito");

if(!contador) return;

let cantidad=0;

carrito.forEach(p=>{
cantidad+=p.cantidad;
});

contador.textContent=cantidad;

}

function guardarCarrito(){

localStorage.setItem("carrito",JSON.stringify(carrito));

}

document.querySelector("#vaciar")?.addEventListener("click",()=>{

carrito=[];
guardarCarrito();
mostrarCarrito();
actualizarContador();

});

mostrarCarrito();
actualizarContador();