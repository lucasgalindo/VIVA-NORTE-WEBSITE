import { useState } from "react";
import styles from "./asidebar.module.css";


export default function AsideBar(){
    
    const [stateMenu, setStateMenu] = useState({
        0: false,
        1: false,
        2: false,
    })

    function HandleMenu(index){
        let newState = {...stateMenu};
        newState[index] = !newState[index];
        setStateMenu(newState);
    }

    return(
        <aside className={styles.aside}>
            <article className={styles.article}>
                <img src="./corretor/chart-pie.png" alt="" />
                <span>Agenda</span>
            </article>
            <article className={styles.article} onClick={()=>HandleMenu(0)}>
                <img src="./corretor/predio.png" alt="" />
                <span>Meus Imóveis</span>
                <img style={{
                    rotate: stateMenu[0] ? "180deg" : '0deg',
                    transition: "0.3s ease"
                }} src="./corretor/arrow.png" alt="" />
            </article>
            <article className={stateMenu[0] ? styles["article-wrapped"] : styles["article-not-wrapped"]}>
                <span>Imóveis</span>
                <span>Desempenho</span>
            </article>
            <article className={styles.article}>
                <img src="./corretor/pie_chart_outlined.png" alt="" />
                <span>Relatórios</span>
            </article>
            <article className={styles.article}>
                <img src="./corretor/perfil.png" alt="" />
                <span>Meu perfil</span>
            </article>
            <article className={styles.article}>
                <img src="./corretor/settings.png" alt="" />
                <span>Configurações</span>
            </article>
            <article className={styles.article}>
                <img src="./corretor/help.png" alt="" />
                <span>Ajuda</span>
            </article>
        </aside>
    );

}


