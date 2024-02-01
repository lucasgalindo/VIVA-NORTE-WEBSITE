import './Banner.css'
import { useEffect, useLayoutEffect, useState } from 'react';

export default function Banner({ pictures }) {

    const [diffence, setDifference] = useState(33.33);
    const [circles, setCircles] = useState([]);

    const ChangeImageToLeft = (size, key) => {
        const initial = 33.33;
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
        console.log("chamado")
        setCircles(aux);
    }, [])

    return (
        <div>
            <div className='container-banner'>
                <div className='Banner'
                    style={{
                        transform: `translateX(${diffence}%)`
                    }}>
                    {pictures.map((foto, key) => {
                        return (
                            <div key={key} className='container-image' style={{
                                backgroundImage: `url(${foto})`,
                            }}></div>
                        )
                    })}
                </div>
            <div className='titleBanner'>
                <h2>Encontre um <br />apartamento para você!</h2>
                <p>Nós temos as melhores opções da Zona Norte separados para você!</p>
            </div>
            <div className="circles-container">
                {

                    circles.map((element, key) => {
                        const size = key * (33.33);
                        return (
                            <div onClick={(e) => ChangeImageToLeft(size, key)} style={{ backgroundColor: circles[key] }} key={key} className="announcement-circles"></div>
                        )
                    })
                }
            </div>
            </div>




        </div>

    )
}