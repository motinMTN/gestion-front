import { Link, useLocation } from "react-router-dom";
import { classNames } from "../../../../utils/classes";
import { ItemViewPropsTB } from "../../../../interfaces/dashboard/topBar/TopBar";

export default function ItemViewTB({ item }: ItemViewPropsTB) {
    const location = useLocation();

    return (
        <div className="TopBarMenuItemView">
            <Link className={classNames(location.pathname === item.url ? "active" : "")} to={item.url}>                
                <div className="item_content">                    
                    <span className="label">{item.label}</span>
                </div>
            </Link>            
        </div>
    );
}