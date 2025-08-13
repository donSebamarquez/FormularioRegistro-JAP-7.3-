function showAlertSuccess() {
    const alertEl = document.getElementById("alert-success");
    alertEl.classList.add("show");
    setTimeout(() => alert.classList.remove("show"), 3000); // 3 segundos
}

function showAlertError() {
    const alertEl = document.getElementById("alert-danger");
    alertEl.classList.add("show");
    setTimeout(() => alert.classList.remove("show"), 3000); // 3 segundos
}

document.getElementById("regBtn").addEventListener("click",function(){

    let pass1 = document.getElementById("password1").value;
    let pass2 = document.getElementById("password2").value;

    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let email = document.getElementById("email").value.trim();
    let password1 = document.getElementById("password1").value.trim();
    let password2 = document.getElementById("password2").value.trim();

    const terminosAceptados = document.getElementById("terminos").checked;

    if(pass1 === pass2 && pass1.trim().length >= 6 && terminosAceptados == true && (nombre && apellido && email && password1 && password2)){
        showAlertSuccess();
    }else{
        showAlertError();
    }
});