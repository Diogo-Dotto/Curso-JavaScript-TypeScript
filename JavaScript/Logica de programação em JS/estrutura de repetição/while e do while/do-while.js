function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

//do-while executa e depois checa
const min = 1;
const max = 50;
let rand = 10;

do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);