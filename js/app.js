document.addEventListener('DOMContentLoaded', function () {
    // Variables globales
    let temporizador;
    let tiempoInicial = 0;
    let tiempoRestante = 0;
    const horasInput = document.getElementById('horas');
    const minutosInput = document.getElementById('minutos');
    const segundosInput = document.getElementById('segundos');
    const temporizadorElemento = document.getElementById('temporizador');
    const iniciarBtn = document.getElementById('iniciarBtn');
    const pausarBtn = document.getElementById('pausarBtn');
    const resetBtn = document.getElementById('resetBtn');

    // Función para iniciar el temporizador
    function iniciarTemporizador() {
        tiempoInicial = tiempoRestante = parseInt(horasInput.value) * 3600 + parseInt(minutosInput.value) * 60 + parseInt(segundosInput.value);
        if (tiempoInicial > 0) {
            temporizador = setInterval(actualizarTemporizador, 1000);
            iniciarBtn.disabled = true;
            pausarBtn.disabled = false;
            resetBtn.disabled = false;
        } else {
            alert('Por favor ingrese un tiempo válido');
        }
    }

    // Función para actualizar el temporizador
    function actualizarTemporizador() {
        if (tiempoRestante > 0) {
            tiempoRestante--;
            const horas = Math.floor(tiempoRestante / 3600);
            const minutos = Math.floor((tiempoRestante % 3600) / 60);
            const segundos = tiempoRestante % 60;
            temporizadorElemento.textContent = `${(horas < 10 ? '0' : '')}${horas}:${(minutos < 10 ? '0' : '')}${minutos}:${(segundos < 10 ? '0' : '')}${segundos}`;
        } else {
            clearInterval(temporizador);
            temporizadorElemento.textContent = '00:00:00';
            iniciarBtn.disabled = false;
            pausarBtn.disabled = true;
            resetBtn.disabled = true;
        }
    }

    // Función para pausar el temporizador
    function pausarTemporizador() {
        clearInterval(temporizador);
        iniciarBtn.disabled = false;
        pausarBtn.disabled = true;
    }

    // Función para resetear el temporizador
    function resetearTemporizador() {
        clearInterval(temporizador);
        tiempoInicial = tiempoRestante = 0;
        temporizadorElemento.textContent = '00:00:00';
        horasInput.value = minutosInput.value = segundosInput.value = '';
        iniciarBtn.disabled = false;
        pausarBtn.disabled = true;
        resetBtn.disabled = true;
    }

    // Event listeners
    iniciarBtn.addEventListener('click', iniciarTemporizador);
    pausarBtn.addEventListener('click', pausarTemporizador);
    resetBtn.addEventListener('click', resetearTemporizador);
});
