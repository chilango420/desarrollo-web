Function mostrarHora(){
	momentoActual = new Date();
	hora = momentoActual.getHours();
	minuto = momentoActual.getMinutes();
	segundo = momentoActual.getSeconds();
	
	horaImprimible = hora + " : " + minuto + ":" + segundo;
	
	//salida
	
Document.getElementById('mostrarHora').innerHTML = horaImprimible;
}