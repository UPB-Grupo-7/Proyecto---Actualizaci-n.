let registros = [];

function agregarRegistro(){
    let persona = [];
    usuario = document.getElementById('in_usuario').value;
    contrasena = document.getElementById('in_contrasena').value;
    validarUsuario = false;
    validarContrasena = false;
    const ptr = new RegExp('^[A-Z0-9Ñ]+$', 'i');
    if (usuario.length < 3 || usuario.length > 9) {
        alert("Usuario no tiene la longitud");
    } else if (!ptr.test(usuario)) {
        alert("Usuario usa caracteres especiales");
    } else {
        if(usuario != ""){
            validarUsuario = true;
        }
        else{
            alert("Usuario no tiene info")
        }

    }
    if (contrasena.length < 6) {
        alert("Contrasena no tiene la longitud");
    } else if (!ptr.test(contrasena)) {
        alert("Contrasena tiene caracteres especiales");
    } else {
        if(contrasena != ""){
            validarContrasena = true;
        }
        else{
            console.log("Usuario no tiene info")
        }

    }
    if(validarUsuario == true && validarContrasena == true){
        persona = {"usuario" : usuario, "contrasena" : contrasena}
        registros.push(persona);
        console.log(persona);
        console.log(registros);
    }
}


function filtrarPorContrasena(arreglo,filtro){
    let newRegistro = [];

    for (var i=0; i<arreglo.length; i++){

        if(arreglo[i].contrasena.length <= filtro){
        newRegistro.push(arreglo[i]);
        }
    }
    console.log(newRegistro);
    return newRegistro;
}
