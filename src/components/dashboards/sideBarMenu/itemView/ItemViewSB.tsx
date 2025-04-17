import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import { classNames } from "../../../../utils/classes";
import { ItemViewPropsSB } from "../../../../interfaces/dashboard/sideBars/SideBar";
import "./ItemViewSB.scss";

export default function ItemViewSB({ item }: ItemViewPropsSB) {
  const location = useLocation();

  return (
    <div className="SideBarMenuItemView">
      <Link className={classNames(location.pathname === item.url ? "active" : "")}  to={item.url}>
        {/* <div className={classNames("item_content", isOpen ? "" : "collapsed")}> */}
        <div className="item_content">
          <div className="icon">
            {typeof item.icon === 'string' ? (
              <img src={item.icon} alt={item.label} />
            ) : (
              <FontAwesomeIcon icon={item.icon} />
            )}
          </div>
          <span className="label">{item.label}</span>
        </div>
      </Link>
      {/* {!isOpen ? <div className="custom_tooltip">{item.label}</div> : ""} */}
    </div>
  );
}