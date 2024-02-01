import { useEffect, useRef } from "react";

export default function Characters({featuresArray, data}){
    const numberPhotos = useRef(0)
    return (
    <div className='containerEsq'>
    {
        featuresArray.map((element, key) => {
            const keys = Object.keys(data.details);

            if (data.details[keys[key]] === 1) {
                        numberPhotos.current += 1;
                        return <div key={key} className='alinharItens2'>
                        <img src="../../../public/imagens/tamanhoM2.png" />
                        <p>{element}</p>
                        </div>
            }
        })
    }
    </div>
    )
}