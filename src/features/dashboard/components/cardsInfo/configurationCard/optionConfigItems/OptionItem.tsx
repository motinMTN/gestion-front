import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { OptionItemViewProps } from "../../../../../../interfaces/dashboard/cardsInfo/InfoAccountCardProps"
import "./OptionItem.scss"
// import { Link } from "react-router-dom"

const OptionItem = ({ optionItem, openDialog }: OptionItemViewProps) => {
  return (
    <div className="option-item" onClick={openDialog}>
      {typeof optionItem.icon === 'string' ? (
        <img className="icon-item" src={optionItem.icon} alt={optionItem.label} />
      ) : (
        <FontAwesomeIcon className="icon-item" icon={optionItem.icon} />
      )}
      {/* <Link to={optionItem.url || '/'} className="label-item">{optionItem.label}</Link> */}
      <span className="label-item" >{optionItem.label}</span>
    </div>
  )
}

export default OptionItem