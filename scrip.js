

function Mostrarmensaje () {
    let mensaje = document.getElementById("mensaje");
    mensaje.innerHTML = "cuidado y protege a los animales";
    mensaje.style.display ="block";

    setTimeout( ()=>{
        mensaje.style.opacity="1";
        mensaje.style.transform="translateY(0)";
},50);
}