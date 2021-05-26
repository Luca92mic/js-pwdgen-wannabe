// Nome
var nome =  prompt('Inserisci il tuo nome:' );
var nomeLow = nome.toLowerCase();

// Cognome
var cognome = prompt('Inserisci il tuo cognome:' );
var cognomeLow = cognome.toLowerCase();

// Colore
var colorePreferito = prompt('Inserisci il tuo colore preferito:' );
var colorePreferitoLow = colorePreferito.toLowerCase();

// Concateno stringa
var pwd = nomeLow+cognomeLow+colorePreferitoLow;

// Stringa nella pagina
document.getElementById("pwd").innerHTML = pwd;