// Valore della somma
let somma = 0;

//Determino il numero principale (0) e lo addiziono per 10 volte
for (let number = 0; number < 10; number++) {
    let numeriInseriti = parseInt(prompt("Inserisci un numero:"));

    //Sommo tutti i numeri inseriti
    somma += numeriInseriti;
}

//Per trovare la media divido la somma per 10
let media = somma / 10;

console.log("Somma dei primi 10 numeri inseriti:", somma);
console.log("Media dei primi 10 numeri inseriti:", media);
