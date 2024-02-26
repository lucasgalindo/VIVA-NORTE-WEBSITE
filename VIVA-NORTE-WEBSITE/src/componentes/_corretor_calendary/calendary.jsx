import { useState, useRef, useEffect, useLayoutEffect } from "react"
import styles from "./calendary.module.css"
export default function Calendary() {
  const [isActive, setIsActive] = useState(false);
  const selectRef = useRef(null);
  const [value, setValue] = useState('Diario');
  const [currentDate, setCurrentDate] = useState([]);
  const [monthSelect, setMonthSelect] = useState();
  const [chooseIndex, setChooseIndex] = useState([]);

  const handleToggle = () => {
    setIsActive(!isActive);
  };
  const ChangeSelect = (e) =>{
    setValue(e.target.value)
  }
  const months = {
    0: "Janeiro", 1: "Fevereiro",
    2: "Março", 3: "Abril",
    4: "Maio", 5: "Junho",
    6: "Julho", 7: "Agosto",
    8: "Setembro", 9: "Outubro",
    10: "Novembro", 11: "Dezembro",
  }
  const [currentYear, setCurrentYear] = useState()

  const event = [{
    data: "2024/2/20",
    subject: "visita",
    color: "red",
    time: '10:00',
    obs: "Anthony"
  },
  {
    data: "2024/2/21",
    subject: "visita",
    color: "yellow",
    time: '10:00',
    obs: "Anthony"
  },
  {
    data: "2024/2/21",
    subject: "visita",
    color: "yellow",
    time: '10:00',
    obs: "Anthony"
  },
  {
    data: "2024/2/21",
    subject: "visita",
    color: "yellow",
    time: '10:00',
    obs: "Anthony"
  },
  {
    data: "2024/2/21",
    subject: "visita",
    color: "yellow",
    time: '10:00',
    obs: "Anthony"
  },
  {
    data: "2024/2/1",
    subject: "visita",
    color: "blue",
    time: '10:00',
    obs: "Anthony"
  }
  ]

  useLayoutEffect(() => {
    const currentData = new Date();
    setCurrentYear(currentData.getFullYear());
    setMonthSelect(currentData.getMonth());
  }, [])

  const HandleAgenda = () => {
    const firstDay = new Date(currentYear, monthSelect, 1);
    const lastDay = new Date(currentYear, monthSelect + 1, 0);
    setChooseIndex([])
    const arrayDate = [];
    let newArray = [];
    const eventsOnThisMonth = event.filter((obj) => obj.data.split("/")[1] == monthSelect + 1 && obj.data.split("/")[0] == currentYear);
    console.log(eventsOnThisMonth)
    for (let i = 0; i < firstDay.getDay(); i++) {
      newArray.push('');
    }
    console.log(lastDay.toLocaleDateString())
    for (let i = 1; i < 43 - firstDay.getDay(); i++) {
      if (i <= lastDay.getDate()) {
        newArray.push({
          day: i,
          event: eventsOnThisMonth.filter((obj) => obj.data.split("/")[2] == i),
        });
        if (newArray.length == 7) {
          arrayDate.push(newArray);
          newArray = [];
        }
      }
      else {
        newArray.push("")
        if (newArray.length == 7) {
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
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  function Increment() {
    if (monthSelect === 11) {
      setCurrentYear(currentYear + 1);
      setMonthSelect(0);
    }
    else {
      setMonthSelect(monthSelect + 1);
    }
  }
  function Decrement() {

    if (monthSelect === 0) {
      setCurrentYear(currentYear - 1);
      setMonthSelect(11);
    }
    else {
      setMonthSelect(monthSelect - 1);
    }
  }




  return (
    <section className={styles.container}>
      <div className={styles.justify_items}>
        <h2>Agenda</h2>
        <div className={isActive ? styles.container_select_actived : styles.container_select} ref={selectRef}>
          <select onChange={ChangeSelect} onClick={handleToggle} ref={selectRef} className={styles.select} name="currentTime" id="currentTime">
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
            {
              event.map((element, index)=>{
                const data = new Date();
                currentDate.filter(obj => {
                  obj.filter((o) => o.day === data.getDay() && o)
                })

                if(currentDate){
                  return(
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
                  )
                }
              })
            }
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
                <img className={styles.button_agenda_left} onClick={() => Decrement()} src="./corretor/arrowBlack.png" alt="" />
                <span className={styles.title_agenda}>{months[monthSelect]} | {currentYear}</span>
                <img className={styles.button_agenda_right} onClick={() => Increment()} style={{ rotate: "180deg" }} src="./corretor/arrowBlack.png" alt="" />
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
            {currentDate.map((child, index) => {
              return (
                <div>
                  <section key={index} className={styles.weeks_agenda}>
                    {
                      child.map((element, i) => {
                        return (isNaN(+element.day) ? <article style={{ height: 40, width: 40 }}></article> : <article onClick={() => {
                          if (chooseIndex[0] == index && chooseIndex[1] == i) {
                            setChooseIndex([]);
                          }
                          else {
                            setChooseIndex([index, i])
                          }
                        }} className={styles.article_agenda}>
                          <span key={i} className={styles.day_agenda}>{element.day}</span>
                          {element.event.map((component) => {
                            // Gere coordenadas dentro do círculo
                            const angle = Math.random() * 2 * Math.PI;
                            const radius = 20;
                            const x = Math.cos(angle) * radius;
                            const y = Math.sin(angle) * radius;

                            return (
                              <div
                                style={{
                                  height: 5,
                                  width: 5,
                                  transition:'0.2s',
                                  backgroundColor: component.color,
                                  position: "absolute",
                                  top: 18 + y, // Adicione o deslocamento y ao raio do círculo
                                  left: 18 + x, // Adicione o deslocamento x ao raio do círculo
                                  borderRadius: 5
                                }}
                              ></div>
                            );
                          })}
                        </article>)
                      })
                    }
                  </section>
                  {
                    (chooseIndex[0] == index && chooseIndex != []) && <section className={"expanded"}>
                      {
                        child[chooseIndex[1]].event.length > 0 ?
                          child[chooseIndex[1]].event.map((component, key) => {
                            return (
                              <div key={key} className={styles.figure_aligner}>
                                <div style={
                                  {
                                    backgroundColor: component.color,
                                    width: 10,
                                    height: 10,
                                  }
                                } className="circle_event"></div>
                                <span>{component.time} | Assunto: {component.subject}</span>
                              </div>
                            )
                          })
                          : <span>
                            Não há nenhum evento
                          </span>
                      } 
                    </section> 
                  }
                </div> 
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
