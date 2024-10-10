import './Ropesc.css'
import { useEffect, useState} from 'react'


export default function game(){

    //Logica del gioco

    /*
    Creo una variabile che ricordi la scelta dell'utente e una che ricorda la scelta del computer;
    Creo una variabile che ricordi l'esito calcolato dal programma e una variabile che mi permetterà di utilizzare il popUp 
    */

    const [scelta, setScelta] = useState(null) // useState variabile: inizialmente la scelta non esiste quindi la variabile è vuota

    const [sceltaComputer, setSceltaComputer] = useState(null) // stesso ragionamento per la scelta presa dalla macchina

    const [esito, setEsito] = useState(null) // inizialmente il risultato non esiste

    const [mostraPopUp, setMostraPopUp] = useState(false) // quando switcherò in true il popUp apparirà a schermo

    //Creo le possibili decisione attraverso una lista 

    const decisione = ['Sasso', 'Carta', 'Forbici']
    
    /*
    Creo la funzione che sceglierà randomicamente uno dei tre elementi della lista per il computer 
    Math.random crea delle variabili che possono andare da 0 a 1, all'interno del codice Math.random() * decisione.length significa che sto moltipolicando quell'azione per la lunghezza di elementi della lista decisione, quindi l'operazione prenderà un numero casuale da 0 a 2.
    Math.floor prende il risultato dato da ciò che si trova nella parentesi e lo attribuisce al valore più vicino rispetto il risultato dato.
    */
     
    const randomS = (sceltaUtente) => {
        const sceltaRandom = Math.floor(Math.random() * decisione.length)
        setSceltaComputer(decisione[sceltaRandom])
        setScelta(sceltaUtente)
    }

    /*  useEffect farà partire il controllo delle condizioni accertandosi prima che scelta e sceltaComputer siano valide, condizioneVittoria si riferisce alla scelta fatta dall'utente e useEffect pone le condizioni in base a quella*/ 

    useEffect(() => {
        if (scelta && sceltaComputer) {
            const condizioneVittoria = {
                Sasso: 'Forbici',
                Carta: 'Sasso',
                Forbici: 'Carta',
            }

            if (condizioneVittoria[scelta] == sceltaComputer) {
                setEsito('Hai vinto!')
            }
            else if (scelta == sceltaComputer) {
                setEsito('Pareggio!')
            }
            else {
                setEsito('Hai perso!')
            }
            setMostraPopUp(true)
        }
    }, [scelta, sceltaComputer])// in questo punto sto dicendo a useEffect di ripetersi ogni volta che queste variabili cambiano
       

    //Rendering = ciò che si vedrà a schermo

    /* Nel primo div descrivo tramite la funzione .map il modo in cui i bottoni verrano visualizzati e specifico che il bottone avrà una funzinone onClick che richiamerà la funzione randomS che prenderà come parametro una delle tre scelte fatte dall'utente

    Nel secondo div mostro le scelte prese dall'utente e dal computer

    Nel terzo div faccio apparire l'esito finale della sfida dicendo che se mostraPopUp è true allora posso mostrare l'esito: {mostraPopUp &&}
    */ 

    return (
        <div id="gameId">
            <h1>Sasso-Carta-Forbici!</h1>

            <h2>Scegli</h2>
           
            <div id="divBtn">
                {decisione.map((decisione, index) => (
                    <button key={index} onClick={() => randomS(decisione)} className='sceltaBtn'>{decisione}</button>
                ))}
            </div>

            <div id='esito'>
                <h1>TU: {scelta}</h1>
                <h3>VS</h3>
                <h1>COMPUTER: {sceltaComputer}</h1>
                
            </div>

            {mostraPopUp && (
                <div id='avviso'>
                    <h2>{esito}</h2>
                </div>
            )}

        </div>
    )
}
