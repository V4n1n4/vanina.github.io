var miVariable;
let nombre;
const IVA=21;


/**
 * Esto es un comentario
 * de muchas
 * lineas
 */


document.getElementById('demo').onclick = function (){
	console.log ("capturamos el click");
	document.getElementById("demo").innerHTML = "Hola, me llamo Vanina Camino!";
} 


document.addEventListener('click', function (){
	console.log("Hola gente");
	document.getElementById("demo").innerHTML = "Hola, me llamo Vanina Camino!";

});
document.getElementById('boton').addEventListener('click', function (){
	console.log("Hola gente");
	document.getElementById("demo").innerHTML = "Hola, me llamo Vanina Camino!";

});

document.getElementById('boton_color').addEventListener('click', function (){
	document.body.style.backgroundColor= '#ff65';

});

document.getElementById('boton_default').addEventListener('click', function (){
	document.body.style.backgroundColor= '#FFFFFF';

});





