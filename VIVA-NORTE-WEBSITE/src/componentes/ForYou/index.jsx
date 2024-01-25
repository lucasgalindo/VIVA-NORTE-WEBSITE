import { useState } from 'react';
import Announcement from '../Announcement/announcement';
import './ForYou.css'
import EspecificFilter from '../EspecificFilter';

export default function ForYou() {
    const [clickButtonFilter, setClickButtonFilter] = useState(false);
    const pictures = [
        "https://incorposul.b-cdn.net/wp-content/uploads/2022/07/apartamento-duplex.jpg",
        "https://incorposul.b-cdn.net/wp-content/uploads/2022/07/apartamento-duplex.jpg"
    ];

    const details = {
        bedrooms: 3,
        bathrooms: 2,
        area: 100
    }

    return (
        <section>
            <div className='espacamentoDoTitulo'>
                <div className='tituloSubTitulo'>
                    <h3>Imóveis para você</h3>
                    <p>Dá só uma olhada nas opções de imóveis próximos a sua localização.</p>
                </div>
                <div>
                    <button style={{
                        border: "none",
                        cursor: "pointer",
                        outline: "none",
                        backgroundColor: "transparent",
                    }}  onClick={()=>setClickButtonFilter(true)} >
                        <img src="./imagens/buttonFiltro.png" alt="" />
                    </button>
                </div>
            </div>
            <div className='anuncioForYou'>

            <Announcement
                    id={1}
                    priceCond={300}
                    priceFire={150}
                    priceIPTU={1000}
                    price={390000}
                    name={"Prince Antonio Maia"}
                    description={"Loft Prince Antônio Maia individual com uma área de aprox. 60m² quadrados."}
                    neighborhood={"Tejipio"}
                    city={"Recife"}
                    details={details}
                    address={"Av. Barreto de Menezes"}
                    pictures={pictures}
                />
            <Announcement
                    id={1}
                    priceCond={300}
                    priceFire={150}
                    priceIPTU={1000}
                    price={390000}
                    name={"Prince Antonio Maia"}
                    description={"Loft Prince Antônio Maia individual com uma área de aprox. 60m² quadrados."}
                    neighborhood={"Tejipio"}
                    city={"Recife"}
                    details={details}
                    address={"Av. Barreto de Menezes"}
                    pictures={pictures}
                />
            <Announcement
                    id={1}
                    priceCond={300}
                    priceFire={150}
                    priceIPTU={1000}
                    price={390000}
                    name={"Prince Antonio Maia"}
                    description={"Loft Prince Antônio Maia individual com uma área de aprox. 60m² quadrados."}
                    neighborhood={"Tejipio"}
                    city={"Recife"}
                    details={details}
                    address={"Av. Barreto de Menezes"}
                    pictures={pictures}
                />
            <Announcement
                    id={1}
                    priceCond={300}
                    priceFire={150}
                    priceIPTU={1000}
                    price={390000}
                    name={"Prince Antonio Maia"}
                    description={"Loft Prince Antônio Maia individual com uma área de aprox. 60m² quadrados."}
                    neighborhood={"Tejipio"}
                    city={"Recife"}
                    details={details}
                    address={"Av. Barreto de Menezes"}
                    pictures={pictures}
                />
            <Announcement
                    id={1}
                    priceCond={300}
                    priceFire={150}
                    priceIPTU={1000}
                    price={390000}
                    name={"Prince Antonio Maia"}
                    description={"Loft Prince Antônio Maia individual com uma área de aprox. 60m² quadrados."}
                    neighborhood={"Tejipio"}
                    city={"Recife"}
                    details={details}
                    address={"Av. Barreto de Menezes"}
                    pictures={pictures}
                />
            <Announcement
                    id={1}
                    priceCond={300}
                    priceFire={150}
                    priceIPTU={1000}
                    price={390000}
                    name={"Prince Antonio Maia"}
                    description={"Loft Prince Antônio Maia individual com uma área de aprox. 60m² quadrados."}
                    neighborhood={"Tejipio"}
                    city={"Recife"}
                    details={details}
                    address={"Av. Barreto de Menezes"}
                    pictures={pictures}
                />
                {
                    clickButtonFilter ? <EspecificFilter setClickButtonFilter={setClickButtonFilter}/> : null
                }
            </div>
        </section>
    )
}