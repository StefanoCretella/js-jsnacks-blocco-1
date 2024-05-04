// Array vuoto
let numeriDispari = [];

// Chiedi all'utente di inserire 6 numeri e aggiungi quelli dispari all'Array
// Per inserire i 6 numeri
for (let i = 0; i < 6; i++) {
    let numero = parseInt(prompt("Inserisci un numero:"));

    // Calcolo numeri dispari
    if (numero % 2 !== 0) {
        numeriDispari.push(numero);
    }
}

// Stampare il risultato dell'Array con i rispettivi numeri dispari inseriti
console.log("Numeri dispari inseriti:", numeriDispari);
