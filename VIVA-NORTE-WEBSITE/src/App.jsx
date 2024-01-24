import './app.css'
import CaracteristicasImovel from './componentes/CaracteristicasImovel'
import Header from './componentes/Header'
import PaginaAnuncio from './componentes/PaginaAnuncio'
import TituloPagAnun from './componentes/TituloPagAnun'
function App() {
 
  const picturesBanner = [
    './imagens/bannervivanorte.jpg.png',
    './imagens/bannervivanorte.jpg.png'
  ]


  return (
    <>
      <div className='container'>
      <Header/>
      <PaginaAnuncio/>
      <TituloPagAnun />
      <CaracteristicasImovel/>
      </div>
    </>
  )
}

export default App
