import Banner from "../componentes/Banner"
import ForYou from "../componentes/ForYou"
import Header from "../componentes/Header"


export default function HomePage() {
    
  const picturesBanner = [
    './imagens/bannervivanorte.jpg.png',
    './imagens/bannervivanorte.jpg.png',
    './imagens/bannervivanorte.jpg.png'
  ]
    return (
        <>
            <Header />
            <Banner pictures={picturesBanner}></Banner>
            <ForYou />
        </>
    )
}