
function toggleMensaje(button) {
    const targetId = button.getAttribute('data-target');
    const mensaje = document.getElementById(targetId);
    
    if (!mensaje) return;
    
    if (mensaje.classList.contains('visible')) {
        mensaje.classList.remove('visible');
        mensaje.classList.add('hidden');
        
        if (targetId === 'mensaje1') {
            button.textContent = 'Mostrar mensaje Sobre mi';
        } else if (targetId === 'mensaje') {
            button.textContent = 'Mostrar mensaje Sobre El PEC';
        } else if (targetId === 'pec-video') {
            button.textContent = 'Ver video sobre cuidado animal';
        }
        
        setTimeout(() => {
            mensaje.style.display = 'none';
            mensaje.classList.remove('hidden');
        }, 400);
    } else {
        if (targetId === 'mensaje') {
            mensaje.innerHTML = 'Cuida y protege a los animales';
        } else if (targetId === 'mensaje1') {
            mensaje.innerHTML = 'Hola espero que tengas un lindo dia :)';
        }
        
        mensaje.style.display = 'block';
        mensaje.offsetHeight;
        mensaje.classList.add('visible');
        
        if (targetId === 'mensaje1') {
            button.textContent = 'Ocultar mensaje Sobre mi';
        } else if (targetId === 'mensaje') {
            button.textContent = 'Ocultar mensaje Sobre El PEC';
        } else if (targetId === 'pec-video') {
            button.textContent = 'Ocultar video sobre cuidado animal';
        }
    }
}

function MostrarMensaje() {
    toggleMensaje(event.target);
}

function MostrarMensaje1() {
    toggleMensaje(event.target);
}

function MostrarVideoPec() {
    toggleMensaje(event.target);
}