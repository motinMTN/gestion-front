import avatar from '../assets/img/avatar.jpg';
import { InfoAccountCardProps } from '../interfaces/dashboard/cardsInfo/InfoAccountCardProps';
import useAuthUser from './useAuthUser';

const useUserCard = (): InfoAccountCardProps => {
    const authUser = useAuthUser();

    return {
        display_name: authUser.user.name,
        email: authUser.user.email,
        title: 'Dr.Ingeniero',
        photo_url: avatar,
        url: '/',
    };
};

export default useUserCard;