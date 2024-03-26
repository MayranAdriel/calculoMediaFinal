function calcular() {
  let valor1 = document.querySelector("#nota1").value;
  let valor2 = document.querySelector("#nota2").value;
  let valor3 = document.querySelector("#nota3").value;

  if (InputsVazios(valor1, valor2, valor3)) {
    let media =
      (parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3)) / 3;
    let divResultado = document.querySelector("#resultado");
    divResultado.innerHTML = `A media é: ${media.toFixed(1)}`;
    verificaMedia(media)
  }
}

function InputsVazios(valor1, valor2, valor3) {
  if (valor1 == "" || valor2 == "" || valor3 == "") {
    alert("Preencha todos os campos");
    return false;
  }
  return true;
}

function calculaQuantoPrecisaNaFinal(media) {
  return (25 - 3 * media) / 2;
}

function verificaMedia(media) {
  let DivquantoPrecisa = document.querySelector("#quantoPrecisa");
  if(media >= 4 && media < 7) {
    let quantoPrecisa = calculaQuantoPrecisaNaFinal(media)
    DivquantoPrecisa.innerHTML = `<br> Você precisa de ${quantoPrecisa.toFixed(1)} na final para passar`
  } else if (media < 4) {
    DivquantoPrecisa.innerHTML = 'Parabéns, você não passou!'
  } else {
    DivquantoPrecisa.innerHTML = 'Parabéns, você fez mais que sua obrigação!'
  }
}
