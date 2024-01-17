import './PaginaAnuncio.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart as unFavorited} from "@fortawesome/free-regular-svg-icons"
import { faHeart as favorited } from '@fortawesome/free-solid-svg-icons';

export default function PaginaAnuncio() {

    const [favorite, setFavorite] = useState(false);

    const FavoriteAnnouncement = () =>{
        setFavorite(!favorite);
    }
    
    return (
        <section className='secaoGeral'>
            <div className='gapTitulo'>
                <div>
                    <h2> Prince Antônio Maia </h2>
                </div>
                <div className='favoritarAnuncio'>
                    <button onClick={FavoriteAnnouncement} className={`favorite-container ${favorite ? "actived-favorited" : ""}`}>
                    <FontAwesomeIcon icon={ favorite ? favorited : unFavorited} color={favorite ? 'red' : undefined}/>
                    </button>
                    <p>Favoritar</p>
                </div>
            </div>
            <div className='fotosAnuncio'>
                <div className='fotoPrincipal'>
                    <img src="./imagens/fotoTeste.png" alt="foto principal" />
                </div>
                <div className='fotosSecundarias'>
                    <img src="./imagens/fotoTeste2.png" />
                    <img src="./imagens/fotoTeste2.png" />
                    <img src="./imagens/fotoTeste2.png" />
                    <img src="./imagens/fotoTeste2.png" />
                </div>
            </div>
        </section>
    )
}