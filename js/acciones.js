// JavaScript Document
$(document).ready(function(e) {
    //watchID se refiere a actual
	
	var watchID=null;
	document.addEventListener("deviceready",Dispositivo_Listo,false);
	
	//Cuando esta listo el dispositivo
	function Dispositivo_listo(){
		comienza();
	}
	
	//Empieza la observacion cada 2 segundos
function Comienza(){
	
	//Actualiza la aceleracion cada 2 segundos
	//
	var opciones={frequency:2000};
	
	watchID=navigator.accelerometer.watchAcceleration(Correcto,Error.opciones);
	navigator.geolocation.getCurrentPosition(Localiza,ErrorLocalizacion);
}
//Detiene la observacion de la caeleracion

function Detente(){
	if(watchID){
		navigator.accelerometer.clearWatch (watchID);
		watchID=null;
	}
}
//correcto:toma una captura de la aceleracion
function Correcto(acceleration){
	var element=document.getElementById('acelerometro');
	
	element.innerHTML='Aceleracion eb X:'+acceleration.x+'<br/>'+
	'Aceleracion en Y:'+acceleracion.y+'<br/>'+
	'Intervalo:'+acceleration.timestamp+'<br/>';
}

//eRROR:FALTA al obtener la aceleracion
function Error(){
	alert('Error!');
}
//Exito al localizar
function Localiza(posicion){
	var element=document.getElementById('geolocalizacion');
	element.innerHTML='Latitud:'+position.coords.latitude+'<br/>'+
	'Longitud:'+position.coords.longitude+'<br/>'+
	'Precision:'+posicion.coords.accuracy+'<br/>'+
	'intervalo:'+posicion.timestamp+'<br/>';
}
//Error en la geolocalizacion
function ErrorLocalizacion(error){
	alert('codigo:'+error.code+'\n'+
	'mensaje:'+error.message+'\n');
}
});
