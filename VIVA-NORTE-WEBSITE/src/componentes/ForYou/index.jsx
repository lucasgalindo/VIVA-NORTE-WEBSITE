import Announcement from '../Announcement/announcement';
import './ForYou.css'

export default function ForYou() {

    const pictures = [
        "https://incorposul.b-cdn.net/wp-content/uploads/2022/07/apartamento-duplex.jpg",
        "https://incorposul.b-cdn.net/wp-content/uploads/2022/07/apartamento-duplex.jpg"
    ];

    return (
        <section>
            <div className='espacamentoDoTitulo'>
                <div className='tituloSubTitulo'>
                    <h3>Imóveis para você</h3>
                    <p>Dá só uma olhada nas opções de imóveis próximos a sua localização.</p>
                </div>
                <div>
                    <a href="">
                        <img src="./imagens/buttonFiltro.png" alt="" />
                    </a>
                </div>
            </div>
            <div className='anuncioForYou'>

                <Announcement
                    priceCond={300}
                    priceFire={150}
                    priceIPTU={1000}
                    price={390000}
                    name={"Prince Antonio Maia"}
                    description={"Loft Prince Antônio Maia individual com uma área de aprox. 60m² quadrados."}
                    neighborhood={"Penis"}
                    city={"Recife"}
                    address={"Av. Meu pau na bunda de Quem ta lendo"}
                    pictures={pictures}
                />
                <Announcement
                    priceCond={300}
                    priceFire={150}
                    priceIPTU={1000}
                    price={390000}
                    name={"Prince Antonio Maia"}
                    description={"Loft Prince Antônio Maia individual com uma área de aprox. 60m² quadrados."}
                    neighborhood={"Penis"}
                    city={"Recife"}
                    address={"Av. Meu pau na bunda de Quem ta lendo"}
                    pictures={pictures}
                />
                <Announcement
                    priceCond={300}
                    priceFire={150}
                    priceIPTU={1000}
                    price={390000}
                    name={"Prince Antonio Maia"}
                    description={"Loft Prince Antônio Maia individual com uma área de aprox. 60m² quadrados."}
                    neighborhood={"Penis"}
                    city={"Recife"}
                    address={"Av. Meu pau na bunda de Quem ta lendo"}
                    pictures={pictures}
                />
                <Announcement
                    priceCond={300}
                    priceFire={150}
                    priceIPTU={1000}
                    price={390000}
                    name={"Prince Antonio Maia"}
                    description={"Loft Prince Antônio Maia individual com uma área de aprox. 60m² quadrados."}
                    neighborhood={"Penis"}
                    city={"Recife"}
                    address={"Av. Meu pau na bunda de Quem ta lendo"}
                    pictures={pictures}
                />
                <Announcement
                    priceCond={300}
                    priceFire={150}
                    priceIPTU={1000}
                    price={390000}
                    name={"Prince Antonio Maia"}
                    description={"Loft Prince Antônio Maia individual com uma área de aprox. 60m² quadrados."}
                    neighborhood={"Penis"}
                    city={"Recife"}
                    address={"Av. Meu pau na bunda de Quem ta lendo"}
                    pictures={pictures}
                />

            </div>
        </section>
    )
}