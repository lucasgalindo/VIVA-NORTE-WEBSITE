import './PaginaAnuncio.css'
import { useContext, useEffect, useReducer, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart as unFavorited} from "@fortawesome/free-regular-svg-icons"
import { faHeart as favorited } from '@fortawesome/free-solid-svg-icons';
import Photos from "./components/photos"
import ModalPhotos from '../ModalPhotos/ModalPhotos';
import { LoginContext } from '../../context/profile.context';
import { Reducer_Favorites } from '../../Reducer/AddNewFavorite';
export default function PaginaAnuncio({data}) {
    const {credentials, setCredentials} = useContext(LoginContext)
    const [dataCredentials, setDataCredentials] = useState(credentials);
    const [state, dispatch] = useReducer(Reducer_Favorites, {credentials: dataCredentials, setCredentials: setDataCredentials})
    const [favorite, setFavorite] = useState(credentials.favorites.includes(data['announcement'].id_announcement));
    const [showModal, setShowModal] = useState(false);

    
    useEffect(()=>{
        setCredentials(dataCredentials);
    }, [dataCredentials.favorites])


    const FavoriteAnnouncement = () =>{
        if(favorite){
            dispatch({type: "remove", payload: data.announcement.id_announcement})
        }
        else{
            dispatch({type: "add", payload: data.announcement.id_announcement})
        }
        setFavorite(!favorite)
    }
    
    return (
        <section className='secaoGeral'>
            <div className='gapTitulo'>
                <div>
                    <h2> Prince Antônio Maia </h2>
                </div>
                <div className='favoritarAnuncio'>
                    <button onClick={FavoriteAnnouncement} className={`favorite-container-pag ${favorite ? "actived-favorited" : ""}`}>
                    <FontAwesomeIcon icon={ dataCredentials.favorites.includes(data['announcement'].id_announcement) ? favorited : unFavorited} color={dataCredentials.favorites.includes(data['announcement'].id_announcement) ? 'red' : undefined}/>
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
                    showModal ? <ModalPhotos setModal={setShowModal} data={data}></ModalPhotos> : null
                }
            </div>
        </section>
    )
}