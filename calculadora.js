// declarando variáveis
const hero = "julien";
let victory = 97;
let defeat = 34;
let level;
let calculation;

// funçao de calculo de ranking
function ranking(victory, defeat) {
    calculation = victory - defeat;

// niveis de ranking
    if (victory < 10) {
        level = "Ferro";
        message = "Você está no nível FERRO!";
    } else if (victory >= 11 && victory <= 20) {
        level = "Bronze";
        message = "Você está no nível BRONZE!";
    } else if (victory >= 21 && victory <= 50) {
        level = "Prata";
        message = "Você está no nível PRATA!";
    } else if (victory >= 51 && victory <= 80) {
        level = "Ouro";
        message = "Você está no nível OURO!";
    } else if (victory >= 81 && victory <= 90) {
        level = "Diamante";
        message = "Você está no nível DIAMANTE!";
    } else if (victory >= 91 && victory <= 100) {
        level = "Lendario";
        message = "Você está no nível LENDÁRIO!";
    } else {
        level = "Imortal";
        message = "Você está no nível IMORTAL!";
    }

    return {
        calculation,
        level,
    };
}

// chamada de função
const result = ranking(victory, defeat);

// output
console.log("O heroi " + hero + " tem o saldo de " + result.calculation + " e está no nível " + result.level);
