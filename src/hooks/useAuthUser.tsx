import { useSelector } from 'react-redux';
import { selectAuthUser } from '../slices/authSlice';
import { IAuthUser } from '../interfaces/auth/User4Auth';

const useAuthUser = (): IAuthUser => {
    return useSelector(selectAuthUser);
};

export default useAuthUser;