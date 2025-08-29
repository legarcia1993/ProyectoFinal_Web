// Variable global para controlar el audio
let audioActual = null;
let paisActual = null;

document.querySelectorAll('.punto').forEach(punto => {
    punto.addEventListener('click', () => {
        let sonido = "sonidos/" + punto.dataset.sonido;

        // Control de audio
        if (audioActual && paisActual === punto.dataset.nombre && !audioActual.paused) {
            audioActual.pause();
            return;
        }
        if (audioActual) {
            audioActual.pause();
            audioActual.currentTime = 0;
        }
        audioActual = new Audio(sonido);
        paisActual = punto.dataset.nombre;
        audioActual.play();

        // Actualizar nombre e info
        document.getElementById('nombre-pais').textContent = punto.dataset.nombre;
        document.getElementById('info-pais').textContent = punto.dataset.info;

        // Mostrar bandera
        let bandera = document.getElementById('bandera-pais');
        bandera.src = "banderas/" + punto.dataset.bandera;
        bandera.style.display = "block";

        // Mostrar imagen del país
        let imgPais = document.getElementById('imagen-pais');
        if (punto.dataset.imagen) {
            imgPais.src = "imagenes/" + punto.dataset.imagen; 
            imgPais.style.display = "block";
        } else {
            imgPais.style.display = "none";
        }

        // Mostrar sitios turísticos
        let listaSitios = document.getElementById('lista-sitios');
        let tituloSitios = document.getElementById('titulo-sitios');
        listaSitios.innerHTML = ""; // limpiar lista

        if (punto.dataset.sitios) {
            let sitios = punto.dataset.sitios.split(",");
            sitios.forEach(sitio => {
                let li = document.createElement("li");
                li.textContent = sitio.trim();
                listaSitios.appendChild(li);
            });
            tituloSitios.style.display = "block";
        } else {
            tituloSitios.style.display = "none";
        }

        // Animación
        let panel = document.getElementById('panel-lateral');
        panel.style.animation = "none";
        panel.offsetHeight;
        panel.style.animation = "fadeIn 0.5s ease";
    });
});
