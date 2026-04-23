function revelar() {

    // Alterar imagem
    const img = document.querySelector(".card-img-top");
    img.src = "img/_vinicius_junior.png";

    // Atualizar textos
    document.getElementById("Nome").innerHTML = 
        'Vinícius José Paixão de Oliveira Júnior <span id="Rank" class="badge text-bg-success">9,5</span>';

    document.getElementById("Data_Nas").textContent = "12/07/2000 (25 anos)";
    document.getElementById("Alutra").textContent = "1,76 m";
    document.getElementById("Posicao").textContent = "Ponta-esquerda / Atacante";

    // Remover classes placeholder e aplicar card-text
    const elementos = document.querySelectorAll(".placeholder");

    elementos.forEach(el => {
        el.classList.remove("placeholder");
        el.classList.remove("placeholder-glow");
        el.classList.add("card-text");
    });
}