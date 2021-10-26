

// // Generare un numero random da 1 a 6
// let userRand = Math.floor(Math.random() * 6) + 1
// console.log(userRand)
// let computerRand = Math.floor(Math.random() * 6) + 1
// console.log(computerRand)

// // Stabilire il vincitore
// if (userRand > computerRand){
// 	console.log(`Numero ${userRand} Hai Vinto`)
// }else if(userRand < computerRand) {
// 	console.log(`Numero ${computerRand} Hai perso`)
// }else if(userRand = computerRand) {
// 	console.log('pari')
// }



// Mail
// - crea una lista contenente almeno 3 indirizzi email
const mailList = ['giorgio@gmail.com','nataliya@gmail.com','paolo@gmail.com'];
const list  = document.querySelector('.ul');

for(let i = 0; i < mailList.length; i++){
	console.log(mailList[i]);
	list.innerHTML += (`<li>${mailList[i]}</li>`)
}
// - chiedi all’utente la sua email,
const userMail = prompt('Enter mail')
// - controlla che sia nella lista di chi può accedere (lista creata sopra al punto 1),
	if(userMail === ''){
		alert('ERROR')
	} else {
		let userfound = false
		for(let i = 0; i < mailList.length; i++){
			if(mailList[i] === userMail) {
				userfound = true;
			}
		}
// - stampa un messaggio appropriato sull’esito del controllo.
	if (userfound === true){ alert('User Found')}
	else{alert('User Not Found')}
	}
		
