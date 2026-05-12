window.addEventListener("scroll", function() {
    let elementos = document.querySelectorAll("section");

    elementos.forEach(el => {
        let posicion = el.getBoundingClientRect().top;
        let pantalla = window.innerHeight;

        if (posicion < pantalla - 100) {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }
    });
});

function modoOscuro() {
    document.body.classList.toggle("dark");
}

function cambiarTexto() {
    document.getElementById("texto").innerHTML = "✨ Eres increíble ✨";
}

function cambiarColor() {
    document.body.style.background = "#ffd6ec";
}

function toggleInfo() {
    let info = document.getElementById("info");

    if (info.style.display === "none") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}

function irArriba() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function mostrarMensaje() {
    alert("✨ Gracias por hacer clic 💖");
}

let acc = document.querySelectorAll(".acordeon");

acc.forEach(btn => {
    btn.addEventListener("click", function() {
        let panel = this.nextElementSibling;

        panel.style.display =
            panel.style.display === "block" ? "none" : "block";
    });
});

document.addEventListener("DOMContentLoaded", function() {

    let index = 0;
    let imagenes = document.querySelectorAll(".carrusel img");

    function mostrarImagen(i) {
        imagenes.forEach(img => img.classList.remove("activo"));
        imagenes[i].classList.add("activo");
    }

    window.siguiente = function() {
        index = (index + 1) % imagenes.length;
        mostrarImagen(index);
    }

    window.anterior = function() {
        index = (index - 1 + imagenes.length) % imagenes.length;
        mostrarImagen(index);
    }