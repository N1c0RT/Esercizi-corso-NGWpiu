import './CardDeck.css'


const API = [
    {
      "id": 0,
      "title": "Titolo1",
      "icon": "X",
      "maininfo": "13.000",
      "description": "rispetto a ieri",
    },
    {
      "id": 1,
      "title": "Titolo2",
      "icon": "X",
      "maininfo": "16.000",
      "description": "rispetto a ieri",
    },
    {
      "id": 2,
      "title": "Titolo3",
      "icon": "X",
      "maininfo": "18.000",
      "description": "rispetto a ieri",
    },
    {
      "id": 3,
      "title": "Titolo4",
      "icon": "X",
      "maininfo": "1.000",
      "description": "rispetto a ieri",
    }
  ]

export default function CardDeck() {

 
    let data = API;
 
    return (
        <>
        <div className="card-deck">
            {data.map((el) => (
                <div key={el.id} className='singleCard'>
                <h1>{el.title}</h1>
                <div>{el.icon}</div>
                <h2>{el.maininfo}</h2>
                <p>{el.description}</p>
                </div>
            ))}
        </div>
        </>
    )
}