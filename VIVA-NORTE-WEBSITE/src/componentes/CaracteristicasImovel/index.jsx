import './CaracteristicasImovel.css'
import imagemtest from "../../../public/imagens/tamanhoM2.png"
export default function CaracteristicasImovel() {
    return (
        <section className='sectionGeral'>
            <h2>O que esse imóvel oferece </h2> 
            <div className='containerGeral'>
                <div className='containerEsq'>
                    <div className='alinharItens2'>
                        <img src="../../../public/imagens/tamanhoM2.png" />
                        <p> Área de serviço </p>
                    </div>
                    <div className='alinharItens2'>
                        <img src="../../../public/imagens/tamanhoM2.png" />
                        <p> Elevador </p>
                    </div>
                    <div className='alinharItens2'>
                        <img src="../../../public/imagens/tamanhoM2.png" />
                        <p> Cozinha </p>
                    </div>
                    <div className='alinharItens2'>
                        <img src="../../../public/imagens/tamanhoM2.png" />
                        <p> Interfone </p>
                    </div>
                    <div className='alinharItens2'>
                        <img src="../../../public/imagens/tamanhoM2.png" />
                        <p> Quarto suíte </p>
                    </div>
                    <div className='alinharItens2'>
                        <img src="../../../public/imagens/tamanhoM2.png" />
                        <p> Playgorund </p>
                    </div>
                    <div className='alinharItens2'>
                        <img src="../../../public/imagens/tamanhoM2.png" />
                        <p> Armários embutidos </p>
                    </div>
                    <div className='alinharItens2'>
                        <img src="../../../public/imagens/tamanhoM2.png" />
                        <p> Segurança 24h </p>
                    </div>
                    <div className='alinharItens2'>
                        <img src="../../../public/imagens/tamanhoM2.png" />
                        <p> Ventilação </p>
                    </div>
                    <div className='alinharItens2'>
                        <img src="../../../public/imagens/tamanhoM2.png" />
                        <p> Vigia </p>
                    </div>
                    <div className='exibirTodasCaracteristicas'>
                        <button className='botaoMostrar'>Mostrar todas as caracteristicas</button>
                    </div>
                </div>
                <div className='containerDir'>
                    <h3> Ficou interessado? Envie uma mensagem! </h3>
                    <p>Envie uma mensagem para o corretor para maiores informações sobre o imóvel e sua compra.</p>
                    <button className='chamadaWpp'><img src="./imagens/wppIcon.png" alt="" /> Enviar mensagem para o corretor </button>
                </div>
            </div>
            <div className='chamadaBottom'>
            <h3> Ficou interessado? Envie uma mensagem! </h3>
                    <p>Envie uma mensagem para o corretor para maiores informações sobre o imóvel e sua compra.</p>
                    <button className='chamadaWpp'><img src="./imagens/wppIcon.png" alt="" /> Enviar mensagem para o corretor </button>
            </div>

        </section>
    )
}