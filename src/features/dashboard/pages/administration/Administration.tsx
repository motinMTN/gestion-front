import { IManageAccountCard } from "../../../../interfaces/dashboard/cardsInfo/ManageAccountCard";
import Title from "../../../../components/dashboards/titles/Title";
import account_icon from "../../../../assets/dashboards/icons/account_icon.svg"
import suscription_icon from "../../../../assets/dashboards/icons/suscription_icon.svg"
import bills_icon from "../../../../assets/dashboards/icons/bills_icon.svg"
import ManageAccountCard from "../../components/cardsInfo/manageAccount/ManageAccountCard";
import * as DASHBOARD_PATHS from "../../../../router/paths/dashboard_paths";

function Administration() {

  const manageAccountsCards: IManageAccountCard[] = [
    {
      img_url: account_icon,
      title: "Sucursales",
      description: "Configuración de cuenta",
      path: DASHBOARD_PATHS.PATH_BRANCHES
    },
    {
      img_url: suscription_icon,
      title: "Suscripción",
      description: "Estado de suscripción"
    },
    {
      img_url: bills_icon,
      title: "Facturas",
      description: "Descarga tus facturas"
    }
  ]

  return (
    <>
      {/* <Title label="Gestionar cuenta"/>
      <div className="d-flex custom-row">
        {
          manageAccountsCards.map((manageAccountCard, index) => (
            <ManageAccountCard key={index} manageAccountCard={manageAccountCard} />
          ))
        }
      </div> */}

      <Title label="Gestionar cuenta" />
      <div className="flex flex-wrap -mx-4">
        {
          manageAccountsCards.map((manageAccountCard, index) => (
            <ManageAccountCard key={index} manageAccountCard={manageAccountCard} />
          ))
        }
      </div>
    </>
  );
}

export default Administration;