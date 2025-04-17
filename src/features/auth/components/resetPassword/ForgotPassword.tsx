import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AuthCard } from "../authCard/AuthCard";
import { AxiosError } from "axios";
import { setLoading } from "../../../../slices/uiSlice";
import { ApiResponse } from "../../../../interfaces/response/ApiResponse";
import { handleLoginErrors } from "../../../../helpers/handleLoginErrors";
import { UsersService } from "../../../../services/users/UsersService";
import useAlert from "../../../../hooks/useAlert";
import { paramsForgotPasswordFail, paramsForgotPasswordSuccess } from "../../../../helpers/AlertDialog/AlertParams/ForgotPasswordAlerts";
import { useNavigate } from "react-router-dom";
import ForgotPasswordHtml from "./ForgotPasswordHtml";


const ForgotPassword: React.FC = () => {
  const [reset, setReset] = useState({  email: '', domain: window.location.origin });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const dispatch = useDispatch();  
  const swal2 = useAlert();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try {        
      const resp = await UsersService.sendUserPasswordRecovery(reset);      
      if (resp.success) {
        swal2({
          ...paramsForgotPasswordSuccess,
          onConfirm: () => navigate('/login'),
        });
      } else {
        swal2({ ...paramsForgotPasswordFail });
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
    setReset({
      ...reset,
      [e.target.name]: e.target.value
    });
  };

  return (
    <AuthCard>
      <ForgotPasswordHtml handleSubmit={handleSubmit} handleChange={handleChange} errors={errors} />
    </AuthCard>
  );
};

export default ForgotPassword;