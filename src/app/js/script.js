document.addEventListener('DOMContentLoaded', function() {
    // URL del servidor Docker marieta (cámbialo si es necesario)
    const API_URL = 'http://localhost:3306/mediciones'; // Endpoint

    // Función para obtener los datos de ozono y temperatura del servidor
    function obtenerMediciones() {
        fetch(API_URL)
            .then(response => response.json())  // Convertir la respuesta a JSON
            .then(data => {
                // Asumiendo que la respuesta tiene formato { ozono: 10, temperatura: 22 }
                document.getElementById('ozono-value').textContent = `${data.ozono} ppm`;
                document.getElementById('temperatura-value').textContent = `${data.temperatura} °C`;
            })
            .catch(error => {
                console.error('Error al obtener las mediciones:', error);
                document.getElementById('ozono-value').textContent = 'Error';
                document.getElementById('temperatura-value').textContent = 'Error';
            });
    }

    // Llamar a la función de obtener mediciones al cargar la página
    obtenerMediciones();

    // Si quieres que se actualicen cada cierto tiempo (e.g., cada 10 segundos)
    setInterval(obtenerMediciones, 10000);
});
