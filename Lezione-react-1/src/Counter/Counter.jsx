import { useEffect, useState} from 'react'
import './Counter.css'

export default function counter(){ //Componente

    //Logica

    const [count, setCount] = useState(0) // useState variabile 
    const [showPopUp, setShowPopUp] = useState(false)

    const add = () => {
        setCount(count + 1)
    }

    const min = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
    }

    useEffect(() => {
        if (count < 0) {
            setCount(0)
            setShowPopUp(true) // showPopUp == true
        }
        if (count > 0) {
            setShowPopUp(false)
        }
    }, [count])

    //Render

    return (
        <div className="counter">
            <h1>{count}</h1>
           
            <div className="btns">
                <button onClick={() => add()}>+</button>
                <button onClick={() => min()}>-</button>
                <button onClick={() => reset()}>Reset</button>
            </div>

            {showPopUp && (
                <div>
                    <h1>Errore</h1>
                </div>

            )}

           
        </div>
    )
}