
import "./modal_login.css"
import Initial from "./screens/intial"
import CreateNewAccount from "./screens/createNewAccount";
import PopUp from "./screens/pop-up";
import { useContext, useEffect, useState } from "react"
import { LoginContext } from "../../context/profile.context";
import Login from "./screens/Login";


export default function ModalLogin({setActived}){
    const {credentials} = useContext(LoginContext);
    const [modal, setModal ] = useState("initial");
    return(
        <section className="fullscreen-container">
        {
            !credentials.connected ? <>
            {
                credentials.created ? 
                <PopUp setActived={setActived}></PopUp>
                : <div className="modal-login">
                <Initial setActived={setActived} setModal={setModal} Modal={modal} ></Initial>
                <CreateNewAccount setModal={setModal} Modal={modal}></CreateNewAccount>
                <Login setActived={setActived} setModal={setModal} Modal={modal}></Login>
            </div>
            }
        
        </>:
        <>
            
        </>
        }
        </section>
    )
}