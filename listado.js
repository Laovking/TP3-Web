let elementos = [
    {nombre:"GTA V", tipo:"juego"},
    {nombre:"CS2", tipo:"juego"},
    {nombre:"Minecraft", tipo:"juego"},
    {nombre:"Manzana", tipo:"fruta"},
    {nombre:"Banana", tipo:"fruta"},
    {nombre:"Pera", tipo:"fruta"}
];

function mostrar(datos){

    let lista = document.getElementById("lista");

    lista.innerHTML = "";

    datos.forEach(function(item){

        lista.innerHTML +=
        "<div class='caja'>" +
        item.nombre +
        "</div>";

    });

}

mostrar(elementos);

document.getElementById("todos")
.addEventListener("click", function(){

    mostrar(elementos);

});

document.getElementById("juegos")
.addEventListener("click", function(){

    let juegos = elementos.filter(function(item){

        return item.tipo == "juego";

    });

    mostrar(juegos);

});