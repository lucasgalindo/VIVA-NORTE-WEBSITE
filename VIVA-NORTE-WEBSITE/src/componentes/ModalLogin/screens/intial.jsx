import { useEffect, useState } from "react";

export default function Initial({ Modal, setModal, setActived }) {
    const [changer, setChanger] = useState("disabled");
    const [current, setCurrent] = useState();
    useEffect(() => {
        if (Modal == "login" || current == "login") {
            if (Modal == "initial") {
                setChanger("actived-to-right")
                setCurrent(Modal);
            }
            else {

                setTimeout(() => {
                    setCurrent(Modal);
                    setChanger("disabled-to-right");
                }, 700)
            }

        }
        else {
            const verify = Modal == "initial" ? "actived" : "disabled";
            if (Modal == "initial") {
                setTimeout(() => {
                    setChanger(verify);
                }, 700)
            }
            else {
                setChanger("disabled")
            }
        }
    }, [Modal])

    return (
        <div className={`initial-screen-login ${changer}`}>
            <div className="modal-main">
                <button className="modal-button-x" onClick={() => setActived(false)}></button>
                <span className="modal-title">Entrar/ Criar conta</span>
            </div>
            <img width={212} style={{ marginTop: 60, marginBottom: 40 }} src="./logoVivaNorte.png" alt="" />
            <span className="wellcome-title">Bem vindo a Viva Norte!</span>
            <span className="wellcome-subtitle">Aqui você encontra o seu lugar na Zona Norte de Recife-PE.</span>
            <div className="buttons-section">
                <button className="button-generic-modal" onClick={() => setModal("create")} >Criar Conta</button>
                <button className="button-generic-modal" onClick={() => setModal("login")} z>Entrar</button>
            </div>
            <div className="or-container"><span>Ou</span></div>
            <button className="google-button button-generic-modal">
                <img src="./google_icon.png" alt="" />
                <span>Continuar com o Google</span>
            </button>
        </div>
    );
}