function validar() {
	var nombre, apellidos, especialidad, matricula, direccion, direccion_numero, correo, usuario, clave, telefono, expresion;
	nombre = document.getElementById("nombre").value;
	apellidos = document.getElementById("apellidos").value;
    especialidad = document.getElementById("especialidad").value;
    matricula = document.getElementById("matricula").value;
    direccion = document.getElementById("direccion").value;
    direccion_numero = document.getElementById ("direccion_numero").value;
	telefono = document.getElementById("telefono").value;
	correo = document.getElementById("correo").value;
	usuario = document.getElementById("usuario").value;
	clave = document.getElementById("clave").value;

	expresion = /\w+@\w+\.+[a-z]/;

	if (nombre === "" || apellidos === ""  || especialidad === "" || matricula === "" || direccion === "" || direccion_numero === "" || telefono === "" || correo === "" || usuario === "" || clave === "" ){
		alert("Todos los campos son obligatorios");
		return false;
	}
	else if (nombre.length>30){
		alert("El nombre es muy largo");
		return false;
	}
	else if (apellidos.length>80){
		alert("Los apellidos son muy largos");
		return false;
	}
	else if (correo.length>100){
		alert("El correo es muy largo");
		return false;
	}
	else if (!expresion.test(correo)){
		alert("El correo no es válido");
		return false;
	}
	else if (usuario.length>20 || clave.length>20){
		alert("El usuario y la clave solo deben tener 20 caracteres como máximo");
		return false;
	}
	else if (telefono.length>15){
		alert("El teléfono es muy largo");
		return false;
	}
	else if (isNaN(telefono)){
		alert("El teléfono ingresado no es de tipo numerico");
		return false;
	}
}