const button = document.querySelector("button")! 
const input1 = document.getElementById("num1")! as HTMLInputElement 
const input2 = document.getElementById("num2")! as HTMLInputElement
//const input3 = document.getElementById("num2")! as HTMLInputElement

enum Ruolo{
    ADMIN,
    USER,
    CUSTOMER,
} //Serve a definire un nuovo tipo di dato

let persona1: {

    nome: string,
    cognome: string,
    anni: number,
    sport: string[],
    appunti: [string, number],
    ruolo: Ruolo,

} = {

    nome: "Paolo",
    cognome: "Rossi",
    anni: 20,
    sport: ["basket", "calcio"],
    appunti: ["appunto1", 1],
    ruolo: Ruolo.ADMIN
}

if(persona1.ruolo === Ruolo.ADMIN){
    console.log("Sei amministratore")
}

let nomeNumero: string | number | boolean; //posso attribuire a nomeNumero un valore che rientra tra questi

nomeNumero = 5

type numeroTesto = number | string
type Conversione = "come-numero" | "come-testo"

function combinatore(input1: numeroTesto, input2: numeroTesto, conversion: Conversione ): number | string {

    let result: number | string;

    if(conversion == "come-numero"){
        result = +input1 + +input2
    } 
    else if(conversion == "come-testo") {
        result = input1 + " " + input2
    }
    else {
        throw new Error("Valore non valido")
    }

    return result 
}

button.addEventListener("click", function() {
    console.log(combinatore(input1.value, input2.value, "come-numero"))
})