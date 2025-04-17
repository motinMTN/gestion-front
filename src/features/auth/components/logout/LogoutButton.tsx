import { clearUser } from '../../../../slices/authSlice';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../../../slices/uiSlice';
import "./Logout.css";
import { AuthService } from '../../../../services/auth/AuthService';
import useAlert from '../../../../hooks/useAlert';
import { paramsLogoutFail } from '../../../../helpers/AlertDialog/AlertParams/LoginAlerts';

export function LogoutButton() {
  const dispatch = useDispatch();
  const swal2 = useAlert();

  const handleLogout = async () => {        
    dispatch(setLoading(true));
    try {
      const resp = await AuthService.logout();
      if (resp.success) {
        dispatch(clearUser());        
      }
    } catch (error) {      
      swal2({ ...paramsLogoutFail });
    } finally {
      dispatch(setLoading(false));
    }    
  };

  return (
    <span className="logout_link action-item" onClick={handleLogout}>Cerrar sesión</span>
  );
}