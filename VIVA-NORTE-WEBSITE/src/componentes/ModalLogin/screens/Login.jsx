import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { LoginContext } from "../../../context/profile.context";


export default function Login({Modal, setModal, setActived}){
    
    const context = useContext(LoginContext);
    const [credentials, setCredentials] = useState({email: "", password: ""}) 

    const urlLogin = "http://localhost:8080/loginVerification";
    const [changer, setChanger] = useState("disabled")
       const [toggleVisibilityPassword, setToggleVisibilityPassword] = useState(true)
      
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
    
    function ChangingCredentials(target, type){
        if(type === "email"){
            setCredentials({...credentials, email : target.target.value});
            console.log(credentials)
        }
        else{
            setCredentials({...credentials, password : target.target.value});
            console.log(credentials)

        }
    }

    async function SendCredentials(){
        const response = await axios.post("http://localhost:8080/loginverification", credentials);
        if(response.data != []){
            const data = response.data[0];
            context.setCredentials({...data, connected : true})
            setActived(false);
            console.log(context.credentials)
        }
        setLoading(false);
    }


    const [loading, setLoading] = useState(false);

    return(
        <>
    {
        !loading ? 
        <div className={`login-screen ${changer}`}>
                    <div className="modal-main-create">
                        <div>
                            <button className="modal-button-back" onClick={()=>setModal("initial")}></button>
                            <span className="modal-title login-page">Faça Login</span>
                        </div>
                    </div>
                
                
                <div className="login-modal-section">
                            
                            <div className="input-field login-camp">
                                <label htmlFor="email-login">Email</label>
                                <input onChange={(event)=>ChangingCredentials(event, "email")} type="email" placeholder="Insirar o email do usuário aqui" name="email-login" id="email-login"/>
                            </div>
                            <div className="input-field login-camp password">
                                <label htmlFor="password-login">Senha</label>
                                <input onChange={(event)=>ChangingCredentials(event, "password")} type={toggleVisibilityPassword ? "password" : "text"} placeholder="Insirar o email do usuário aqui" name="password-login" id="password-login"/>
                                <div className="hiding" onMouseEnter={()=>{
                                    setToggleVisibilityPassword(false)
                                }}
                                onMouseLeave={()=>{
                                    setToggleVisibilityPassword(true)
                                }}
                                ></div>
                            </div>
                </div>
                <button className="login-button-confirm" onClick={()=>{
                            setLoading(true);
                            setTimeout(SendCredentials, 2000)
                        }}>
                        Entrar
                        </button>
        </div>
                
            : 
                <div className="spinner-container">
                    <div className="spinner">
                    </div>
                </div>
    }
        </>
    )
}