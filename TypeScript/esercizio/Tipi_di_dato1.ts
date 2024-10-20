
const button = document.querySelector("button")! //Usiamo il punto esclamativo per garantire alla macchina che questo valore ci sarà e lo recupererò nell'html

const input1 = document.getElementById("num1")! as HTMLInputElement //Qui stiamo dicendo che questo valore sarà un elemento HTML di tipo input

const input2 = document.getElementById("num2")! as HTMLInputElement

//Qui specifico che i due valori che sto passando saranno di tipo number

function somma(num1: number, num2: number) {

	return num1 + num2;

}

//Essendo un codice Compile-time Typescript già effettua un controllo sulle variabili e ci dice che button secondo lui non esiste ancora

button.addEventListener("click", function () {

    //Ora devo far eseguire somma() in base a due input castati in number
	console.log(somma(+input1.value, +input2.value));
});

//HTMLElement 

let numero = 500

let nonSoMaSoIlDato: number

let persona: {
    
    nome : string;
    eta: number;

}

//Sto creando una persona con i valori specifici richiesti dalla struttua persona

persona = {
    nome : "Nico",
    eta : 12,
}

let sport = ["Basket", "Calcio", "Pallavolo"] //questo è un array di stringhe = INFERENZA

//sport.push(8) l'array non può accettare dei numeri in quanto definito dalla macchina come un array di sole stringhe

sport.push('8')

let nuovoArray: any[] = ["Ciao", 9, "nero", true]

let elementi: [string, string] = ["Saluti", "baci"]

//elementi[2] Non esiste l'elemento nella posizione 2 della tupla