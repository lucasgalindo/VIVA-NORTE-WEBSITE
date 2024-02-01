import { useEffect, useMemo, useRef } from "react";

export default function Characters({ data }) {
    
    
    
    return (      
        <div className='fotosSecundarias'>

        {data.pictures.map((element, index) => {
            if (index > 0 && index < 6) {
                return (<div className={`photo n-${index}`}>
                    <img key={index} className="secondary-photo" src={element.url} alt="foto secondaria"></img>
                    <label className="label-last-photo">
                        <img src="./../../../../public/galery.png" alt="asdasd" />
                        Mostrar todas as fotos
                    </label>
                </div>)
                
            }
            else if(index == 6 ){
                return (
                    <div id="last" className={`photo n-${index}`}>
                    <img key={index}  className="secondary-photo" src={element.url} alt="foto secondaria"></img>
                    <label htmlFor="last" className="label-last-photo">
                        <img src="./../../../../public/galery.png" alt="asdasd" />
                        Mostrar todas as fotos
                        </label>
                    </div>
                    
                )
            }

        })}
        </div>      
    )
}