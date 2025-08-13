function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

//validacion del checkbox

document.getElementById("regBtn")
.addEventListener("click", function() {

    const terminosAceptados = document.getElementById("terminos").checked;

    if(terminosAceptados){
        showAlertSuccess();
    } else {
        showAlertError();
    }
    
});