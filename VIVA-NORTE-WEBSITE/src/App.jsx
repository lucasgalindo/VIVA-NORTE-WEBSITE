import './app.css'
import Banner from './componentes/Banner'
import Header from './componentes/Header'
import Announcement from "./componentes/Announcement/announcement"
function App() {
 


  const pictures = [
    "https://incorposul.b-cdn.net/wp-content/uploads/2022/07/apartamento-duplex.jpg",
    "https://incorposul.b-cdn.net/wp-content/uploads/2022/07/apartamento-duplex.jpg"
  ];
  return (
    <>
      <div className='container'>
      <Header/>
      <Banner/>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: "wrap",
        gap: 23
      }}>
      <Announcement priceCond={300} priceFire={150}priceIPTU={1000} price={390000} name={"Prince Antonio Maia"} description={"Loft Prince Antônio Maia individual com uma área de aprox. 60m² quadrados."} neighborhood={"Penis"} city={"Recife"} address={"Av. Meu pau na bunda de Quem ta lendo"} pictures={pictures} />
      </div>
      </div>
    </>
  )
}

export default App
