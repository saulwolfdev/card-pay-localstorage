//instance ICON
feather.replace()

//contenedor Menu
const mostrarCarrito=document.querySelector(".nav-item-card");
     
//carrito
const mostrarLista=document.querySelector(".nav-item-card-list");
const mostrarListaSeleccionada=document.querySelector(".nav-item-card-list-content--dynamic");
const limpiarCarrito=document.querySelector(".nav-item-card-list-content-clear");
const eliminarCarrito=document.querySelector(".nav-item-card-list-content");

let articulosCarrito=[];


const agregarElementoCarrito=document.querySelector(".card");

//TODOS LOS EVENTOS
cargarRegistrarEventos();

function cargarRegistrarEventos(){
    mostrarCarrito.addEventListener("click",showHiddenList);
    agregarElementoCarrito.addEventListener("click",agregarCarritoProducto);
    eliminarCarrito.addEventListener("click",eliminarProductosCarrito);
    //vaciando carrito con funcion anonima
    limpiarCarrito.addEventListener("click",()=>{
        articulosCarrito=[];
        limpiarHTML();
    });
} 


//Agregar los elementos al dom
function agregarCarritoProducto(e){
    e.preventDefault()
    if(e.target.classList.contains("card-item-button")){
        const elementoSeleccionado=e.target.parentElement;
        leerDatosSeleccionados(elementoSeleccionado);
    }
}

//Leer y seleccionar Elementos del Dom
function leerDatosSeleccionados(elementoSeleccionado){
   //console.log("CLICK U TOMA DE HTML",elementoSeleccionado)

   const creacionDeELemento={
        imagen:elementoSeleccionado.querySelector("img").src,
        titulo:elementoSeleccionado.querySelector("h4").textContent,
        parrafo:elementoSeleccionado.querySelector("p").textContent,
        idElemento:elementoSeleccionado.querySelector("button").getAttribute("data-id"),
        cantidad:1
   }
   //revisa si un elemento existe el carrito

   const revisaProductoExiste=articulosCarrito.some(elementoSeleccionado=>elementoSeleccionado.idElemento===creacionDeELemento.idElemento);
   //console.log("existe",revisaProductoExiste)
   if(revisaProductoExiste){
    const productosEnCarrito=articulosCarrito.map(elementoSeleccionado=>{
        if(elementoSeleccionado.idElemento==creacionDeELemento.idElemento){
            elementoSeleccionado.cantidad++;
            //este return el objeto actualizado
            return elementoSeleccionado;
        }else{
            //este retunr los objetos que nos son duplicados
            return elementoSeleccionado;
        }
    })
    articulosCarrito=[...productosEnCarrito]
   }else{
    console.log("Creacion de Objeto Seleccionado",creacionDeELemento)
   //Agrego elementos al carrito
   articulosCarrito=[...articulosCarrito,creacionDeELemento];
        }

console.log("Llenando carrito",articulosCarrito)

carritoHTML();
}
// Seleccion y creacion de elementos en el Carrito DOM
 function carritoHTML(){

    limpiarHTML();

    articulosCarrito.forEach(articulo=>{
        const div=document.createElement("div")
              div.classList.add("nav-item-card-list-content--dynamic-cards")
              div.innerHTML=`
              <img src="${articulo.imagen}" width="100"/>
              <h3>${articulo.titulo}</h3>
              <p>${articulo.parrafo}</p>
              <span>${articulo.cantidad}</span>
              <a href="#" class="nav-item-card-list-content--dynamic-cards-link" data-id="${articulo.idElemento}">X</a>
              `;
              mostrarListaSeleccionada.appendChild(div)
    });
 }

 
//Elimina elementos del carrito
function eliminarProductosCarrito(e){
    console.log("verificando elminar",e.target.classList)
    if(e.target.classList.contains("nav-item-card-list-content--dynamic-cards-link")){

        const productosId=e.target.getAttribute("data-id");
        //console.log("producto ID seleccion",productosId)
        articulosCarrito=articulosCarrito.filter(elementoSeleccionado=>elementoSeleccionado.idElemento!==productosId);
        console.log("Verificando si sie elimina correcto",articulosCarrito);
        carritoHTML();
    }
}
// Limpiar carrito
function limpiarHTML(){
    while(mostrarListaSeleccionada.firstChild){
        mostrarListaSeleccionada.removeChild(mostrarListaSeleccionada.firstChild)
    }
}
//Mostrar o ocultar Carrito
function showHiddenList(e){
    e.preventDefault();
    e.stopPropagation();
         if(mostrarLista.classList.contains("nav-item-card-list")){
            mostrarLista.classList.remove("nav-item-card-list");
        }else{
           mostrarLista.classList.add("nav-item-card-list");
}
}