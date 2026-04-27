

function Mostrarmensaje2 () {
    let mensaje = document.getElementById("mensaje2");
    mensaje.innerHTML = "cuidado y protege a los animales";
    mensaje.style.display ="block";

    setTimeout( ()=>{
        mensaje.style.opacity="1";
        mensaje.style.transform="translateY(0)";
},50);
}

function Mostrarmensaje1 () {
    let mensaje = document.getElementById("mensaje1");
    mensaje.innerHTML = "Amo a sheila";
    mensaje.style.display ="block";

    setTimeout( ()=>{
        mensaje.style.opacity="1";
        mensaje.style.transform="translateY(0)";
},50);
}

