import { Link } from "react-router-dom";
import { CardViewProps } from "../../../../interfaces/dashboard/topBar/TopBar";
import { LogoutButton } from "../../../../features/auth/components/logout/LogoutButton";
import "./CardViewSession.scss"

export default function CardViewSession({ card }: CardViewProps) {  
  return (
    <div className="card-view-session">
      <div className="general-info-container flex">
        <div className="img-container md:w-1/4 pr-4 pl-4">
          <img src={card.photo_url} className="profile_photo" width="100%" alt={card.title} />
        </div>
        <div className="info-container md:w-3/4 pr-4 pl-4 flex flex-col">          
          <span className="info-name">{card.display_name}</span>
          <span className="info-email">{card.email}</span>
        </div>
      </div>
      <hr className="separador" />
      <div className="actions-container flex flex-col">
        <Link to={card.url || '/'} className="action-item">Gestionar cuenta</Link>
        <LogoutButton />
      </div>
    </div>
  );
}