import "./ListaSelecao.css";

const ListaSelecao = (props) => {
    return (
        <div className="lista-selecao">
            <label>{props.label}</label>
            <select  required={props.obrigatorio} onChange={e => props.aoAlterado(e.target.value)} value={props.value}>
                {props.itens.map(item => <option key={item} >{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSelecao
