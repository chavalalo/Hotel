//Eventos
$(document).ready(function(){
	document.addEventListener("deviceready", function(){
		window.location.href = '#login';
		$('#regEnviar').tap(function(){
			var nom = $('#regNom').val();
			var email = $('#regEmail').val();
			var tel = $('#regTel').val();
			if(nom != '' && email != '' && tel != ''){
				navigator.notification.confirm("Nombre: "+nom+"\nEmail: "+email+"\nTeléfono: "+tel, function(botones){
					switch(botones){
						case 1:
							navigator.notification.beep(5);
							break;
						case 2:
							navigator.notification.vibrate(500);
							break;	
					}
				}, "Titulo", "Beep, Vibrar, Salir");
				}else{
					navigator.notification.alert('Todos los campos son requeridos', null, 'Error de Registro', 'Aceptar');
				}
			});
	}, false);
});