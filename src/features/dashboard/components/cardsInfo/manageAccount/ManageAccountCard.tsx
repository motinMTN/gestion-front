import { Link } from "react-router-dom";
import { IManageAccountCardViewProps } from "../../../../../interfaces/dashboard/cardsInfo/ManageAccountCard";
import "./ManageAccountCard.scss";

function ManageAccountCard({ manageAccountCard }: IManageAccountCardViewProps) {
  return (
    // <Link to={manageAccountCard?.path ?? '/#!'} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-4">
    //   <div className="general-info-container bg-white p-4 rounded-lg shadow-md">
    //     <div className="img-container md:w-1/4 pr-4 pl-4">
    //       <img src={manageAccountCard.img_url} className="card-image" width="100%" alt={manageAccountCard.img_url} />
    //     </div>
    //     <div className="info-container md:w-3/4 pr-4 pl-4">
    //       <span className="block text-lg font-semibold">{manageAccountCard.title}</span>
    //       <span className="block text-sm text-gray-600">{manageAccountCard.description}</span>
    //     </div>
    //   </div>
    // </Link>


    <Link to={manageAccountCard?.path ?? '/#!'} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-4">
      <div className="general-info-container bg-white p-4 rounded-lg shadow-md">
        <div className="img-container md:w-1/4 pr-4 pl-4">
          <img src={manageAccountCard.img_url} className="card-image" width="100%" alt={manageAccountCard.img_url} />
        </div>
        <div className="info-container md:w-3/4 pr-4 pl-4">
          <span className="block text-lg font-semibold">{manageAccountCard.title}</span>
          <span className="block text-sm text-gray-600">{manageAccountCard.description}</span>
        </div>
      </div>
    </Link>

  );
}

export default ManageAccountCard