const {gets, print} = require("./funcoes-auxiliares");

let quantidadeDeAlunos = gets();

let maiorValor = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    let numeroSorteado = gets();

    if(numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }

}

print(maiorValor);