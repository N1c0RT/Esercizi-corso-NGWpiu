import { useEffect, useState } from 'react'
import './Bitcoin.css'




export default function Bitcoin(){

    const[usd, setUsd] = useState(null)
    const[eur, setEur] = useState(null)
    const[gbp, setGbp] = useState(null)
    

    useEffect(() => {
        fetch("https://api.coindesk.com/v1/bpi/currentprice.json")

            .then((response) => response.json())

            .then((data) => {

                setUsd(data.bpi.USD.rate)
                setEur(data.bpi.EUR.rate)
                setGbp(data.bpi.GBP.rate)

            })

            .catch((error) => {
                console.error(error)
            })

            .finally(() => {
                
            })

    }, [])

    return(
        
        <div id="bitcoin">
            <div id="inner">
                <div className="value">
                    <h2>$ {usd}</h2>
                    <span>USD</span>
                </div>
                <div className="value">
                    <h2>€ {eur}</h2>
                    <span>EUR</span>
                </div>
                <div className="value">
                    <h2>£ {gbp}</h2>
                    <span>GBP</span>
                </div>
            </div>
        </div>
    )

}