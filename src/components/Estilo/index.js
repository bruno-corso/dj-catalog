import Artista from '../Artista'
import './Estilo.css'

const Estilo = (props) => {

    return (
        props.listaDeDj.length > 0 ?
            <section className='estilo_vertente' style={{ backgroundImage: `url(./images/${props.background})` }} >
                <div style={{ backgroundImage: `url(./images/${props.background})` }} />
                <h3 >{props.vertente_estilo}</h3>
                <div className='banco_djs'>
                    {props.listaDeDj.map(dj =>
                        <Artista
                            key={dj.nome_artista}
                            nome={dj.nome_artista}
                            nacionalidade={dj.nacionalidade}
                            bandeira={dj.bandeira}
                            link={dj.perfil_soundcloud}
                        />)}
                </div>
            </section>
            : ''
    )
}

export default Estilo