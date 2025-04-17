import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AxiosError } from "axios";
import { setLoading } from "../../../../slices/uiSlice";
import { ApiResponse } from "../../../../interfaces/response/ApiResponse";
import { handleLoginErrors } from "../../../../helpers/handleLoginErrors";
import DistributorFormHtml from "./DistributorFormHtml";
import { DistributorService } from "../../../../services/distributors/DistributorService";
import useAuthUser from "../../../../hooks/useAuthUser";


const Distributor: React.FC = () => {
  const authUser = useAuthUser();
  const [distributor, setDistributor] = useState({ 
    name: '',
    domain: '',
    user_created: authUser.user.id,
    properties: [
      // { id: 0, value: '' }
    ]
   });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try {
        console.log(distributor);
      const resp = await DistributorService.createDistributor(distributor);
      console.log(resp);
      if (resp.success) {
        
        navigate('/dashboard/home');
      }
    } catch (error) {
      const err = error as AxiosError<ApiResponse>;
      const newErrors = handleLoginErrors(err);

      setErrors(newErrors);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLFormElement | HTMLInputElement>) => {
    setDistributor({
      ...distributor,
      [e.target.name]: e.target.value

    });
  };

  return (
    // <AuthCard>
      
    // </AuthCard>
    <DistributorFormHtml handleSubmit={handleSubmit} handleChange={handleChange} errors={errors} />
  );
};

export default Distributor;