
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../componentes/Header";
import PaginaAnuncio from "../componentes/PaginaAnuncio";
import CaracteristicasImovel from "../componentes/CaracteristicasImovel";
import TituloPagAnun from "../componentes/TituloPagAnun";

const requester = axios.create({
  baseURL: "http://localhost:8080",
});

export default function AnnouncementPage() {
  const params = useParams();
  const [data, setData] = useState({
    pictures: [{ url: "" }],
    announcement:{
      price: 0,
    },
    details: {
        num_banheiros: 0,
        num_garage_space: 0,
        num_rooms: 0,
        area: 0,
        box_blindex: 0,
        closet: 0,
        american_kitchen: 0,
        intercom: 0,
        furnished: 0,
        gourmet_balcony: 0,
        balcony: 0,
        games_room: 0,
        pcd_access: 0,
        bicycle_rack: 0,
        coworker: 0,
        elevator: 0,
        laundry: 0,
        reception: 0,
        turkish_bath: 0,
        in_plan: 0,
        in_built: 0,
        done: 0,
        accept_animals: 0,
        service_room: 0,
        closet_in_bedroom: 0,
        cabinet_in_bathroom: 0,
        cabinet_in_kitchen: 0,
        gym: 0,
        grill: 0,
        gourmet_space: 0,
        green_space: 0,
        garden: 0,
        pool: 0,
        playground: 0,
        multisports_court: 0,
        party_room: 0,
        big_windows: 0,
        tv: 0
      }
    ,
  });

  const fetchData = async () => {
    const { id } = params;
    const response = await requester.post("/announcement/id", { id });
    return response.data;
  };
  console.log(data)
  useEffect(() => {
    fetchData().then((data) => setData((prevData) => ({ ...prevData, ...data })));
  }, [params]);

  return (
    <>
      <Header />
      <PaginaAnuncio data={data} />
      <TituloPagAnun data={data}></TituloPagAnun>
      <CaracteristicasImovel data={data} />
    </>
  );
}
