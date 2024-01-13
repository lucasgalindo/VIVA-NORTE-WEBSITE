import './Banner.css'
import { useEffect, useState } from 'react';

export default function Banner({pictures}) {
    
    const [diffence, setDifference] = useState(0);
    const [circles, setCircles] = useState([]);

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
        console.log("Chegou aqui")
    }
    
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

    return (
        <div>
            <div className='container-banner'>
                <div className='Banner'
                style={{
                    left: diffence
                }}
                >
                    {pictures.map(foto=>{
                        return (
                            <img src={foto} />
                        )
                    })}
                </div>
            </div>
            <div className="circles-container">
                {
                    
                    circles.map((element, key) => {
                        const size = key * 1080;
                        return (
                            <div onClick={(e) => ChangeImageToLeft(size, key)} style={{ backgroundColor: circles[key] }} key={key} className="announcement-circles"></div>
                        )
                    })
                }
            </div>
            <div className='titleBanner'>
                <h2>Encontre um <br/>apartamento para você!</h2>
                <p>Nós temos as melhores opções da Zona Norte separados para você!</p>
            </div>
        </div>

    )
}