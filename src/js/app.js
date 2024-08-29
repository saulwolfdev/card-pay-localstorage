//instance ICON
feather.replace()

//contenedor Menu
const mostrarCarrito=document.querySelector(".nav-item-card")
      mostrarCarrito.addEventListener("click",showHiddenList);

const mostrarLista=document.querySelector(".nav-item-card-list");
const mostrarListaSeleccionada=document.querySelector(".nav-item-card-list-content--dynamic");
const limpiarCarrito=document.querySelector(".nav-item-card-list-clear");

let articulosCarrito=[];


const agregarElementoCarrito=document.querySelector(".card");

//TODOS LOS EVENTOS
cargarRegistrarEventos();

function cargarRegistrarEventos(){
    agregarElementoCarrito.addEventListener("click",agregarCarritoProducto);
   
} 

function agregarCarritoProducto(e){
    e.preventDefault()
    if(e.target.classList.contains("card-item-button")){
        const elementoSeleccionado=e.target.parentElement;
        leerDatosSeleccionados(elementoSeleccionado);
    }
}

function leerDatosSeleccionados(elementoSeleccionado){
   //console.log("CLICK U TOMA DE HTML",elementoSeleccionado)

   const creacionDeELemento={
        imagen:elementoSeleccionado.querySelector("img").src,
        titulo:elementoSeleccionado.querySelector("h4").textContent,
        parrafo:elementoSeleccionado.querySelector("p").textContent,
        idElemento:elementoSeleccionado.querySelector("button").getAttribute("data-id"),
        cantidad:1
   }
   //console.log("Creacion de Objeto Seleccionado",creacionDeELemento)
   //Agrego elementos al carrito
   articulosCarrito=[...articulosCarrito,creacionDeELemento];

console.log("LLENNANDO",articulosCarrito)

carritoHTML();
}

 function carritoHTML(){

    limpiarHTML();

    articulosCarrito.forEach(articulo=>{
        const div=document.createElement("div")
              div.classList.add("nav-item-card-list-items")
              div.innerHTML=`
              <img src="${articulo.imagen}" width="100"/>
              <h3>${articulo.titulo}</h3>
              <p>${articulo.parrafo}</p>
              <a href="#" class="delete" data-id="${articulo.idElemento}">X</a>
              `;
              mostrarListaSeleccionada.appendChild(div)
    });
 }

function limpiarHTML(){
    while(mostrarListaSeleccionada.firstChild){
        mostrarListaSeleccionada.removeChild(mostrarListaSeleccionada.firstChild)
    }
}













function showHiddenList(e){
    e.preventDefault();
    e.stopPropagation();
         if(mostrarLista.classList.contains("nav-item-card-list")){
            mostrarLista.classList.remove("nav-item-card-list");
        }else{
           mostrarLista.classList.add("nav-item-card-list");
}
}