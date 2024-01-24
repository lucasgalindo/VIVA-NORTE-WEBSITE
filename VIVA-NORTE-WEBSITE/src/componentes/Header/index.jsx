import { useContext, useState } from 'react'
import './Header.css'
import { LoginContext } from '../../context/profile.context'
import ModalLogin from '../ModalLogin'
import HeaderLogged from '../HeaderLogged'


export default function Header() {

    const {credentials, setCredentials} = useContext(LoginContext)
    const [actived, setActived] = useState(false);
    return credentials.connected ? (<HeaderLogged></HeaderLogged>) : (
        <header>
            <div className="logo">
                <img src="./imagens/iconVivaNorte.png" alt="logoVivaNorte" />
            </div>
            <div className="textButton">
                <a href="">Community</a>
                <a href="">Core Values</a>
                <a href="">Teachers</a>
                <a href="">Our Space</a>
                <a href="">Schedule</a>
                <a href="">Pricing</a>
                <a href="">Contact</a>
            </div>
            <div className="login">
                <img src="./bell.png" className='bellIcon' alt="icon sininho" />
                <button onClick={()=> {
                    setActived(true)
                    }}>Entrar/ Criar Conta</button>
            </div>
            {actived ? <ModalLogin setActived={setActived}></ModalLogin> : null } 
        </header>
    ) 
}
        