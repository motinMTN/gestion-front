import { DashboardLayoutProps } from "../../interfaces/dashboard/DashboardLayoutProps";
import TopBarMenu from "../../components/dashboards/topBarMenu/TopBarMenu";
import SideBarMenu from "../../components/dashboards/sideBarMenu/SideBarMenu";
import "./Dashboard.scss";
import { sideBarItems } from "./sideBarItems";
import { topBarItems } from "./topBarItems";
import useUserCard from "../../hooks/useUserCard";

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const card = useUserCard();

  return (
    <>
      <main>
        <TopBarMenu items={topBarItems} card={card} />
        <div className="dashboard flex">
          <SideBarMenu items={sideBarItems} card={card} />
          <div className="dashboard_content w-full">
            <div className="container max-w-full mx-auto sm:px-4">
              <div className="content-body">
                {children}

              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );

};

export default DashboardLayout;
