import './TituloPagAnun.css'

export default function TituloPagAnun(){
    return(
        <section className='paddingPag'>
            <div className='descricao'>
                <div className='tituloPagina'>
                    <h3> Apartamento Av. Conselheiro Rosa e Silva, Graças, Recife-PE </h3>
                    <p> Apartamento ampla e moderna com projeto de paisagismo, projeto arquitetônico e alto padrão de acabamentos </p>
                    <div className='valoresAnuncioRow'> 
                    <div className='alinharItens'>
                        <img src="./imagens/tamanhoM2.png"/>
                        <p> 60m² </p>
                    </div>
                    <div className='alinharItens'>
                        <img src="./imagens/quantQuartos.png"/> 
                        <p>3 Quartos</p>
                    </div>
                    <div className='alinharItens'>
                        <img src="./imagens/quantBanheiros.png"/>
                        <p>3 Banheiros</p>
                    </div>
                    <div className='alinharItens'>
                        <img src="./imagens/quantGaragem.png"/>
                        <p>1 Garagem</p>
                    </div>
                    </div>
                </div>
                <div className='valoresAnuncio'>
                    <h3>R$390.000</h3>
                    <p>Condomínio R$1000 | IPTU R$150 | <img src="./imagens/Extintor.png" alt="" /> R$80</p>                  
                </div>
            </div>
            <div>

            </div>
        </section>
    )
}