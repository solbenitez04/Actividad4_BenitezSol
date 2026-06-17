const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();

    const email = document.getElementById("email").value.trim();

    const edad = document.getElementById("edad").value;

    const pais = document.getElementById("pais").value;

    const terminos = document.getElementById("terminos").checked;


    if(nombre.length < 5){
        alert("El nombre debe tener al menos 5 caracteres");
        return;
    }

    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!formatoEmail.test(email)){
        alert("Ingrese un email válido");
        return;
    }

    if(edad < 18 || edad > 60){
        alert("La edad debe estar entre 18 y 60 años");
        return;
    }

    if(pais === ""){
        alert("Debe seleccionar un país");
        return;
    }

    if(!terminos){
        alert("Debe aceptar los términos y condiciones");
        return;
    }

    const parametros =
    `resultado.html?nombre=${nombre}&email=${email}&edad=${edad}&pais=${pais}`;

    window.location.href = parametros;

});