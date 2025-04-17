import { IMedicalBranchCard } from "../../../../interfaces/dashboard/cardsInfo/MedicalBranchCard"
import { ICounterCard } from "../../../../interfaces/dashboard/cardsInfo/CounterCard";
import { IBlockInfo } from "../../../../interfaces/dashboard/blocksInfo/BlockInfo";
import referentes from "../../../../assets/dashboards/icons/referentes.png";
import iconCitas from "../../../../assets/dashboards/icons/citas.png";
import CounterCard from "../../components/cardsInfo/counterCard/CounterCard";
import MyCalendar from "../../components/calendar/full_Calendar";
import GeneralBlockInfo from "../../components/blocksInfo/generalBlockInfo";
import MedicalBranchCard from "../../components/cardsInfo/medicalBranchCard/MedicalBranchCard";
import LineGraphic from "../../components/graphics/LineGraphic";
import Title from "../../../../components/dashboards/titles/Title";
import UsersTable from "../../components/dataTables/UsersDT";
import UsersDT from "../../components/dataTables/UsersDT";
import BranchesDT from "../../components/dataTables/BranchesDT";

function Demos() {

  const counterCards: ICounterCard[] = [
    {
      id: "1",
      img_url: iconCitas,
      numerador: 4,
      divisor: 100,
      title: "Citas",
      url: "/",
    },
    {
      id: "2",
      img_url: iconCitas,
      numerador: 2,
      divisor: 10,
      title: "Pacientes",
      url: "/",
    },
    {
      id: "3",
      img_url: iconCitas,
      numerador: 5,
      divisor: 10,
      title: "Doctores",
      url: "/",
    },
    {
      id: "4",
      img_url: iconCitas,
      numerador: 7,
      divisor: 10,
      title: "Referentes",
      url: "/",
    }
  ]

  const blockInfo: IBlockInfo = {
    image: referentes,
    title: "Referentes",
    description: "Administra las empresas o doctores que refieren a los pacientes con los servicios de la práctica médica. Puedes asignar reglas de comisiones y llevar un mejor control en el seguimiento a los pacientes referidos.",
    footer: "Crea tu primer referente",
  }

  const medicalBranchesCards1: IMedicalBranchCard = {
    id: "1",
    available: true,
    thumbnails: [
      { id: 1, url: "https://placekitten.com/1024/768?image=0" },
      { id: 2, url: "https://placekitten.com/1024/768?image=1" },
      { id: 3, url: "https://placekitten.com/1024/768?image=2" },
      { id: 4, url: "https://placekitten.com/1024/768?image=3" },
    ],
    specialties: [
      { id: 5, name: "Ginecología" },
      { id: 6, name: "Pediatría" },
    ],
    location: "Aramberri 124, Centro. <br /> Monterrey, Nuevo León. México. C.P. 64000"
  }

  const medicalBranchesCards2: IMedicalBranchCard = {
    id: "2",
    available: false,
    thumbnails: [
      { id: 7, url: "https://placekitten.com/1024/768?image=4" },
      { id: 8, url: "https://placekitten.com/1024/768?image=5" },
      { id: 9, url: "https://placekitten.com/1024/768?image=6" },
      // { id: 10, url: "https://www.youtube.com/watch?v=3nQNiWdeH2Q" },
      // { id: 11, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" }
    ],
    specialties: [
      { id: 10, name: "Odontología" },
      { id: 11, name: "Ortopedia" },
    ],
    location: "Colosseo 126, Centro. <br /> Puebla, Puebla. México. C.P. 65000"
  }

  interface ChartData {
    fecha: string;
    venta: number;
    costo: number;
  }

  const chartData: ChartData[] = [
    { fecha: '19 May', venta: 4200, costo: 800 },
    { fecha: '20 May', venta: 3500, costo: 500 },
    { fecha: '21 May', venta: 4800, costo: 1350 },
    { fecha: '22 May', venta: 2640, costo: 640 },
    { fecha: '23 May', venta: 3810, costo: 1210 },
    { fecha: '24 May', venta: 5240, costo: 1800 },
    { fecha: '25 May', venta: 4750, costo: 750 },
  ];

  return (
    <>      
      <Title label="Algodonson" />
      <div className="content-body">
        <div className="flex flex-wrap  custom-row">
          {
            counterCards.map((counterCard) => (
              <CounterCard key={counterCard.id} counterCard={counterCard} />
            ))
          }
        </div>
        <div className="flex flex-wrap ">
          <MyCalendar />
        </div>
        <div className="flex flex-wrap  custom-row">
          <GeneralBlockInfo blockInfo={blockInfo} />
        </div>
        <div className="flex flex-wrap  custom-row">
          <UsersDT />          
        </div>
        <div className="flex flex-wrap  custom-row">
          <div className="md:w-1/3 pr-4 pl-4">
            <MedicalBranchCard medicalBranchCard={medicalBranchesCards1} />
          </div>
          <div className="md:w-1/3 pr-4 pl-4">
            <MedicalBranchCard medicalBranchCard={medicalBranchesCards2} />
          </div>
        </div>
        <div className="flex flex-wrap  custom-row">
          <LineGraphic data={chartData} />
        </div>
      </div>

    </>
  );
}

export default Demos;