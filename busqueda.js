const buscador=document.querySelector("#buscar");

if(buscador){

buscador.addEventListener("input",()=>{

const texto=buscador.value.toLowerCase();

const filtrados=productos.filter(p=>
p.nombre.toLowerCase().includes(texto)
);

mostrarProductos(filtrados);

});

}