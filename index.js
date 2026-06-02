let meriendas = [
    "Mate",
    "Café",
    "Tostadas",
    "Facturas",
    "Galletitas"
];

let contenedor = document.getElementById("meriendas");

meriendas.forEach(function(item){
    contenedor.innerHTML += "<div class='caja'>" + item + "</div>";
});

document.getElementById("btnCantidad").addEventListener("click", function(){

    document.getElementById("resultado").textContent =
    "Cantidad: " + meriendas.length;

});