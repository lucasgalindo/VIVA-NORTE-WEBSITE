import { useState, useRef, useEffect } from "react"
import styles from "./calendary.module.css"

export default function Calendary() {
  const [isActive, setIsActive] = useState(false);
  const selectRef = useRef(null);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
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
        </section>
        </div>
        
        <section className={styles.pending_activities}>
        </section>
      </section>
    </section>
  )
}