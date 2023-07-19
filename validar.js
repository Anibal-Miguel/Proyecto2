// Example starter JavaScript for disabling form submissions if there are invalid fields
/*(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()*/

const formulario = document.getElementById('formulario'); // accede al formulario
const inputs = document.querySelectorAll('#formulario input'); // accede a los inputs del formulario

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}


const validarformulario = (evento) => {
	switch (evento.target.name){
		case "nombre":
			if(expresiones.nombre.test(evento.target.value)){
				document.getElementById('grupo__nombre').classList.remove('formulario__grupo-incorrecto');
				document.getElementById('grupo__nombre').classList.add('formulario__grupo-correcto');
				document.querySelector('#grupo__nombre i').classList.remove('fa-times-circle');
				document.querySelector('#grupo__nombre i').classList.add('fa-check-circle');
		 }else {
			document.getElementById('gurpo__nombre').classList.add('formulario__grupo-incorrecto');
		 }

		break;
		case "apellido":
		
		break;
		case "especialidad":
		
		break;
		case "matricula":
		
		break;
		case "direccion":
		
		break;
		case "numero":
		
		break;
		case "departamento":
		
		break;
		case "piso":
		
		break;
		case "telefono":
		
		break;
		case "email":
		
		break;
		case "usuario":
		
		break;
		case "contraseña":
		
		break;
		case "contraseña2":
		
		break;
	}
}

inputs.forEach((input) => {
 input.addEventListener('keyup', validarformulario);
 input.addEventListener('blur', validarformulario);
});




formulario.addEventListener('submit', (evento) => {
	evento.preventDefault(); //no evia los datos
});


/*function validar() {
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

	//expresion = /\w+@\w+\.+[a-z]/;
	e.preventDefault();

	if (nombre === "" || apellidos === ""  || especialidad === "" || matricula === "" || direccion === "" || direccion_numero === "" || telefono === "" || correo === "" || usuario === "" || clave === ""){
		alert("Todos los campos son obligatorios");
		return false;
	}
	/*else if (nombre.length>30){
		alert("El nombre es muy largo");
		return false;
	}
	else if (apellidos.length>80){
		alert("Los apellidos son muy largos");
		return false;
	}
	else if (especialidad.length>80){
		alert("La especialidad es muy larga);
		return false;
	}
	else if (matricula.length>80){
		alert("La matricula es muy larga");
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
}*/