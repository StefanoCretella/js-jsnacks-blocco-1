function findWords() {
    // Valori delle 2 caselle dove inserire il testo
    const word1 = document.getElementById("word1").value.trim();
    const word2 = document.getElementById("word2").value.trim();

    // Confrontro delle 2 caselle
    const shortestWord = word1.length <= word2.length ? word1 : word2;
    const longestWord = word1.length > word2.length ? word1 : word2;
    
    // Risultato delle 2 caselle 
    const result = "La parola più corta è: " + shortestWord + "<br>La parola più lunga è: " + longestWord;

    // Mandare a schermo il risultato
    document.getElementById("result").innerHTML = result;

    // Stampare le parole delle 2 caselle nella console
    console.log(word1);
    console.log(word2);
}
