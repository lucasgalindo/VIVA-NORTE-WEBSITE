import './app.css'
import Header from './componentes/Header'
import PaginaAnuncio from './componentes/PaginaAnuncio'
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
      </div>
    </>
  )
}

export default App
