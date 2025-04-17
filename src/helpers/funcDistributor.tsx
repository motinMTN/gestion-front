import { DistributorService } from "../services/distributors/DistributorService";
import { useDispatch } from "react-redux";
import { setDistributor } from "../slices/distributorSlice";
import { useEffect } from "react";

export const FuncDistributor = (url: string) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            let tenantName = url.split(".")[0].split("//")[1];
            if (tenantName === "localhost:5173/login" || tenantName === "localhost:5173/register" || tenantName === "localhost:5173/forgot-password") {
                tenantName = "default";
            }
            
            try {
                const response = await DistributorService.getDistributor(tenantName);
                console.log(response);
                dispatch(setDistributor(response.data));
            } catch (error) {
                console.error("Error fetching distributor:", error);
                
            }
        };

        fetchData();
    }, [url, dispatch]); 

};


