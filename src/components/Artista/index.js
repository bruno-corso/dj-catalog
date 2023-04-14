import './Artista.css'

const Artista = ({ nome, nacionalidade, bandeira, link }) => {
    return (
        <div className='artista'>
            <div className='dj'>
                <h4>{nome}</h4>
                <img
                    src={`https://flagcdn.com/${bandeira}.svg`}
                    alt={nacionalidade}
                />
                <p>{nacionalidade}</p>
                <a href={link}>{nome} Soundcloud</a>
            </div>
        </div>

    )
}

export default Artista