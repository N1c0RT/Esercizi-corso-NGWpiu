import './University.css'
import { useEffect, useState } from 'react'


export default function University(){
//domains e statequalcosa non si prendono

    const[universities, setUniversities] = useState([])//creiamo uno spazio per mettere tutti i dati fornitoci dall'API

    const[nomeUni, setNomeUni] = useState('')

    useEffect(() => {

        
        
        fetch("http://universities.hipolabs.com/search?country=United+States")

            .then((response) => response.json()) // Riportiamo i dati forniti in formato json

            .then((info) => {

                setNomeUni(info.name)
                console.log(info)
                setUniversities(info)

            })

            .catch((error) => {
                console.error(error)
            })

            .finally(() => {
                
            })

    }, [])

    return (
        <div id="university">
          <table id="tabellaUni">
            <thead>
              <tr>
                <th>Paese</th>
                <th>Nome</th>
                <th>Pagina web</th>
              </tr>
            </thead>
            <tbody>
              {universities.map((el) => (
                <tr>
                  <td>{el.country}</td>
                  <td id='name'>{el.name}</td>
                  <td id='webP'><a href={el.web_pages[0]} target='_blank'>{el.web_pages[0]}</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}

/*Target _blank mi apre la pagina su un'altra scheda, per scrivere correttamente il link bisogna mettere tutto il contenuto del td in un tag <a> quindi: <td> <a href="url del sito (in questo caso non servivano le parentesi poichè l'url lo prendiamo direttamente dalla proprietà el.web_pages)"> tutto quello che c'è da mettere </a> </td>*/