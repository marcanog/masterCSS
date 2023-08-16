var nombre = "Eugenia Perez";
var altura = "162";

//document.write(nombre);
//document.write(altura);
var concatenacion = nombre + " " + altura;
//document.write (concatenacion);
/*document.getElementById("datos");
datos.innerHTML = `
<h1> ${nombre} </h1> `;*/
function MuestraMiNombre(nombre, altura){
    var MisDatos = `
    <h1>Soy la caja de datos </h1>
    <h2>Mi nombre es: ${nombre} </h2>
    <h3>Mido: ${altura} cm</h3>
    `;
    return MisDatos;
}

function imprimir(){
    var datos = document.getElementById("datos");
    datos.innerHTML = MuestraMiNombre("Geo",165);
}

imprimir();

var nombres = ["José", "Pedro", "Juan"];
document.write('<h1>Listado de nombres</h1>');
/*
for(i = 0; i < nombres.length; i++){
    document.write(nombres[i] + "<br/>");
} */

/*
nombres.forEach(function (nombre){
    document.write(nombre + '<br/>');
})
*/
nombres.forEach((nombre) =>{
    document.write(nombre + '<br/>');
})