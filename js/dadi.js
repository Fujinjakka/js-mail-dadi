// 2 - Gioco dei dadi
// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


var tiroGiocatore = Math.floor(Math.random() * 6) + 1;
console.log("il giocatore ha tirato ed è uscito " + tiroGiocatore);

var tiroPc = Math.floor(Math.random() * 6) + 1;
console.log("il Pc ha tirato ed è uscito " + tiroPc);

if (tiroGiocatore > tiroPc) {
  document.getElementById('dadi').innerHTML = "Il giocatore ha vinto!";
} else if (tiroGiocatore < tiroPc) {
  document.getElementById('dadi').innerHTML = "Il Pc ha vinto!";
} else {
  document.getElementById('dadi').innerHTML = "Pareggio!";
}
