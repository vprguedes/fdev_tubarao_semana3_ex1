const pesoProduto = document.getElementById("inserirPeso");
const distanciaEntrega = document.getElementById("inserirDistancia");
const calcular = document.getElementById("buttonCalculo");
const resultado = document.getElementById("result");

function calculoFrete() {
    const peso = Number(pesoProduto.value);
    const distancia = Number(distanciaEntrega.value);
    const valorFrete = 6 * peso * distancia;
    if (isNaN(valorFrete)) {
        resultado.textContent = "Devem ser inseridos apenas numeros.";
    } else {
        resultado.textContent = "Frete: R$" + {valorFrete};
    }
}

calcular.addEventListener("click", calculoFrete);