// Pido los datos cada segundo
setInterval(() => {
    // Pido los datos a la ruta /data/update
    fetch("/data/update")
    .then(response => response.json())
    .then(data => {
        // Guardo el valor de temperatura
        const temp = data.intensidad;
        // Maximo valor de temperatura
        const max_temp = 65535;
        // Lo escalo a un valor entre -30 y 240 grados
        const deg = temp * 270 / max_temp - 30;
        document.querySelector(".gauge .pointer .hand").style.transform = `rotate(${deg}deg)`;
    })
}, 200);