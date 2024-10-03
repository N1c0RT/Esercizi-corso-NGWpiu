

function programmaSpesa(){

    let k = 1 
    let listaSpesa = []

    while (k > 0){

        let richiesta = prompt("Aggiungi un altro prodotto.")

        listaSpesa.push(richiesta)

        console.log(listaSpesa)

        alert("Prodotto aggiunto con successo alla lista!")

        let nuovaRichiesta = prompt("Desideri fare altro?")

            //Creazione dello switch

        switch(nuovaRichiesta){

                //Inizio a creare le varie possibilità tramite i case

                //definisco i diversi esiti in base a quale sarà il valore di nuovaRichiesta

            case "Aggiungi":

                let richiesta = prompt("Aggiungi un altro prodotto.")

                listaSpesa.push(richiesta)

                console.log(listaSpesa)

                alert("Prodotto aggiunto con successo alla lista!");

            case "Elimina":

                let richiestaEliminazione = prompt("Sei sicuro di eliminare l'ultimo prodotto?")

                if (richiestaEliminazione == "Si"){

                listaSpesa.pop()

                console.log(listaSpesa)

                alert("Prodotto eliminato dalla lista.")

                }

                else() => {
                    let nuovaRichiesta = prompt("Desideri fare altro?")
                };
      

            case "Esci":

                alert("Lista chiusa con successo")
                break;

            default:
                alert("Comando non riconosciuto");

        }

    }
}