import './PaginaAnuncio.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart as unFavorited} from "@fortawesome/free-regular-svg-icons"
import { faHeart as favorited } from '@fortawesome/free-solid-svg-icons';
import Photos from "./components/photos"
import ModalPhotos from '../ModalPhotos/ModalPhotos';
export default function PaginaAnuncio({data}) {

    const [favorite, setFavorite] = useState(false);
    const [showModal, setShowModal] = useState(false);
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
                    <button onClick={FavoriteAnnouncement} className={`favorite-container-pag ${favorite ? "actived-favorited" : ""}`}>
                    <FontAwesomeIcon icon={ favorite ? favorited : unFavorited} color={favorite ? 'red' : undefined}/>
                    </button>
                    <p>Favoritar</p>
                </div>
            </div>
            <div className='fotosAnuncio'>
                <div className='fotoPrincipal'>
                    <img className="main-photo" src={data.pictures[0].url} alt="foto principal" />
                </div>
                <div className='fotosSecundarias'>
                    <Photos setModal={setShowModal} data={data}></Photos>
                    
                </div>
                {
                    showModal ? <ModalPhotos data={data}></ModalPhotos> : null
                }
            </div>
        </section>
    )
}