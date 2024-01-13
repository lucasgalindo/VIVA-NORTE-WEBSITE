import './Header.css'
export default function Header() {
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
                <img src="" alt="icon sininho" />
                <a href="">Entrar </a>
                <a> / </a>
                <a href=""> Criar Conta</a>
                <img src="./imagens/profileIcon.png" alt="profileIcon" />
            </div>
        </header>
    )
}