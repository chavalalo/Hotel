// Almacenamiento
function saveLogin(name,id){
	window.localStorage.setItem('nombre',name);
	window.localStorage.setItem('id',id);
}

function isLogin(){
	var id = window.localStorage.getItem('id');		
	if(id != undefined)
		return true;
	else
		return false;
}