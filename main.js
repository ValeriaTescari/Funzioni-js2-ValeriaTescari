// esercizio 1
let n_tiri = 5;

function tiroDadi(x) {
    let tot_G1 = 0;
    for (let i = 0; i < x; i++) {
        let tiroDado = Math.floor(Math.random() * (6 - 1 + 1) + 1);
        console.log(tiroDado);
        tot_G1 = tot_G1 + tiroDado;
    }
    return tot_G1;
}

let g1 = tiroDadi(n_tiri);
let g2 = tiroDadi(n_tiri);

console.log('tirono giocatore n1 ' + g1);
console.log('tirono giocatore n2 ' + g2);

if (g1 > g2) {
    console.log('vince giocatore n1');
}

if (g1 < g2) {
    console.log('vince giocatore n2');
}

if (g1 == g2) {
    console.log('pareggio');
}

// esercizio 2

function numeriStamp(x) {
    for (let i = 1; i < x; i++) {

        if (i % 15 == 0) {
            console.log("FizzBuzz")
        } else if (i % 5 == 0) {
            console.log("Buzz")
        } else if (i % 3 == 0) {
            console.log("Fizz")
        } else {
            console.log(i)
        }

    }
}

numeriStamp(16)

// esercizio 3


let numbers = [10, 12, 78, -4, -20, 11];

function num_max(x) {
    console.log(`il numero maggiore in questo ${typeof x} è ${Math.max(...x)}`)
}
function num_min(x) {
    console.log(`Il numero minore in questo ${typeof x} è ${Math.min(...x)}`)
}

num_max(numbers)
num_min(numbers)

