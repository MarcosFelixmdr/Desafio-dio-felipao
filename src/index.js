let nome = "Marcos";
let xp = 9999;

let nivel;
if (xp < 1000) {
    nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);

for (let i = 500; i <= 11000; i += 1500) {
    let testeNivel;
    if (i < 1000) {
        testeNivel = "Ferro";
    } else if (i >= 1001 && i <= 2000) {
        testeNivel = "Bronze";
    } else if (i >= 2001 && i <= 5000) {
        testeNivel = "Prata";
    } else if (i >= 5001 && i <= 7000) {
        testeNivel = "Ouro";
    } else if (i >= 7001 && i <= 8000) {
        testeNivel = "Platina";
    } else if (i >= 8001 && i <= 9000) {
        testeNivel = "Ascendente";
    } else if (i >= 9001 && i <= 10000) {
        testeNivel = "Imortal";
    } else {
        testeNivel = "Radiante";
    }
    console.log(`Com ${i} XP, o nível é ${testeNivel}`);
}


