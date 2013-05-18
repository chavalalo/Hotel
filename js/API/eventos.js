//Eventos
$(document).ready(function(){
	document.addEventListener("deviceready", function(){
		if(!isLogin())
		window.location.href = '#login';
		$('#regFoto').tap(function(){
			tomarFoto();
		});
		$('#regEnviar').tap(function(){
			var nom = $('#regNom').val();
			var email = $('#regEmail').val();
			var tel = $('#regTel').val();
			var foto = $('#regFoto').attr('rel');
			if(nom != '' && email != '' && tel != '' && foto != undefined && foto != ''){
				enviarRegistro(nom, tel, email, foto);
			}else{
					navigator.notification.alert('Todos los campos son requeridos', null, 'Error de Registro', 'Aceptar');
				}
			});
	}, false);
});