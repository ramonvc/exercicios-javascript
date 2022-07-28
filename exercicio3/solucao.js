
const botao = document.querySelector("button");
let total = Number(document.querySelector("#valor").innerHTML);

function somar() {
    if (total < 10) {
        total++;
        document.querySelector("#valor").innerHTML = total;
    } else {
        console.log("Não é possível adicionar: valor maior ou igual a 10")
    }
}

if (botao) {
    botao.addEventListener('click', somar);
}
