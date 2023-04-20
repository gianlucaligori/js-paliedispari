
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.



// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

let sceltaUtente = prompt('Pari o dispari?').toLowerCase();
let numeroUtente = parseInt(prompt('Inserisci numero')); //da 1 a 5

// chiedi numero a cpu 
let numeroCPU = Math.floor(Math.random() * 5) + 1;

// somma i due numeri
let somma = numeroUtente + numeroCPU;


// invoco funzione checkParidDispari. Se somma equivale a pari, dimmi che è pari, altrimenti dispari
let esito = checkPariDispari(somma);

function checkPariDispari(number) {
    if (number % 2 === 0) {
        return 'pari'
    } else
        return 'dispari'
}

// in conclusione confronta la scelta utente con valore restituito da checkParidDispari e stabilisci vincitore

if (sceltaUtente === esito) {
    console.log('Hai vinto!');
} else {
    console.log('Hai perso');
}
