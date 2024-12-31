document.getElementById('generateLinkBtn').addEventListener('click', function() {
    // Link de ejemplo para acortar
    let originalLink = "https://www.example.com";

    // Hacer la solicitud a la API de Cuty.io (esto es un ejemplo; necesitarás una API key de Cuty.io)
    fetch(`https://cuty.io/api/v1/shorten?url=${encodeURIComponent(originalLink)}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 854be0db1fecaf24ce7e1876f'  // Reemplaza con tu API Key de Cuty.io
        },
        body: JSON.stringify({
            url: originalLink
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.short_url) {
            // Mostrar el enlace acortado en la página
            document.getElementById('shortenedLink').innerHTML = `Enlace Acortado: <a href="${data.short_url}" target="_blank">${data.short_url}</a>`;
            
            // Redirigir a la página inicial después de un corto retraso
            setTimeout(() => {
                window.location.href = "index.html"; // Redirige a la misma página
            }, 3000);  // Espera 3 segundos antes de redirigir
        } else {
            console.error('Error al acortar el enlace:', data);
        }
    })
    .catch(error => {
        console.error('Error en la solicitud:', error);
    });
});