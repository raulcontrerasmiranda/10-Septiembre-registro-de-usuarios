//alert("hollaaaaaaa");

class Registro{
  constructor(user, password, correo){
    this.user = user;
    this.password = password;
    this.correo = correo;
  }
}

var listNewUser = [];



function login(){
var user = "";
var password = "";

user = document.getElementById('user').value;
password = document.getElementById('password').value;
var indicador = document.getElementById('Aviso').getElementsByTagName('p').length;
console.log(indicador);
if (indicador === 0 && (user === "" || password === "")){
  //alert("Llenar todos los campos");
  var mensaje = document.createElement('p');
  var contenido = document.createTextNode('Todos los campos deben llenarse');
  mensaje.appendChild(contenido);
  mensaje.className = "Aviso"

document.getElementById('Aviso').appendChild(mensaje);

}

console.log(user);
console.log(password);
}

function signin(){
window.location.assign("registro.html")
}

//------------------------------------------------------------------------
//Comienzan las funciones para listNewUser

//funcion para verificar campos

function verCampos(user, password, correo){
	var status = null;
	if ((user == "" || password == "" || correo == "")){
		status = true;
	}
  else {
    status = false;

  }
	return status;
}

//---------------------------------------------------

//funcion para verificar duplicado de Nombre

function verUser (longitud, user) {
	var status = false;
	if (longitud >= 1){
    		for (var i in listNewUser){
        		if (user == listNewUser[i].user){
              status = true;
              break;
            }
            else{
              status = false;
            }
        }
    }
    return status;
}


function newUser(){
  //alert("hola");
  var user = document.getElementById('rUser').value;
  var password = document.getElementById('rPassword').value;
  var correo = document.getElementById('rCorreo').value;
  var nRegistro = new Registro(user, password, correo);


  var indicador = document.getElementById('Aviso').getElementsByTagName('p').length;
  console.log(indicador);
  var longitud = listNewUser.length;

  var estadoCampos = verCampos(user, password, correo);
  console.log("Campos = " + estadoCampos);
  var estadoUser = verUser(longitud, user);
  console.log("User = " + estadoUser);

  if ((estadoCampos == true && indicador == 0)
        || (estadoCampos == true && estadoUser == true)
        || (estadoCampos == true && estadoUser == false)){
        var mensaje = document.createElement('p');
        var contenido = document.createTextNode('Debe ingresar usuario y/o contraseña');
        mensaje.appendChild(contenido);
        mensaje.className = "Aviso";
        document.getElementById('Aviso').appendChild(mensaje);
  }

  if ((estadoCampos == false && estadoUser == false)
        || (estadoCampos == false && estadoUser == false)
        || estadoCampos == false && estadoUser == false){

          listNewUser.push(nRegistro);
  }

  if ((estadoUser == true)
      || (estadoCampos == true && estadoUser == true)){
    var mensaje = document.createElement('p');
    var contenido = document.createTextNode('Nombre de usuario repetido');
    mensaje.appendChild(contenido);
    mensaje.className = "Aviso"
    document.getElementById('Aviso').appendChild(mensaje);
  }

  if ((estadoCampos == false && indicador >= 1)
      || (estadoCampos == false && estadoUser == true && indicador >= 1)
      || (estadoCampos == false && estadoUser == false && indicador >= 1)
      ||(estadoCampos == true && estadoUser == true && indicador >= 1)){
    var eliminar = document.getElementById('Aviso');
    while (eliminar.firstChild){
    eliminar.removeChild(eliminar.firstChild);
    }
    }

  //console.log(listNewUser);
  //console.log(indicador);
//childNodes.
    document.getElementById("rUser").value = "";
    document.getElementById("rPassword").value = "";
    document.getElementById("rCorreo").value = "";

    var convertido_JSON = JSON.stringify(listNewUser);
    console.log(convertido_JSON);
    localStorage.setItem("Registros", convertido_JSON);

    var recuperados = JSON.parse(localStorage.getItem("Registros"));
    console.log(recuperados)


}
