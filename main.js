

// Generare un numero random da 1 a 6
let userRand = Math.floor(Math.random() * 6) + 1
console.log(userRand)
let computerRand = Math.floor(Math.random() * 6) + 1
console.log(computerRand)

// Stabilire il vincitore
if (userRand > computerRand){
	console.log(`Numero ${userRand} Hai Vinto`)
}else if(userRand < computerRand) {
	console.log(`Numero ${computerRand} Hai perso`)
}else if(userRand = computerRand) {
	console.log('pari')
}