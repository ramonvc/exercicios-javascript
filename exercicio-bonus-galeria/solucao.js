const imagens = document.querySelectorAll("#galeria li img");

function galeriaTrocar(event) {
  const principal = document.querySelector("#imagem-principal");
  const clicada = event.currentTarget;
  principal.src = clicada.src;
  principal.alt = clicada.alt;
}

function galeriaTrocar2(event) {
  document.querySelector("#imagem-principal").src = event.currentTarget.src;
  document.querySelector("#imagem-principal").alt = event.currentTarget.alt;
}

function galeriaClick(imagem) {
  imagem.addEventListener("click", galeriaTrocar2);
}

imagens.forEach(galeriaClick);
