//instance ICON
feather.replace()

//contenedor Menu
const mostrarCarrito=document.querySelector(".nav-item-card")
      mostrarCarrito.addEventListener("click",showHiddenList);
const mostrarLista=document.querySelector(".nav-item-card-list");
const limpiarCarrito=document.querySelector(".nav-item-card-list-clear");




const agregarElementoCarrito=document.querySelector(".card-item");

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
        precio:elementoSeleccionado.querySelector("button").getAttribute("data-id"),
        cantidad:1
   }
   console.log("Creacion de Objeto Seleccionado",creacionDeELemento)
}















function showHiddenList(e){
    e.preventDefault();
    e.stopPropagation();
    console.log("remove class")
         if(mostrarLista.classList.contains("nav-item-card-list")){
            mostrarLista.classList.remove("nav-item-card-list");
            
        }else{
           mostrarLista.classList.add("nav-item-card-list");
           console.log("add class")
}
}