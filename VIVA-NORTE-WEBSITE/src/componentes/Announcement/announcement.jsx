import { useEffect, useState } from 'react';
import './announcement.css'
import location from "./../../../public/location.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart as unFavorited} from "@fortawesome/free-regular-svg-icons"
import { faHeart as favorited } from '@fortawesome/free-solid-svg-icons';
import { faFireExtinguisher } from '@fortawesome/free-solid-svg-icons';

export default function Announcement({ priceFire, priceIPTU, priceCond, price, name, description, pictures, address, neighborhood, city }) {
    const [diffence, setDifference] = useState(10);
    const [circles, setCircles] = useState([]);
    const [favorite, setFavorite] = useState(false);

    const PTReal = new Intl.NumberFormat(
        "pt-BR", {
            style: "currency",
            currency: "BRL"
        }
    )
    useEffect(() => {
        let aux = []
        pictures.forEach(element => {
            if (aux.length === 0) {
                aux.push("white")
            }
            else {
                aux.push("transparent")
            }
        })
        console.log("chamado")
        setCircles(aux);
    }, [])

    const FavoriteAnnouncement = () =>{
        setFavorite(!favorite);
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





    return (
        <div className="annoucement-container">
            <div className='info-container-announcement'>
                <div className='first-div-span'>
                <img src={location} style={{width: 17}} alt="" />
                <span className='span-info-adress'>{neighborhood}, {city}</span>
                </div>
                <span style={{
                    fontWeight: 500
                }}>{address}</span>
            </div>
            <button onClick={FavoriteAnnouncement} className={`favorite-container ${favorite ? "actived-favorited" : ""}`}>
                <FontAwesomeIcon icon={ favorite ? favorited : unFavorited} color={favorite ? 'red' : undefined}/>
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
            <span className='announcement-name-apt'>{name}</span>   
            <span className='announcement-description-apt'>{description}</span>
            <span className="announcement-price-apt">{PTReal.format(price)}</span>
            <div className='announcement-prices'>
                <span>Cond {PTReal.format(priceCond)} </span>
                <span>| IPTU {PTReal.format(priceIPTU) } </span>
                <span>| <FontAwesomeIcon icon={faFireExtinguisher}/> {PTReal.format(priceFire)}</span>
            </div>
        </div>
    );
}