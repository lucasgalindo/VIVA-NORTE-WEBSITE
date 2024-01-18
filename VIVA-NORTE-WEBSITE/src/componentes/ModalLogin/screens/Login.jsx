import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { LoginContext } from "../../../context/profile.context";

export default function Login({Modal, setModal}){
    
    const context = useContext(LoginContext);
    const urlLogin = "http://localhost:8080/loginVerification";
    const [changer, setChanger] = useState("disabled")
      
      useEffect(()=>{
          const verify = Modal == "login" ? "actived" : "disabled";
          if(Modal == "login"){
              setTimeout(()=>{
                  setChanger(verify);
            }, 700)
        }
        else{
            setChanger("disabled")
        }
    }, [Modal])
    
    const [loading, setLoading] = useState(false);

    return(
        <>
    {
        !loading ? 
        <div className={`login-screen ${changer}`}>
                    <div className="modal-main-create">
                        <div>
                            <button className="modal-button-back" onClick={()=>setModal("initial")}></button>
                            <span className="modal-title">Faça Login</span>
                        </div>
                    </div>
                </div> : 
                <div className="spinner-container">
                    <div className="spinner">

                    </div>
                </div>
    }
        </>
    )
}