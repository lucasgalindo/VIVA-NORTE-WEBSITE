import { useState, useRef, useEffect } from "react"
import styles from "./calendary.module.css"
import { faHamburger } from "@fortawesome/free-solid-svg-icons";

export default function Calendary() {
  const [isActive, setIsActive] = useState(false);
  const selectRef = useRef(null);
  const [currentDate, setCurrentDate] = useState([]);
  const [monthSelect, setMonthSelect] = useState();

  const handleToggle = () => {
    setIsActive(!isActive);
  };
  const months = {
    0: "Janeiro",
    1: "Fevereiro",
    2: "Março",
    3: "Abril",
    4: "Maio",
    5: "Junho",
    6: "Julho",
    7: "Agosto",
    8: "Setembro",
    9: "Outubro",
    10: "Novembro",
    11: "Dezembro",
  }
  const [currentYear, setCurrentYear] = useState()
  
  const event = [{
    data: "2024/2/20",
    subject: "visita",
    obs: "VISITA DA DONA ANA A CASA DE ANTHONELY" 
  }]
  
  const BuildCalendary = () => {
    const currentData = new Date();
    setCurrentYear(currentData.getFullYear());
    setMonthSelect(currentData.getMonth())
    const firstDay = new Date(currentData.getFullYear(), currentData.getMonth(), 1);
    const lastDay = new Date(currentData.getFullYear(), currentData.getMonth() + 1, 0);
    const arrayDate = [];
    const eventsOnThisMonth = event.filter((obj) => obj.data.split("/")[1] == monthSelect + 1 && obj.data.split("/")[0] == currentYear );
    let newArray = [];
    for(let i = 0; i < firstDay.getDay(); i++){
      newArray.push('');
    }
    console.log(lastDay);
    for (let i = 1; i < 43 - firstDay.getDay() - 1; i++) {
      if(i <= lastDay.getDate()){
        newArray.push({
          day: i,
          event: eventsOnThisMonth.find((obj) => obj.data.split("/")[2] == i),
        });
        if(newArray.length == 7){
          arrayDate.push(newArray);
          newArray = [];
        }
      }
      else{
        newArray.push("")
        if(newArray.length == 7){
          arrayDate.push(newArray);
          newArray = [];
        }
      }
    }
    setCurrentDate(arrayDate);

  }
  const HandleAgenda = () => {
    const firstDay = new Date(currentYear, monthSelect, 1);
    const lastDay = new Date(currentYear, monthSelect + 1, 0);
    const arrayDate = [];
    let newArray = [];
    const eventsOnThisMonth = event.filter((obj) => obj.data.split("/")[1] == monthSelect + 1 && obj.data.split("/")[0] == currentYear );
    console.log(eventsOnThisMonth)
    for(let i = 0; i < firstDay.getDay(); i++){
      newArray.push('');
    }
    console.log(lastDay.toLocaleDateString())
    for (let i = 1; i < 43 - firstDay.getDay(); i++) {
      if(i <= lastDay.getDate()){
        newArray.push({
          day: i,
          event: eventsOnThisMonth.find((obj) => obj.data.split("/")[2] == i),
        });
        if(newArray.length == 7){
          arrayDate.push(newArray);
          newArray = [];
        }
      }
      else{
        newArray.push("")
        if(newArray.length == 7){
          arrayDate.push(newArray);
          newArray = [];
        }
      }
    }
    console.log(arrayDate)
    setCurrentDate(arrayDate);
  }
  
  

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsActive(false);
    }
  };
  
  useEffect(HandleAgenda, [monthSelect])

  useEffect(() => {
    BuildCalendary();
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  function Increment() {
    if(monthSelect === 11){
      setCurrentYear(currentYear + 1);
      setMonthSelect(0);
    }
    else{
      setMonthSelect(monthSelect + 1);
    }
  }
  function Decrement() {
    
    if(monthSelect === 0){
      setCurrentYear(currentYear - 1);
      setMonthSelect(11);
    }
    else{
      setMonthSelect(monthSelect - 1);
    }
  }




  return (
    <section className={styles.container}>
      <div className={styles.justify_items}>
        <h2>Agenda</h2>
        <div className={isActive ? styles.container_select_actived : styles.container_select} ref={selectRef}>
          <select onClick={handleToggle} className={styles.select} name="currentTime" id="currentTime">
            <option value="Diario">Diario</option>
            <option value="Semanal">Semanal</option>
            <option value="Mensal">Mensal</option>
          </select>
        </div>
      </div>
      <div style={{ maxWidth: 700 }}>
        <span>Aqui você pode acompanhar as atividades do seu dia, assim como sua semana, além de marcar e reagendar as atividades.</span>
      </div>
      <hr />
      <section className={styles.grid_container}>
        <div className={styles.grid_container_vertical}>
          <div className={styles.event_today}>
            <div style={{
              justifyContent: "space-between",
              padding: 0,
              gap: 0,
              marginLeft: 20,
              marginRight: -20,
            }} className={styles.justify_items}>
              <h2 className={styles.title_agenda}>Eventos de hoje</h2>
              <figure className={styles.figure_aligner} style={{ gap: 10 }}>
                <img src="./corretor/plus.png" alt="" />
                <span>Adicionar Evento</span>
              </figure>
            </div>
            <div className={styles.event}>
              <div className={styles.event_descs} style={{ flexDirection: "row", alignItems: "center", gap: 30 }}>
                <div className={styles.status}></div>
                <div className={styles.event_descs}>
                  <span className={styles.event_title}>Reunião cliente Maria Clara A. </span>
                  <span className={styles.event_description}>Alinhamento para proposta de venda</span>
                </div>
              </div>

              <div className={styles.event_descs} style={{ alignItems: "center" }}>
                <span className={styles.event_title}>Horário</span>
                <span className={styles.event_description}>18:00</span>
              </div>
            </div>
          </div>
          <section className={styles.calendary_container}>
            <div style={{
              justifyContent: "space-between",
              padding: 0,
              gap: 0,
              marginTop: 20,
              marginLeft: 20,
              marginBottom: 20,
              marginRight: -20,
            }} className={styles.justify_items}>
              <h2 className={styles.title_agenda}>Agenda mensal</h2>
              <figure className={styles.figure_aligner} id={styles.figure_aligner_agenda} style={{ gap: 10 }}>
                <img className={styles.button_agenda_left} onClick={()=>Decrement()} src="./corretor/arrowBlack.png" alt="" />
                <span className={styles.title_agenda}>{months[monthSelect]} | {currentYear}</span>
                <img className={styles.button_agenda_right} onClick={()=>Increment()} style={{ rotate: "180deg" }} src="./corretor/arrowBlack.png" alt="" />
              </figure>
              <figure className={styles.figure_aligner} style={{ gap: 10 }}>
                <img src="./corretor/plus.png" alt="" />
                <span>Adicionar Evento</span>
              </figure>
            </div>
            <section className={styles.weeks_agenda}>
              <span className={styles.weeks_day_agenda}>Dom</span>
              <span className={styles.weeks_day_agenda}>Seg</span>
              <span className={styles.weeks_day_agenda}>Ter</span>
              <span className={styles.weeks_day_agenda}>Qua</span>
              <span className={styles.weeks_day_agenda}>Qui</span>
              <span className={styles.weeks_day_agenda}>Sex</span>
              <span className={styles.weeks_day_agenda}>Sab</span>
            </section>
              {currentDate.map((child, index)=>{
                return(
                  <section id={index} key={index} className={styles.weeks_agenda}>
                 {
                  child.map((element, i) => {
                    return (
                    <article className={styles.article_agenda}>
                      <span onClick={(e)=>{
                        const section = document.getElementById(index);
                        const spanShower = document.getElementsByClassName("block-span-shower");
                        const array = document.getElementsByClassName(styles.weeks_agenda);
                        let newDate = currentDate;
                        let selected = false;
                        if(section.classList[1] && section.classList[2] == i){
                          selected = true;
                        }
                        for(let j = 0; j < array.length; j++){
                          array.item(j).classList.remove("expanded", array.item(j).classList[2]);
                          e.currentTarget.parentNode.classList.remove("block-span-shower");
                        }
                        for(let j = 0; j < spanShower.length; j++){
                          spanShower[j].classList.remove("block-span-shower")
                        }
                        if(selected){
                          e.currentTarget.parentNode.classList.remove("block-span-shower");
                          section.classList.remove("expanded", i);
                        }
                        else{
                          e.currentTarget.parentNode.classList.add("block-span-shower");
                          section.classList.add("expanded", i)
                          newDate[index][i] = {...newDate[index][i], isSelected: true}
                        }
                      }} key={i} className={styles.day_agenda}>{element.day}</span>
                      {
                        currentDate[index][i] ? <div className={styles.data_result}>
                          <span>Selected</span>
                          </div> : null
                      }
                    </article> 
                    )
                  })
                 }
                </section>
                )
              })}
          </section>
        </div>

        <section className={styles.pending_activities}>
        </section>
      </section>
    </section>
  )
}