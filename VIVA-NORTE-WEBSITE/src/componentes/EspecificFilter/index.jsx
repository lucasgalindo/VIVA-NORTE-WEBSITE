import "./especificFilter.css"

export default function EspecificFilter({setClickButtonFilter}) {
    return (
        <section className="fullscreen-container">
            <div className="modal-especific-filter">
                <article className="modal-main">
                    <button onClick={()=>setClickButtonFilter(false)} className="modal-button-x"></button>
                    <span>Filtros</span>
                </article>
                <h2 className="filter-title">Característica do imóvel</h2>
                <p>Área mínima do imóvel</p>
                <div className="area-field">
                    <input type="number" className="area-minima-filter" placeholder="100" />
                    <span className="area">m²</span>
                </div>
                <p>Buscar pela area total</p>
                <div className="switch--container">
                    <input onChange={(e) => { console.log(e.target.checked) }} type="checkbox" className="switch switch--shadow" id="switch--shadow" />
                    <label htmlFor="switch--shadow"></label>
                </div>
                <p>Estado do imóvel</p>

                <div className="inline-filters">
                    <div className="separator-filters">
                        <input type="checkbox" id="in_plant" />
                        <label htmlFor="in_plant">Na planta</label>
                    </div>
                    <div className="separator-filters">
                        <input type="checkbox" id="in_built" />
                        <label htmlFor="in_built">Em construção</label>
                    </div>
                    <div className="separator-filters">
                        <input type="checkbox" id="done" />
                        <label htmlFor="done">Pronto para morar</label>
                    </div>
                </div>
                <hr style={{ border: "1px solid #E7E6EB", margin: "30px 0px 30px 0px" }} />
                <h2>Condomínio</h2>
                <div className="inline-filters">
                    <div className="separator-filters">
                        <input type="checkbox" id="elavator" />
                        <label htmlFor="elavator">Elevador</label>
                    </div>
                    <div className="separator-filters">
                        <input type="checkbox" id="generator" />
                        <label htmlFor="generator">Gerador Elétrico</label>
                    </div>
                    <div className="separator-filters">
                        <input type="checkbox" id="laundry" />
                        <label htmlFor="laundry">Lavanderia</label>
                    </div>
                    <div className="separator-filters">
                        <input type="checkbox" id="reception" />
                        <label htmlFor="reception">Recepção</label>
                    </div>
                    <div className="separator-filters">
                        <input type="checkbox" id="coworking" />
                        <label htmlFor="coworking">Coworking</label>
                    </div>
                    <div className="separator-filters">
                        <input type="checkbox" id="pcd_access" />
                        <label htmlFor="pcd_access">Acesso para deficiente</label>
                    </div>
                    <div className="separator-filters">
                        <input type="checkbox" id="turkish_bath" />
                        <label htmlFor="turkish_bath">Sauna</label>
                    </div>
                    <div className="separator-filters">
                        <input type="checkbox" id="bicycle_rack" />
                        <label htmlFor="bicycle_rack">Bicicletário</label>
                    </div>
                </div>
                <p>Lazer e Esporte</p>
                <div className="inline-filters">
                    <div className="separator-filters">
                        <input type="checkbox" id="pcd_access" />
                        <label htmlFor="gym">Academia</label>
                    </div>
                    <div className="separator-filters">
                        <input type="checkbox" id="turkish_bath" />
                        <label htmlFor="turkish_bath">Sauna</label>
                    </div>
                    <div className="separator-filters">
                        <input type="checkbox" id="bicycle_rack" />
                        <label htmlFor="bicycle_rack">Bicicletário</label>
                    </div>
                    <div className="separator-filters">
                        <input type="checkbox" id="green_space" />
                        <label htmlFor="green_space">Espaço verde/parque</label>
                    </div>
                </div>
            </div>
        </section>
    )
}