import "./CampoTexto.css"


const CampoTexto = (props) => {

    const aoDigitado = (e) => {
        props.aoAlterado(e.target.value)
    }

    const placeHolderEdit = `${props.placeholder}...`;

    return(
        <div className="campo-texto" >
            <label >
                {props.label}
            </label>
            <input value={props.valor} required={props.obrigatorio} onChange={aoDigitado} type="text" placeholder={placeHolderEdit}/>
        </div>
    )
}

export default CampoTexto;