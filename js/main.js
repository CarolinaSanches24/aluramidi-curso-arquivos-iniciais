function playSound(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);
  if (elemento && elemento.localName === "audio") {
    elemento.play();
  } else {
    console.log("Elemento não encontrado ou seletor inválido");
  }
}
const listaDeTeclas = document.querySelectorAll(".tecla");

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    playSound(idAudio);
  };

  tecla.onkeydown = function (evento) {
    /*adiciona a classe a um elemento da lista*/
    if (evento.code === "Space" || evento.code === "Enter") {
      tecla.classList.add("ativa");
    }
  };
  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}
/*O evento onkeydown é um evento 
JavaScript que ocorre quando uma tecla 
do teclado é pressionada */

/*classList em JavaScript é uma propriedade de objetos DOM (Document Object Model) 
que representa a lista de classes de um elemento HTML. */
