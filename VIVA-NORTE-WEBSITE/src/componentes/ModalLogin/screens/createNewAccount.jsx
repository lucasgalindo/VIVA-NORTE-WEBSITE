import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { LoginContext } from "../../../context/profile.context";

export default function CreateNewAccount({Modal, setModal}){
    
    const context = useContext(LoginContext);
    const url = "http://localhost:8080/createNewUser"
    const urlLogin = "http://localhost:8080/loginVerification";
    
    const config = {
        "Content-Type" : "multipart/form-data"
    }
    
    async function InviteFormData(){
        
        try{
            const input = document.getElementById("input-image");
            const form = new FormData();
            const credentialsData = {
            name: credentials.name,
            password: credentials.password,
            email: credentials.email,
            cpf: credentials.cpf,
            phone: credentials.phone,
            date: credentials.date
        };
        
        form.append("content", JSON.stringify(credentialsData));
        if(input.files[0]){
            form.append("file", input.files[0]);
        }
        else{
            
            setTimeout(()=>setLoading(false), 2000)
        }
        const request = await axios.post(url, form, config)
        const {data} = await request;
        if(await data?.status == "completed"){
            const {data} = await axios.post(urlLogin, {email: credentials.email, password: credentials.password})
            const result = data[0];
            setTimeout(()=>context.setCredentials({...result, created: true, connected: true}), 2000);
        }
        else{
            setTimeout(()=>setLoading(false), 2000)
            
        }
    }
    catch(e){
            setTimeout(()=>setLoading(false), 2000)
            
        }
    }
    
    
    
    const [changer, setChanger] = useState("disabled")
    const [credentials, setCredentials] = useState({
        name: "",
        password: "",
        email: "",
        cpf: "",
        phone: "",
        date: ""
    })
    const handleFileChange = (event) => {
        const image = document.querySelector(".input-choose-image");
        const file = event.target.files[0];
        
        if (file) {
            const reader = new FileReader();
            
            reader.onload = () => {
                image.style.backgroundImage = `url("${reader.result}")`;
                
            };
            
            reader.readAsDataURL(file);
        }
      };
      
      
      useEffect(()=>{
          const verify = Modal == "create" ? "actived" : "disabled";
          if(Modal == "create"){
              setTimeout(()=>{
                  setChanger(verify);
            }, 700)
        }
        else{
            setChanger("disabled")
        }
    }, [Modal])
    
    function ChooseImage(e){
        const input = document.getElementById("input-image");
       input.click();
    }
    const [loading, setLoading] = useState(false);

    return(
        <>
    {
        !loading ? 
        <div className={`create-login-screen ${changer}`}>
                    <div className="modal-main-create">
                        <div>
                            <button className="modal-button-back" onClick={()=>setModal("initial")}></button>
                            <span className="modal-title">Crie sua conta</span>
                        </div>
                        <span className="span-modal-create">Crie sua conta para poder ter acesso as demais funcionalidades, adicionar imóveis aos favoritos, contato com os corretores e mais.</span>
                    </div>
                    <span className="steps-span">1 de 1</span>
                    <span className="steps-span">Adicione uma foto de perfil</span>
                    <button className="input-choose-image" onClick={ChooseImage}>

                    </button>
                    <input id="input-image" onChange={handleFileChange} type="file" accept="image/png image/jpg" name="" />
                    <div className="create-account-fields">
                        <div className="input-field">
                            <label htmlFor="name">Nome</label>
                            <input onChange={({target})=>setCredentials({...credentials, name: target.value})} type="text" placeholder="Insirar o nome de usuário aqui" name="name" id="name"/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="name">Email</label>
                            <input onChange={({target})=>setCredentials({...credentials, email: target.value})} type="email" placeholder="Insirar o email do usuário aqui" name="name" id="name"/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="name">Telefone</label>
                            <input onChange={({target})=>setCredentials({...credentials, phone: target.value})} type="text" placeholder="Digite o número do seu telefone" name="name" id="name"/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="name">Senha</label>
                            <input onChange={({target})=>setCredentials({...credentials, password: target.value})} type="password" placeholder="*********" name="name" id="name"/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="name">CPF</label>
                            <input onChange={({target})=>{setCredentials({...credentials, cpf: target.value})}} type="text" placeholder="Digite o número do seu CPF" name="name" id="name"/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="name">Data de Nascimento</label>
                            <input onChange={({target})=>{setCredentials({...credentials, date: target.value})}} type="text" placeholder="dd/mm/yyyy" name="name" id="name"/>
                        </div>
                        <div className="container-terms">
                            <div className="terms-conditions">
                                <input type="checkbox" name="" id="" />
                                <span>Eu concordo com os Termos e Condições de Uso da Viva Norte.</span>
                            </div>
                            <div className="terms-conditions">
                                <input type="checkbox" name="" id="" />
                                <span>Eu autorizo ao site da Viva Norte usar minha localização atual.</span>
                            </div>
                        </div>
                    </div>
                        <button className="create-account-button" onClick={()=>{
                            setLoading(true);
                            InviteFormData();
                        }}>
                            Criar Conta
                        </button>

                    <span>Já tem uma conta? <span onClick={()=>{
                        setModal("login")

                    }} style={{textDecoration: "underline", cursor: "pointer"}}>Entre Aqui.</span></span>
                </div> : 
                <div className="spinner-container">
                    <div className="spinner">

                    </div>
                </div>
    }
        </>
    )
}