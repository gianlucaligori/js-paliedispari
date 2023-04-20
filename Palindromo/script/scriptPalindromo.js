// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// let stringa = prompt("Inserisci parola o frase").replace(/\s+/g, '').toLowerCase;
// isPalindromo(stringa)




// function isPalindromo(parola) {
//     let eleInv = '';
// }

// for (i = word.lenght - 1; i>= 0; i--) {
//     eleInv += parola[i];
// }

// if (parola.toLowerCase() == eleInv.toLowerCase()) {
//     console.log('Palindromo');
// } else {
//     console.log('Non palindromo');
// }



//


// function isPalindromo(word) {
//     let eleInv
//     for (i = word. length - 1; i >= 0; i--) {
//     eleInv += word[i];
//     }
//     if (word.toLowerCase() == eleInv.toLowerCase()) {
//     console. log("Palindromo")
//     } else {
//     console. log("NON Palindromo")
//     }
// }
//     //Quindi chiedo una parola all'utente tramite un prompt e chiamo la funzione creata

//     let str = prompt("Dammi una parola").replace(/\s+/g, '');
//     isPalindromo(str);

function isPalindromo(word) {
    let eleInv = "";

    for (i = word.length - 1; i >= 0; i--) {
        eleInv += word[i];
    }
    
    if (word.toLowerCase() == eleInv.toLowerCase()) {
        console.log("Palindromo")
    } else {
        console.log("NON Palindromo")
    }
}

//Quindi chiedo una parola all'utente tramite un prompt e chiamo la funzione creata

let stringa = prompt("Dammi una parola").replace(/\s+/g, '');
isPalindromo(stringa);