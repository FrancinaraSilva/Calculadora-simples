function soma(a, b) {
    return a + b;
}

function subtrai(a, b) {
    return a - b;
}

function multiplica(a, b) {
    return a * b;
}

function divide(a, b) {
    // Adicionar tratamento para divisão por zero
    if (b === 0) {
        alert("Não é possível dividir por zero!");
        return "Erro"; // Retorna uma string de erro ou NaN
    }
    return a / b;
}

// Constantes para as operações
// Essas constantes PRECISAM ser globais (ou definidas antes da dvCalcular)
// para que o onclick no HTML possa acessá-las.
const OPERACAO_SOMA = 1;
const OPERACAO_SUBTRACAO = 2;
const OPERACAO_MULTIPLICACAO = 3;
const OPERACAO_DIVISAO = 4;

// Função principal de cálculo
function dvCalcular(dvOperacao) {
    // Pega os valores dos inputs e converte para número
    let dvValorOp1 = Number(document.querySelector("#dvInput1").value);
    let dvValorOp2 = Number(document.querySelector("#dvInput2").value);
    // Pega o elemento onde o resultado será exibido
    let dvResult = document.querySelector("#dvResultadoCalculo");

    // console.log para depuração - MANTENHA ESTES!
    console.log("dvCalcular chamado com operação:", dvOperacao);
    console.log("Valores:", dvValorOp1, dvValorOp2);

    let resultadoCalculo; // Variável para armazenar o resultado antes de exibi-lo

    switch (dvOperacao) {
        case OPERACAO_SOMA:
            resultadoCalculo = soma(dvValorOp1, dvValorOp2);
            break;
        case OPERACAO_SUBTRACAO:
            resultadoCalculo = subtrai(dvValorOp1, dvValorOp2);
            break;
        case OPERACAO_MULTIPLICACAO:
            resultadoCalculo = multiplica(dvValorOp1, dvValorOp2);
            break;
        case OPERACAO_DIVISAO:
            resultadoCalculo = divide(dvValorOp1, dvValorOp2); // A função divide já lida com o erro de divisão por zero
            break;
        default:
            resultadoCalculo = "Operação Inválida";
    }

    dvResult.innerHTML = resultadoCalculo; // Exibe o resultado
}