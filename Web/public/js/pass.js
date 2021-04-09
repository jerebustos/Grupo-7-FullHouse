


function mostrarContrasena(){
    var eye = document.querySelector("#eye");
    var notEye = document.querySelector("#notEye");
    var tipo = document.getElementById("password");

    if(tipo.type == "password"){
        tipo.type = "text";
        eye.style.display = "none";
        notEye.style.display = "inline"
        
    }else{
        tipo.type = "password";
        notEye.style.display = "none"
        eye.style.display = "inline";
    }
}