const productos = [

{
id:1,
nombre:"Laptop",
precio:8500,
descripcion:"Laptop para estudio",
imagen:"laptop.png"
},

{
id:2,
nombre:"Mouse",
precio:300,
descripcion:"Mouse inalámbrico",
imagen:"mause.png"
},

{
id:3,
nombre:"Teclado",
precio:1200,
descripcion:"Teclado mecánico",
imagen:"teclado.png"
},

{
id:4,
nombre:"Monitor",
precio:3500,
descripcion:"Monitor 24 pulgadas",
imagen:"monitor.png"
},

{
id:5,
nombre:"Audífonos",
precio:600,
descripcion:"Audífonos gamer",
imagen:"audifonos.jpg"
},

{
id:6,
nombre:"USB",
precio:200,
descripcion:"Memoria USB 64GB",
imagen:"usb.jpg"
}

];

const catalogo = document.querySelector("#catalogo");

function mostrarProductos(lista){

catalogo.innerHTML="";

lista.forEach(producto=>{

const card=document.createElement("div");

card.classList.add("producto");

card.innerHTML=`

<img src="${producto.imagen}">

<h3>${producto.nombre}</h3>

<p>${producto.descripcion}</p>

<p class="precio">$${producto.precio}</p>

<button onclick="agregarAlCarrito(${producto.id})">
Agregar al carrito
</button>

`;

catalogo.appendChild(card);

});

}

if(catalogo){
mostrarProductos(productos);
}