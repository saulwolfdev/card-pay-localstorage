//instance ICON
feather.replace()


const mostrarCarrito=document.querySelector(".nav-item-card").addEventListener("click",showHiddenList);


const mostrarLista=document.querySelector(".nav-item-card-list");
    
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