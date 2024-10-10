import './Card.css'

export default function card ({title, icon, maininfo, description}){

    return(
        <div id='cardID'>
            <div className='title'>
                <h1>{title}</h1>
            </div>
            <div className='icon'>
                {icon}
            </div>

            <div className='main-info'>
                <h2>{maininfo}</h2>
            </div>

            <div className='description'>
                <h3>{description}</h3>
            </div>
        </div>
    )
}