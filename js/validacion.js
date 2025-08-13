function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById("regBtn").addEventListener("click", function () {
    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let email = document.getElementById("email").value.trim();
    let password1 = document.getElementById("password1").value.trim();
    let password2 = document.getElementById("password2").value.trim();

    if (!nombre || !apellido || !email || !password1 || !password2) {
        document.getElementById("alert-danger").classList.add("show");
        document.getElementById("alert-success").classList.remove("show");
    } else {
        document.getElementById("alert-success").classList.add("show");
        document.getElementById("alert-danger").classList.remove("show");
    }
});