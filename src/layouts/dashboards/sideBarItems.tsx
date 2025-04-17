import { fas } from '@fortawesome/free-solid-svg-icons';
import * as DASHBOARD_PATHS from '../../router/paths/dashboard_paths';
import { SideBarMenuItem } from '../../interfaces/dashboard/sideBars/SideBar';

export const sideBarItems: SideBarMenuItem[] = [
    { label: 'Inicio', icon: fas.faHome, url: DASHBOARD_PATHS.PATH_HOME },
    { label: 'Cuenta', icon: fas.faIdBadge, url: DASHBOARD_PATHS.PATH_ACCOUNT },
    { label: 'Citas', icon: fas.faCalendar, url: DASHBOARD_PATHS.PATH_APPOINTMENTS },
    { label: 'Pacientes', icon: fas.faNotesMedical, url: DASHBOARD_PATHS.PATH_PATIENTS },
    { label: 'Doctores', icon: fas.faUserDoctor, url: DASHBOARD_PATHS.PATH_DOCTORS },
    { label: 'Referentes', icon: fas.faComments, url: DASHBOARD_PATHS.PATH_REFERENTS },
    { label: 'Demos', icon: fas.faSlash, url: DASHBOARD_PATHS.PATH_DEMOS },
];