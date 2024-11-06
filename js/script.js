//Cerrar barra de navegacion
document.addEventListener("DOMContentLoaded", function() {
    const abrirNav = document.getElementById("menu_hamburguer")
    const nav = document.getElementById("menu") 
    //Abrir barra de navegacion 
    const cerrarNav = document.getElementById("cerrarNav")
    
    
    abrirNav.addEventListener("click", () => {
        nav.classList.remove("hidden")
        nav.classList.add("show")
    })
    cerrarNav.addEventListener("click", () => {
        nav.classList.remove("show")
        nav.classList.add("hidden")
    })

})

