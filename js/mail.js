// 1 - Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.



var mailUtente = prompt("qual'è la tua email?");
console.log(mailUtente);

var listaEmail = ["topolino@gmail.com", "paperino@gmail.com", "pippo@gmail.com", "pluto@gmail.com", "ziopaperone@gmail.com", "cip@gmail.com", "ciop@gmail.com", "tip@gmail.com", "tap@gmail.com"];
console.log(listaEmail);

var result = false;
console.log(result);

for (var x = 0; x < listaEmail.length; x++) {
  if (mailUtente == listaEmail[x] ) {
    result = true;
    document.getElementById('prova').innerHTML = "fai parte della lista";
  }
}
if (result == true) {
  document.getElementById("prova").innerHTML = "Accesso consentito";
} else {
  document.getElementById("prova").innerHTML = "Accesso non consentito";
}
