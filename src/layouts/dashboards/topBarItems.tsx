import { TopBarMenuItem } from '../../interfaces/dashboard/topBar/TopBar';
import * as DASHBOARD_PATHS from '../../router/paths/dashboard_paths';

export const topBarItems: TopBarMenuItem[] = [
    { label: 'Inicio', url: DASHBOARD_PATHS.PATH_HOME },
    { label: 'Consultas', url: DASHBOARD_PATHS.PATH_ACCOUNT },
    { label: 'Ventas', url: DASHBOARD_PATHS.PATH_APPOINTMENTS },
    { label: 'Administración', url: DASHBOARD_PATHS.PATH_ADMINISTRATION },
    { label: 'Configuración', url: DASHBOARD_PATHS.PATH_DOCTORS }    
];