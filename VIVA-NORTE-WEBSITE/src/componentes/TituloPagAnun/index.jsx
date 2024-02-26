import './TituloPagAnun.css'

export default function TituloPagAnun({data}){

    const PTReal = new Intl.NumberFormat(
        "pt-BR", {
        style: "currency",
        currency: "BRL"
    })

    return(
        <section className='paddingPag'>
            <div className='descricao'>
                <div className='tituloPagina'>
                    <h3> {data.announcement.adress} </h3>
                    <p> Apartamento ampla e moderna com projeto de paisagismo, projeto arquitetônico e alto padrão de acabamentos </p>
                    <div className='valoresAnuncioRow'> 
                    <div className='alinharItens'>
                        <img src="../../../public/imagens/tamanhoM2.png"/>
                        <p> {data.announcement.area} m² </p>
                    </div>
                    <div className='alinharItens'>
                        <img src="../../../public/imagens/quantQuartos.png"/> 
                        <p>{data.announcement.num_rooms} Quartos</p>
                    </div>
                    <div className='alinharItens'>
                        <img src="../../../public/imagens/quantBanheiros.png"/>
                        <p>{data.announcement.num_banheiros} Banheiros</p>
                    </div>
                    <div className='alinharItens'>
                        <img src="../../../public/imagens/quantGaragem.png"/>
                        <p>{data.announcement.num_garage_space} Garagem</p>
                    </div>
                    </div>
                </div>
                <div className='valoresAnuncio'>
                    <h3>{PTReal.format(data.announcement.price)}</h3>
                    <p>Condomínio R${200} | IPTU R${1000} | <img src="./imagens/Extintor.png" alt="" /> R$80</p>                  
                </div>
            </div>
            <div>

            </div>
        </section>
    )
}