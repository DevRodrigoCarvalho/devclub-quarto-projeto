function number_generator() {
    const between_min = Math.ceil(document.querySelector("#between").value)
    const and_max = Math.floor(document.querySelector("#and").value)
    const result_container = document.querySelector(".result")
    const image = document.querySelector(".result-image")
    const number = document.querySelector(".result-number")
    if (between_min >= and_max) {
        alert("O número 'Mínimo' deve ser menor que o número 'Máximo'.")
        return;
    }
    // Reset visual (pra múltiplos cliques)
    image.classList.remove("hide")
    number.classList.remove("show")

    // Força reflow (reinicia animação)
    void image.offsetWidth;

    // Começa rápido
    let intervalSpeed = 100;
    let totalTime = 0;

    // Efeito rolando com desaceleração
    const interval = setInterval(() => {
        const randomTemp = Math.floor(Math.random() * (and_max - between_min) + between_min);
        number.textContent = randomTemp;
        totalTime += intervalSpeed;

        // Desaceleração progressiva (efeito mais realista)
        if (totalTime > 600) intervalSpeed = 120;
        if (totalTime > 900) intervalSpeed = 180;
    }, intervalSpeed);

    // Tempo total da animação
    setTimeout(() => {
        clearInterval(interval);
        const result_finaly = Math.floor(Math.random() * (and_max - between_min) + between_min);
        number.textContent = result_finaly;

        // Animações finais
        image.classList.add("hide")
        setTimeout(() => {
            number.classList.add("show")
        }, 150)
    }, 500);
}