function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';

    // Formatar horas para o formato 12 horas
    /* hours = hours % 12;
    hours = hours ? hours : 12; */

    // Adiciona um zero à esquerda se os números forem menores que 10
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    // Atualiza o HTML com os novos valores
    document.getElementById('hours').textContent = hours;
    document.getElementById('min').textContent = minutes;
    document.getElementById('sec').textContent = seconds;
    document.getElementById('ampm').textContent = ampm;
}

// Chama a função updateClock a cada segundo
setInterval(updateClock, 1000);

// Chama a função uma vez para garantir que o relógio seja atualizado imediatamente após o carregamento da página
updateClock();
