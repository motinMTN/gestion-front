import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AuthCard } from "../authCard/AuthCard";
import { AxiosError } from "axios";
import { setLoading } from "../../../../slices/uiSlice";
import { ApiResponse } from "../../../../interfaces/response/ApiResponse";
import { handleLoginErrors } from "../../../../helpers/handleLoginErrors";
import { UsersService } from "../../../../services/users/UsersService";
import FormResetPasswordHtml from "./FormResetPasswordHtml";
import { paramsResetPasswordFail, paramsResetPasswordSuccess } from "../../../../helpers/AlertDialog/AlertParams/ForgotPasswordAlerts";
import useAlert from "../../../../hooks/useAlert";


const FormResetPassword: React.FC = () => {
  const params = useParams();
  const swal2 = useAlert();
  const [resetPasswordData, setResetPasswordData] = useState({
    token: params.token || '',
    email: params.email || '',
    password: '',
    password_confirmation: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try {      
      const resp = await UsersService.resetUserPassword(resetPasswordData);
      if (resp.success && resp.status === 200) {        
        swal2({
          ...paramsResetPasswordSuccess,
          onConfirm: () => navigate('/login'),
        });
      }
    } catch (error) {      
      const err = error as AxiosError<ApiResponse>;
      const newErrors = handleLoginErrors(err);
      setErrors(newErrors);
      swal2({
        ...paramsResetPasswordFail
      });
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLFormElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setResetPasswordData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };


  return (
    <AuthCard>
      <FormResetPasswordHtml handleSubmit={handleSubmit} handleChange={handleChange} errors={errors} />
    </AuthCard>
  );
};

export default FormResetPassword;