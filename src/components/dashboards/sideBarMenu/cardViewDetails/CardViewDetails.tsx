// import { Link } from "react-router-dom";
// import { classNames } from "../../../../utils/classes";
// import "../../styles/sideBarMenu/CardView.scss"
// import { InfoAccountCardProps } from "../../../../interfaces/dashboard/cardsInfo/InfoAccountCardProps";

// export default function CardViewDetails(card:InfoAccountCardProps, isOpen:boolean)  {
//   return (
//     <div className="SideBarMenuCardView">
//       <img src={card.photo_url} className="profile_photo" width="100%" alt={card.title} />
//       <div className={classNames('profile_info', isOpen ? '' : 'collapsed')}>
//         <div className="name">{card.display_name}</div>
//         <div className="title">{card.title}</div>
//         <div className="url">
//           <Link to={card.url || '/'}>Ir al perfil</Link>
//         </div>
//       </div>
//     </div>

//   );
// }