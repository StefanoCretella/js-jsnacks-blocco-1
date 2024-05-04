document.addEventListener("DOMContentLoaded", function() {
    // Array
    const numeri = []; 

    // Input per inserire i numeri
    const inputNumero = document.getElementById("numero"); 

    // Button "Aggiungi" 
    const aggiungiBtn = document.getElementById("aggiungi"); 

    // Messaggio
    const messaggio = document.getElementById("messaggio"); 
    
    // Contatore per tenere traccia dei numeri di inserimenti
    let conteggioInserimenti = 0;

    // Funzione button "Aggiungi"
    aggiungiBtn.addEventListener("click", function() {
        
        // Ottieni il numero inserito dall'utente e convertilo in un numero intero //
        const numero = parseInt(inputNumero.value);
        
        // Verifica se il valore inserito è un numero valido
        if (!isNaN(numero)) {

            // Se è un numero valido aggiungilo o sottrailo
            numeri.push(numero);

            // Incrementa o sottrai il conteggio
            conteggioInserimenti++;

            // Calcola la somma di tutti i numeri inseriti

            const somma = numeri.reduce((acc, curr) => acc + curr, 0);

            // Mostra il messaggio con la somma dei numeri inseriti finora
            messaggio.textContent = `La somma di tutti i numeri inseriti finora è: ${somma}`;

            // Verifica se sono stati inseriti 10 numeri e disabilita il pulsante "Aggiungi" se necessario
            if (conteggioInserimenti === 10) {
                aggiungiBtn.disabled = true;
            }
        } else {
            // Se il valore inserito non è un numero valido mostra un messaggio di errore
            alert("Inserisci un numero valido.");
        }
    });
});
