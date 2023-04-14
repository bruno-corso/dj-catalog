import './Formulario.css'
import CampoTexto from '../CampoTexto'
import Botao from '../Botao'
import ListaSelecao from '../ListaSelecao'
import { useState } from "react";


const Formulario = (props) => {

    const envioFormulario = (e) => {
        e.preventDefault();
        var pais = props.ArrayPaises.find(pais => pais.name === nacionalidade);
        var bandeira = pais.abbreviation.toLowerCase();
        props.incluirNovoDj({
            nome_artista,
            estilo_vertente,
            nacionalidade,
            bandeira,
            perfil_soundcloud
        })
        setNome_artista('');
        setEstilo_vertente('');
        setNacionalidade('');
        setPerfil_soundcloud('');
    }

    const [nome_artista, setNome_artista] = useState('');
    const [estilo_vertente, setEstilo_vertente] = useState('');
    const [nacionalidade, setNacionalidade] = useState('');
    const [perfil_soundcloud, setPerfil_soundcloud] = useState('');

    return (
        <section className='formulario' >
            <h2>Enter your favorites DJs below and create your Catalog</h2>
            <form onSubmit={envioFormulario} >
                <CampoTexto
                    valor={nome_artista}
                    obrigatorio={true}
                    label="Artist Name"
                    placeholder="Type something"
                    aoAlterado={event => setNome_artista(event)}
                />
                <ListaSelecao
                    value={estilo_vertente}
                    obrigatorio={true}
                    label="Style"
                    itens={props.listaDeVertentes}
                    aoAlterado={value => setEstilo_vertente(value)}
                />
                <ListaSelecao
                    value={nacionalidade}
                    obrigatorio={true}
                    label="Country"
                    itens={props.listaDeNomePais}
                    nacionalidade={props.listaDeAbreviacaoPais}
                    aoAlterado={value => setNacionalidade(value)}
                />
                <CampoTexto
                    valor={perfil_soundcloud}
                    obrigatorio={true}
                    label="Soundcloud Profile (link)"
                    placeholder="Type something"
                    aoAlterado={event => setPerfil_soundcloud(event)}
                />
                <Botao>
                    Done
                </Botao>
            </form>
        </section>
    )
}

export default Formulario