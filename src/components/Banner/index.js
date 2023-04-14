import './Banner.css'

const Banner = (props) => {
    return (
        <div className='banner' >
            <img src='/images/banner1.png' alt='banner com imagem festival Ozora' />
            <h1>{props.nome}</h1>
            <p>** Psytrance **</p>
        </div>
    )
}

export default Banner