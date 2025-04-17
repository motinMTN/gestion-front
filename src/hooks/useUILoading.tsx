import { useSelector } from "react-redux";
import { selectLoading } from "../slices/uiSlice";

const useUILoading = () => {
    return useSelector(selectLoading);
};

export default useUILoading;