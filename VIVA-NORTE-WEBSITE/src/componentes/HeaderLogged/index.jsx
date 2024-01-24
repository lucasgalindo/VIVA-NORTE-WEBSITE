import { useContext } from "react"
import { LoginContext } from "../../context/profile.context"
import "./headerlogged.css"




export default function HeaderLogged() {

    const { credentials } = useContext(LoginContext);


    return (
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
                <img src="./bell.png" className="bellIcon" alt="icon sininho" />
                <button onClick={() => { }}>
                    {credentials.name}
                </button>
                <img src={credentials.picture}  className="login-profile-image"  alt="" />
            </div>
        </header>
    )
}