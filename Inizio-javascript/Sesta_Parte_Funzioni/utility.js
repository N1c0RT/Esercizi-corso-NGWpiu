//Lista di numeri che andranno sommati in INPUT e risultato in OUTPUT
//Per creare una funzione i requisiti vengono definiti parametri mentre qunado richiamo una funzione quelli che dò in pasto al codice si definiscono argomenti

function sommaLista(lista){

    let risultato = 0

    for (let i = 0; i<lista.length; i++){
        risultato = risultato + lista[i]
    }

    console.log(risultato) //stampiamo il risultato sulla console
    return risultato //salviamo il valore in uscita
    
}


/*PERCHÈ USIAMO LE FUNZIONI?
Ci sono 4 motivi principali:
MODULARITÀ: suddividiamo il codice in blocchi riutilizzabili
ORGANIZZAZIONE: organizzano il codice in modo piu chiaro
RIDUZIONE DI DUPLICAZIONE
ASTRAZIONE                */
