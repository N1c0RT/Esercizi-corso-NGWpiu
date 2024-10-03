/*function ripetiFrase(){

let input = parseInt(prompt("Inserisci un numero per stampare tot volte la frase 'Ciao mondo!'"))
console.log(input)

for (i = 0; i < input; i++){
 console.log("Ciao mondo!")
}

}

//Seconda funzione

function loopInfinito(){

    let j = 1


    while (j > 0){

        let richiesta = prompt("Riprova")

        if (richiesta == "ESCI"){
            break
        }


    }

}*/


//Terza funzione

function aggiuntaLista(){

    let k = 1 
        let listaSpesa = []

        while (k > 0){

            let richiesta = prompt("Aggiungi un altro prodotto.")

            listaSpesa.push(richiesta)

            console.log(listaSpesa)

            alert("Prodotto aggiunto con successo alla lista!")

            let nuovaRichiesta = prompt("Desideri aggiungere altro?")

            if (nuovaRichiesta == "Si"){

                let richiesta = prompt("Aggiungi un altro prodotto.")

                listaSpesa.push(richiesta)

                console.log(listaSpesa)

                alert("Prodotto aggiunto con successo alla lista!")

            }

            else if (nuovaRichiesta == "Esci"){

                alert("Lista chiusa con successo")
                break

            }

            else {
                alert("Comando non riconosciuto")
            }


}

}