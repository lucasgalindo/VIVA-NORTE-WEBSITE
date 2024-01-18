import { useContext } from "react"
import { LoginContext } from "./../../../context/profile.context"


export default function PopUp({ setActived }) {

    const { credentials } = useContext(LoginContext)

    return (
        <div className="pop-up-confirm-register">
            <div className="pop-up-header">
                <button className="modal-button-x" onClick={() => setActived(false)}></button>
                <span className="pop-up-title">Conta criada!</span>
            </div>
            <img className="profileImage" src={credentials.picture} alt="" />
            <div>
                <span>{credentials.name}</span>
                <img src="./person.crop.circle.badge.checkmark.png" alt="" />
            </div>
                <span className="wellcoming-span">Olá, {credentials.name}, sua conta na Viva Norte foi
                criada com sucesso, é um prazer ter você conosco! </span>
        </div>
    )
}