import { Navigate } from 'react-router-dom';
import { PATH_LOGIN } from '../router/paths/general_paths';
import useAuthUser from '../hooks/useAuthUser';

interface AuthGuardProps{
  children: React.ReactNode;
}

const AuthGuard = ({children}: AuthGuardProps) => {  
  const authUser = useAuthUser();
  
  if (!authUser.isAuthenticated) {
    return <Navigate to={PATH_LOGIN} />
  }
  
  return <>{children}</>;
}

export default AuthGuard