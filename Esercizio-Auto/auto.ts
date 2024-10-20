
class Veicolo {


    //Creiamo le proprietà della classe veicolo

    marca: string;
    modello: string;
    velocitaMassima: number;
    targa: string;

    //creiamo il constructor che ricordiamo verrà richiamato ogniqualvolta verrà creato un nuovo elemento appartenente alla classe Veicolo 

    constructor( marca: string, modello: string, velocitaMassima: number, targa: string){
        this.marca = marca;
        this.modello = modello;
        this.velocitaMassima = velocitaMassima;
        this.targa  = targa;
    }

    //Creiamo i metodi della classe Veicolo

    descrizione(): string{

        return "Il marchio della macchina è: " + this.marca + " il suo modello è: " + this.modello + " la velocità massima a cui arriva è di " + this.velocitaMassima + " km/h."
    }

    //Aggiungiamo delle funzioni get e set alla proprietà velocità che mi permetta di controllare se effettivamente la velocità data sia una velocità fisicamente possibile

    //Creo prima la situazione dove la velocità è effettivamente raggiungibile

    get velocitaFattibile(): number{
        return this.velocitaMassima;
    }

    //Creo la risposta nel caso la velocità non sia raggiungibile

    set velocitaFattibile(velocitaSospetta: number) {
        if (this.velocitaFattibile > 0 && this.velocitaFattibile < 999){
            this.descrizione()
        } else {
            throw new Error ("La velocità data non è fisicamente raggiungibile, ricontrolla il valore specificato")
        }
    }

}

const RS6 = new Veicolo("Audi", "RS6", 1200, "DE403A91")

console.log(RS6.descrizione())


class Auto extends Veicolo{

    //Questa nuova classe introduce una nuova proprietà

    numPorte: number;

    constructor( marca: string, modello: string, velocitaMassima: number, targa: string, numPorte: number){

        super(marca, modello, velocitaMassima, targa)

        this.numPorte = numPorte;

    }

    //Faccio ereditare la funzione descrizione e la modifico per aggiungere alla fine la nuova info

    descrizione(): string {
        return super.descrizione() + " Questa auto ha " + this.numPorte + " porte.";
    };

}

const Huracan = new Auto("Lamborghini", "Huracan", 300, "AJDS7232", 4)

console.log(Huracan.descrizione())

//Creo la nuova classe moto

class Moto extends Veicolo{

    tipoMan: string;

    constructor(marca: string, modello: string, velocitaMassima: number, targa: string, tipoMan: string){

        super(marca, modello, velocitaMassima, targa)

        this.tipoMan = tipoMan;
    }

    descrizione(): string {

        return super.descrizione() + " Il tipo di manubrio di questa moto è: " + this.tipoMan + ".";
    }
}

const Panigale = new Moto("Ducati", "Panigale", 250, "ADSFA372", "Manubrio basso")

console.log(Panigale.descrizione())


