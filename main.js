

// Dichiaro le variabili
let numeroTotaleGatti = 44;
let gattiPerFila = 6;


// calcolo del numero delle file 

let numeroFile = Math.floor(numeroTotaleGatti / gattiPerFila);

// Calcolo del numero di gatti rimanenti
let gattiRimanenti = numeroTotaleGatti % gattiPerFila;

// Calcolo del numero di gatti mancanti per completare una nuova fila
let gattiMancanti = gattiPerFila - gattiRimanenti;

// Stampa del risultato in console
console.log(`Ci sono ${numeroFile} file di gatti e ne mancano ${gattiMancanti} per una nuova fila, con un avanzo di ${gattiRimanenti}`);

