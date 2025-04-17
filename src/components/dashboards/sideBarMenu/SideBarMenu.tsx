import { SideBarMenuProps } from "../../../interfaces/dashboard/sideBars/SideBar";
import { classNames } from "../../../utils/classes";
import ItemViewSB from "./itemView/ItemViewSB";
import "./SideBarMenu.scss";

// export function SideBarMenu(props: SideBarMenuProps) o destructurados
function SideBarMenu({ items, card }: SideBarMenuProps) {

  return (
    <div className={classNames("SideBarMenu")}>      
      {
        items.map((item) => (
          <ItemViewSB key={item.label} item={item} />
        ))
      }
    </div>
  );
}

export default SideBarMenu;