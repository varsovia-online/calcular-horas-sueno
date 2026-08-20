document.getElementById('btn-calcular').addEventListener('click', function() {
    const dormiStr = document.getElementById('dormi').value.trim();
    const desperteStr = document.getElementById('desperte').value.trim();
    const resultadoDiv = document.getElementById('resultado');
    
    try {
        const [h1, m1] = dormiStr.split(':').map(Number);
        const [h2, m2] = desperteStr.split(':').map(Number);
        
        if (isNaN(h1) || isNaN(m1) || isNaN(h2) || isNaN(m2)) {
            throw new Error("Formato inválido");
        }
        
        let minutosDormir = h1 * 60 + m1;
        let minutosDespertar = h2 * 60 + m2;
        
        if (minutosDespertar < minutosDormir) {
            minutosDespertar += 24 * 60; // Ajuste para el día siguiente
        }
        
        let diferenciaMinutos = minutosDespertar - minutosDormir;
        let horas = Math.floor(diferenciaMinutos / 60);
        let minutos = diferenciaMinutos % 60;
        
        resultadoDiv.innerText = `Tiempo total de sueño:\n${horas} horas y ${minutos} minutos`;
    } catch (e) {
        alert("Por favor, ingresa las horas en formato HH:MM (Ej: 23:30).");
    }
});
