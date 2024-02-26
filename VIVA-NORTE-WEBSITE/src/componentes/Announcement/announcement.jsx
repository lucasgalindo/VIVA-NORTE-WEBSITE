import { useContext, useEffect, useLayoutEffect, useReducer, useState } from 'react';
import './announcement.css'
import location from "./../../../public/location.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as unFavorited } from "@fortawesome/free-regular-svg-icons"
import { faHeart as favorited } from '@fortawesome/free-solid-svg-icons';
import { faFireExtinguisher } from '@fortawesome/free-solid-svg-icons';
import { Navigate, useNavigate } from 'react-router-dom';
import { LoginContext } from '../../context/profile.context';
import { Reducer_Favorites } from '../../Reducer/AddNewFavorite';


export default function Announcement({details, id, priceFire, priceIPTU, priceCond, price, name, description, pictures, address, neighborhood, city }) {
    const [diffence, setDifference] = useState(10);
    const [circles, setCircles] = useState([]);
    const {credentials, setCredentials} = useContext(LoginContext)
    const [data, setData] = useState(credentials);
    const [state, dispatch] = useReducer(Reducer_Favorites, {credentials: data, setCredentials: setData})
    const [favorite, setFavorite] = useState(credentials.favorites.includes(id));



    const PTReal = new Intl.NumberFormat(
        "pt-BR", {
        style: "currency",
        currency: "BRL"
    }
    )
    useLayoutEffect(() => {
        let aux = []
        pictures.forEach(element => {
            if (aux.length === 0) {
                aux.push("white")
            }
            else {
                aux.push("transparent")
            }
        })
        setCircles(aux);
    }, [])
    

    useEffect(()=>{
        console.log(data)
        setCredentials(data);
    }, [data])

    const FavoriteAnnouncement = () => {

        if(favorite){
            dispatch({type: "remove", payload: id})
        }
        else{
            dispatch({type: "add", payload: id})
        }
        setFavorite(!favorite)
        
    }

    const ChangeImageToLeft = (size, key) => {
        const initial = 10;
        circles.forEach((circle, index) => {
            if (index != key) {
                circles[index] = "transparent";
            }
            else {
                circles[index] = "white";
            }
        })
        setDifference(initial - size);
    }
    const navigate = useNavigate();
    return (
        <div className="annoucement-container">
            <div className='info-container-announcement'>
                <div className='first-div-span'>
                    <img src={location} style={{ width: 17 }} alt="" />
                    <span className='span-info-adress'>{neighborhood}, {city}</span>
                </div>
                <span style={{
                    fontWeight: 500
                }}>{address}</span>
            </div>
            <button onClick={FavoriteAnnouncement} className={`favorite-container ${favorite ? "actived-favorited" : ""}`}>
                <FontAwesomeIcon icon={favorite ? favorited : unFavorited} color={favorite ? 'red' : undefined} />
            </button>
            <div style={{ left: diffence }} className='container-slide-photos'>
                {
                    pictures.map((photo, key) => {
                        return (
                            <img src={photo} key={key} className='annoucement-image' alt="" />
                        )
                    })
                }

            </div>
            <div className="circles-container">
                {

                    circles.map((element, key) => {
                        const size = key * 423;
                        return (
                            <div onClick={(e) => ChangeImageToLeft(size, key)} style={{ backgroundColor: circles[key] }} key={key} className="announcement-circles"></div>
                        )
                    })
                }
            </div>
            <span style={{cursor: "pointer"}} onClick={()=>{
                    navigate(`/anuncio/${id}`)
                }} className='announcement-name-apt'>{name}</span>
            <span className='announcement-description-apt'>{description}</span>
            <span className="announcement-price-apt">{PTReal.format(price)}</span>
            <div className='announcement-prices'>
                <span>Cond {PTReal.format(priceCond)} </span>
                <span>| IPTU {PTReal.format(priceIPTU)} </span>
                <span>| <FontAwesomeIcon icon={faFireExtinguisher} /> {PTReal.format(priceFire)}</span>
            </div>


            <div className='details-announcement'>
                <div>
                    <img src="./bed.png" width={16} alt="" />
                    <span>{details.bedrooms} Quartos</span>
                </div>
                <div>
                    <img src="./shower.png" width={16} alt="" /></div>
                    <span>{details.bathrooms} Banheiros</span>
                <div>
                    <img src="./area.png" width={16} alt="" /></div>
                    <span>{details.area} m²</span>
            </div>
            <button className='button-message'>
                Mensagem
            </button>
        </div>
    );
}