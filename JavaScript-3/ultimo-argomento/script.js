class persona {
	constructor(nome, cognome, eta) {
		//Per ogni valore passato come argomento JavaScript deve costruire una proprietà

		this.nome = nome;
		this.cognome = cognome;
		this.eta = eta;
	}

	saluta() {
		console.log("Ciao mi chiamo" + this.nome);
	}
}

//Ereditarietà posso creare classi che ereditano le proprietà da classi esistenti

class Lavoratore extends persona {
	constructor(nome, cognome, eta, lavoro) {
		//Per ogni valore passato come argomento JavaScript deve costruire una proprietà

		this.nome = nome;
		this.cognome = cognome;
		this.eta = eta;
	}

	saluta() {
		console.log("Ciao mi chiamo" + this.nome);
	}
}

//Polimorfismo: modifico i metodi della classe da cui ho ereditato

//L'incapsulamento mi permette di proteggere le varie proprietà
