function mostrarmensaje() {
    let mensaje = document.getElementById("mensaje");
    mensaje.innerHTML = "Cuida y protege a los animales";
    mensaje.style.display = "block";

    setTimeout(() => {
        mensaje.style.opacity = "1";
        mensaje.style.transform = "translateY(0)";
    }, 50);
}

function mostrarmensajepersonal() {
    let mensaje = document.getElementById("mostrarmensajepersonal");
    mensaje.innerHTML = "Bienvenidos a mi página";
    mensaje.style.display = "block";

    setTimeout(() => {
        mensaje.style.opacity = "1";
        mensaje.style.transform = "translateY(0)";
    }, 50);
}

// 🌙 Modo oscuro
const button = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

button.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// Detectar preferencia del sistema
if (!localStorage.getItem("theme")) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.body.classList.add("dark-mode");
    }
}