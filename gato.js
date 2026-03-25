async function buscarGato() {
    try {
        const resposta = await fetch("https://api.thecatapi.com/v1/images/search");
        const dados = await resposta.json();

        const img = document.getElementById("gato");
        img.src = dados[0].url;

    } catch (erro) {
        console.error("Erro:", erro);
    }
}