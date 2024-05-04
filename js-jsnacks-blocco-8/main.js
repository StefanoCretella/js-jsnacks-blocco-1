// Chiede all'utente di inserire un numero di 4 cifre
let numero = prompt("Inserisci un numero di 4 cifre:");

// Verifica che il numero inserito sia di 4 cifre
if(numero.length !== 4 || isNaN(numero)) {
    console.log("Inserisci un numero di 4 cifre valido.");
} else {
    
    let sommaCifre = 0;

    // Calcola la somma delle cifre
    for(let cifra of numero) {
        sommaCifre += parseInt(cifra);
    }

    // Stampare il risultato nella console
    console.log("La somma delle cifre di", numero, "è:", sommaCifre);
}
