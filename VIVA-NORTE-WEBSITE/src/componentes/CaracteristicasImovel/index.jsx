import './CaracteristicasImovel.css'
import imagemtest from "../../../public/imagens/tamanhoM2.png"
import { useEffect, useRef, useState } from 'react';
import Characters from './component/characters';


export default function CaracteristicasImovel({ data }) {


    useEffect(() => {
        counting.current += 1;
        console.log(counting.current)
    }, [data])

    const counting = useRef(0);
    const featuresArray = [
        'box blindex',
        'closet',
        'cozinha americana',
        'interfone',
        'mobiliado',
        'varanda gourmet',
        'varanda',
        'sala de jogos',
        'acesso para pessoas com deficiência',
        'suporte para bicicletas',
        'colega de trabalho',
        'elevador',
        'lavanderia',
        'recepção',
        'sauna',
        'planejado',
        'construído',
        'feito',
        'aceita animais',
        'quarto de serviço',
        'closet no quarto',
        'armário no banheiro',
        'armário na cozinha',
        'academia',
        'churrasqueira',
        'espaço gourmet',
        'espaço verde',
        'jardim',
        'piscina',
        'playground',
        'quadra esportiva',
        'salão de festas',
        'janelas amplas',
        'tv'
    ];
    return (
        <section className='sectionGeral'>


            <h2>O que esse imóvel oferece </h2>
            <div className='containerGeral'>
                <Characters featuresArray={featuresArray} data={data} />
                <div className='containerDir'>
                    <h3> Ficou interessado? Envie uma mensagem! </h3>
                    <p>Envie uma mensagem para o corretor para maiores informações sobre o imóvel e sua compra.</p>
                    <button className='chamadaWpp'><img src="./../../public/imagens/wppIcon.png" alt="" /> Enviar mensagem para o corretor </button>
                </div>
            </div>

            <hr />
            <h2>Localize no mapa </h2>
            <p>Navegue pela região o qual o imóvel se encontra e descubra o que está aos arredores.</p>
            <div style={{
                position: "relative",
                height: 230,
                marginTop: 40,
                marginBottom: 40,
            }}>



                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.4774778440355!2d-34.925798!3d-8.154553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aae1c329c39cff%3A0x8c45cbd5f16b30a6!2sR.%20Campo%20Santo%2C%2035%20-%20Muribeca%20dos%20Guararapes%2C%20Jaboat%C3%A3o%20dos%20Guararapes%20-%20PE%2C%2054315-540!5e0!3m2!1sen!2sbr!4v1706673217688!5m2!1sen!2sbr" style={{
                    width: "100vw",
                    border: "none",
                    left: "-105px",
                    height: "230px",
                    position: "absolute"
                }}></iframe>
            </div>
            <div className='chamadaBottom'>
                <h3> Ficou interessado? Envie uma mensagem! </h3>
                <p>Envie uma mensagem para o corretor para maiores informações sobre o imóvel e sua compra.</p>
                <button className='chamadaWpp'><img src="./../../public/imagens/wppIcon.png" alt="" /> Enviar mensagem para o corretor </button>
            </div>

        </section>
    )
}