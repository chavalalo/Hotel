//Eventos
$(document).ready(function(){
	document.addEventListener("deviceready", function(){
		window.location.href = '#login';
		$('#regEnviar').tap(function(){
			var nom = $('#regNom').val();
			var email = $('#regEmail').val();
			var tel = $('#regTel').val();
			if(nom != '' && email != '' && tel != ''){
				enviarRegistro(nom, tel, email);
			}else{
					navigator.notification.alert('Todos los campos son requeridos', null, 'Error de Registro', 'Aceptar');
				}
			});
	}, false);
});