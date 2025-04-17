import Title from "../../../../components/dashboards/titles/Title"
import GeneralInfoAccountCard from "../../components/cardsInfo/configurationCard/GeneralInfoAccountCard"
import avatar from "../../../../assets/img/avatar.jpg";
import { InfoAccountCardProps, OptionItemProps } from "../../../../interfaces/dashboard/cardsInfo/InfoAccountCardProps";
import { fas } from "@fortawesome/free-solid-svg-icons";

const Account = () => {

  const InfoAccountCard: InfoAccountCardProps = {
    display_name: "Gina Tapia",
    email: "gina.herrera@gmail.com",
    photo_url: avatar,
    phone: "555 715 0125",
  }

  const optionsAccount: OptionItemProps[] = [
    {
      label: "Editar",
      icon: fas.faEdit,
      dialogName: "editAccount"
    },
    {
      label: "Cambiar contraseña",
      icon: fas.faUnlock,
      dialogName: "editPassword"
    }
  ]

  return (
    <>
      {/* <Title label="Configuración de cuenta" />
      <div className="d-flex custom-row">
        <GeneralInfoAccountCard card={InfoAccountCard} options={optionsAccount}/>
      </div> */}

      <Title label="Configuración de cuenta" />
      <div className="flex custom-row">
        <GeneralInfoAccountCard card={InfoAccountCard} options={optionsAccount} />
      </div>
    </>
  )
}

export default Account