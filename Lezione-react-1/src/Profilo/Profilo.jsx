import './Profilo.css'
import { useEffect, useState } from 'react'


export default function profilo() {

        const[username, setUsername] = useState('')
        const[nomefirst, setNomeFirst] = useState('')
        const[nomeLast, setNomeLast] = useState('')
        const[country, setCountry] = useState('')
        const[email, setEmail] = useState('')
        const[date, setDate] = useState('')
        const[cell, setCell] = useState('')
        const[picture, setPicture] = useState('')
        const[registration, setRegistration] = useState('')
    
        useEffect(() => {
    
            fetch("https://randomuser.me/api/")
    
                .then((response) => response.json()) // Riportiamo i dati forniti in formato json
    
                //riportiamo tutti i dati che ci servono negli elementi creati

                .then((oggettoApi) => {

                    setUsername(oggettoApi.results[0].login.username)

                    setNomeFirst(oggettoApi.results[0].name.first)

                    setNomeLast(oggettoApi.results[0].name.last)

                    setCountry(oggettoApi.results[0].location.country)

                    setEmail(oggettoApi.results[0].email)

                    //Voglio cambiare il formato della data
                    /*Prenderò in questo modo la proprietà che mi serve      dall'array datomi dall'API, in questo modo potrò      modificarla*/

                    const dateString = oggettoApi.results[0].dob.date

                    //Creo una nuova variabile che trasformi il valore stringa (che è una data) in un nuovo oggetto 

                    const dateObject = new Date(dateString)

                    //Decido il formato che si dovrà visualizzare tramite una variabile che andrà a cambiare il dateObject
                    const formattedDate = dateObject.toLocaleDateString('it-IT')

                    //Setto il nuovo valore nel campo setDate

                    setDate(formattedDate)

                    setCell(oggettoApi.results[0].cell)

                    setPicture(oggettoApi.results[0].picture.medium)

                    //Farò lo stesso procedimento della data di nascita per la registrazione
                    
                    const registrationString = oggettoApi.results[0].registered.date
                    
                    const registrationObject = new Date(registrationString)

                    const formattedRegistration = registrationObject.toLocaleDateString('it-IT')

                    setRegistration(formattedRegistration)
    
                })
    
                .catch((error) => {
                    console.error(error)
                })
    
                .finally(() => {
                    
                })
    
        }, [])
    
        //Non ha senso creare una map siccome il profilo creato sarà sempre e solo uno
        return (
            <div id='assoluto'>

                <img src={picture} alt="non disponibile" id='immagine'/>

                <div id='nome'>
                    <h1>{nomefirst} {nomeLast}</h1>
                </div>

                <div id="interazioni">
                        <h2 className='riquadri'>Followers</h2>
                        <h2 className='riquadri'>Following</h2>
                        <h2 className='riquadri'>Request</h2>
                </div>

                <div className='generico'>
                    <h3>{username}</h3>
                </div>

                <div className='generico'>
                    <h3>Anno di nascita: {date}</h3>
                </div>

                <div className='generico'> 
                    <h3>Country: {country}</h3>
                </div>

                <div className='generico'>
                    <h3>E-mail: {email}</h3>
                </div>

                <div className='generico'>
                    <h3>Cell: {cell.toString()}</h3>
                </div>

                <div className='generico' id='join'>
                    <p>Joined on {registration}</p>
                </div>

                </div>
        )
    }
    