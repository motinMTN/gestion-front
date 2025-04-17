import { useSelector } from 'react-redux';
import { selectDistributor } from '../slices/distributorSlice';

const useDistributorIn = () => {
    const distributor = useSelector(selectDistributor);
    return distributor;
};

export default useDistributorIn;
