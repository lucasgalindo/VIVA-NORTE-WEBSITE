import './app.css'
import Header from './componentes/Header'
import ProviderLoginContext from "./context/profile.context"
import PaginaAnuncio from './componentes/PaginaAnuncio'
import Banner from './componentes/Banner' 
import ForYou from './componentes/ForYou'
function App() {
 
  const picturesBanner = [
    './imagens/bannervivanorte.jpg.png',
    './imagens/bannervivanorte.jpg.png',
    './imagens/bannervivanorte.jpg.png'
  ]
  return (
    <ProviderLoginContext>
      <div className='container'>
      <Header/>
      <Banner pictures={picturesBanner}></Banner>
      <ForYou/>
      </div>

    </ProviderLoginContext>
  )
}

export default App
