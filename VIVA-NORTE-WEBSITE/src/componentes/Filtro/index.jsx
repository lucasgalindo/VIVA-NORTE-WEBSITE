import './Filtro.css'

export default function Filter () {
    return (

        <section className='containerFiltros'>
            <a href="" className='linkFiltro'>
                <div className='filtroCentral'>

                    <div className='filtroTipoImovel'>
                        <h3>Qual</h3>
                        <p>Selecione o tipo de imóvel</p>
                    </div>
                    <div className='filtroLoc'>
                        <img src="./imagens/locIcon.png" alt="" />
                        <div className='textForLeft'>
                            <h3>Onde</h3>
                            <p>Selecione o local</p>
                        </div>
                    </div>
                    <div className='filtroTipoValor'>
                        <img src="./imagens/iconValor.png" alt="" />
                        <div className='textForLeft'>
                            <h3>Quanto</h3>
                            <p>Selecione o valor</p>
                        </div>
                    </div>
                    <img src="./imagens/filtroDeBusca.png" />
                </div>
            </a>
        </section>

    )
}