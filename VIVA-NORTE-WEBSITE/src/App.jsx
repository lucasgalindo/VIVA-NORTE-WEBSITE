import './app.css'
import Banner from './componentes/Banner'
import Header from './componentes/Header'
import Announcement from "./componentes/Announcement/announcement"
import ProviderLoginContext, { LoginContext } from "./context/profile.context"
import ModalLogin from './componentes/ModalLogin'
import { useContext } from 'react'

function App() {


  const pictures = [
    "https://incorposul.b-cdn.net/wp-content/uploads/2022/07/apartamento-duplex.jpg",
    "https://incorposul.b-cdn.net/wp-content/uploads/2022/07/apartamento-duplex.jpg"
  ];
  const details = {
    bedrooms: 3,
    bathrooms: 2,
    area: 100,
  }

  return (
    <ProviderLoginContext>
      <div className='container'>
        
        <Header />
        <Banner />
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: "wrap",
          gap: 23
        }}>
          <Announcement details={details} priceCond={300} priceFire={150} priceIPTU={1000} price={390000} name={"Prince Antonio Maia"} description={"Loft Prince Antônio Maia individual com uma área de aprox. 60m² quadrados."} neighborhood={"Penis"} city={"Recife"} address={"Av. Meu pau na bunda de Quem ta lendo"} pictures={pictures} />
          <Announcement details={details} priceCond={300} priceFire={150} priceIPTU={1000} price={390000} name={"Prince Antonio Maia"} description={"Loft Prince Antônio Maia individual com uma área de aprox. 60m² quadrados."} neighborhood={"Penis"} city={"Recife"} address={"Av. Meu pau na bunda de Quem ta lendo"} pictures={pictures} />
          <Announcement details={details} priceCond={300} priceFire={150} priceIPTU={1000} price={390000} name={"Prince Antonio Maia"} description={"Loft Prince Antônio Maia individual com uma área de aprox. 60m² quadrados."} neighborhood={"Penis"} city={"Recife"} address={"Av. Meu pau na bunda de Quem ta lendo"} pictures={pictures} />
          <Announcement details={details} priceCond={300} priceFire={150} priceIPTU={1000} price={390000} name={"Prince Antonio Maia"} description={"Loft Prince Antônio Maia individual com uma área de aprox. 60m² quadrados."} neighborhood={"Penis"} city={"Recife"} address={"Av. Meu pau na bunda de Quem ta lendo"} pictures={pictures} />
          <Announcement details={details} priceCond={300} priceFire={150} priceIPTU={1000} price={390000} name={"Prince Antonio Maia"} description={"Loft Prince Antônio Maia individual com uma área de aprox. 60m² quadrados."} neighborhood={"Penis"} city={"Recife"} address={"Av. Meu pau na bunda de Quem ta lendo"} pictures={pictures} />
          <Announcement details={details} priceCond={300} priceFire={150} priceIPTU={1000} price={390000} name={"Prince Antonio Maia"} description={"Loft Prince Antônio Maia individual com uma área de aprox. 60m² quadrados."} neighborhood={"Penis"} city={"Recife"} address={"Av. Meu pau na bunda de Quem ta lendo"} pictures={pictures} />
          <Announcement details={details} priceCond={300} priceFire={150} priceIPTU={1000} price={390000} name={"Prince Antonio Maia"} description={"Loft Prince Antônio Maia individual com uma área de aprox. 60m² quadrados."} neighborhood={"Penis"} city={"Recife"} address={"Av. Meu pau na bunda de Quem ta lendo"} pictures={pictures} />
          <Announcement details={details} priceCond={300} priceFire={150} priceIPTU={1000} price={390000} name={"Prince Antonio Maia"} description={"Loft Prince Antônio Maia individual com uma área de aprox. 60m² quadrados."} neighborhood={"Penis"} city={"Recife"} address={"Av. Meu pau na bunda de Quem ta lendo"} pictures={pictures} />
          <Announcement details={details} priceCond={300} priceFire={150} priceIPTU={1000} price={390000} name={"Prince Antonio Maia"} description={"Loft Prince Antônio Maia individual com uma área de aprox. 60m² quadrados."} neighborhood={"Penis"} city={"Recife"} address={"Av. Meu pau na bunda de Quem ta lendo"} pictures={pictures} />
          <Announcement details={details} priceCond={300} priceFire={150} priceIPTU={1000} price={390000} name={"Prince Antonio Maia"} description={"Loft Prince Antônio Maia individual com uma área de aprox. 60m² quadrados."} neighborhood={"Penis"} city={"Recife"} address={"Av. Meu pau na bunda de Quem ta lendo"} pictures={pictures} />
        </div>
      </div>
    </ProviderLoginContext>
  )
}

export default App
