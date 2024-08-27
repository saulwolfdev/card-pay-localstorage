//instance ICON
feather.replace()


const mostrarCarrito=document.querySelector(".nav-item-card").addEventListener("click",showHiddenList);


const mostrarLista=document.querySelector(".nav-item-card-list");
    
function showHiddenList(e){
    e.preventDefault();
    e.stopPropagation();
    console.log("hola")
         if(mostrarLista.classList.contains("nav-item-card-list")){
            mostrarLista.classList.add("show-card");
            //mostrarLista.classList.remove("hidden-card");
            
        }else{
            //mostrarLista.classList.remove("show-card");
            mostrarLista.classList.add("hidden-card");
}
}