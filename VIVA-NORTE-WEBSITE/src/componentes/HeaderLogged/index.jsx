import { useContext, useState } from "react"
import { LoginContext } from "../../context/profile.context"
import "./headerlogged.css"




export default function HeaderLogged() {

    const { credentials } = useContext(LoginContext);
    const [menu, setMenu] = useState("start")
    const [actived, setActived] = useState(false);


    /*
    
    
    */ 
    return (
        <header>
            <div className='container-when-are-pc'>
                <div className="logo">
                    <img src="../../../public/imagens/iconVivaNorte.png" alt="logoVivaNorte" onClick={()=>useNavigation("/")}/>
                </div>
                <div className="textButton">
                    <a href="">Buscar Imóveis</a>
                    <a href="">Anunciar Imóveis</a>
                    <a href="">Área do corretor</a>
                    <a href="">Segurança</a>
                    <a href="">Sobre a Viva Norte</a>
                </div>
                <div className="login">
                        <button onClick={() => { }}>
                            {credentials.name}
                        </button>
                        <img src={credentials.picture}  className="login-profile-image"  alt="" />
                    </div>
            </div>
            <div className='container-when-are-mobile'>
                <div className="logo">
                    <img src="../../../public/imagens/iconVivaNorte.png" alt="logoVivaNorte" />
                </div>
                <div className='inline-content'>
                    <img src="../../../public/bell.png" className='bellIcon' alt="icon sininho" />
                    <button className='menu-hamburguer' onClick={() => setMenu(menu == "start" ? "actived" : "start")}>
                        <div className={`bar-menu ${menu}-0`}></div>
                        <div className={`bar-menu ${menu}-1`}></div>
                        <div className={`bar-menu ${menu}-2`}></div>
                    </button>
                </div>
                <div className={`container-menu ${menu}`}>
                    <div className="login">
                        <button onClick={() => { }}>
                            {credentials.name}
                        </button>
                        <img src={credentials.picture}  className="login-profile-image"  alt="" />
                    </div>
                    <div className="textButton">
                        <a href="">Buscar Imóveis</a>
                        <a href="">Anunciar Imóveis</a>
                        <a href="">Área do corretor</a>
                        <a href="">Segurança</a>
                        <a href="">Sobre a Viva Norte</a>
                    </div>
                </div>
            </div>
            {actived ? <ModalLogin setActived={setActived}></ModalLogin> : null}
        </header>
    )
}