import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../../../slices/authSlice";
import { AuthCard } from "../authCard/AuthCard";
import { AxiosError } from "axios";
import { setLoading } from "../../../../slices/uiSlice";
import { ApiResponse } from "../../../../interfaces/response/ApiResponse";
import { handleLoginErrors } from "../../../../helpers/handleLoginErrors";
import { UsersService } from "../../../../services/users/UsersService";
import RegisterHtml from "./RegisterHtml";


const Register: React.FC = () => {
  const [auth, setAuth] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try {
        console.log(auth);
      const resp = await UsersService.createUser(auth);
      console.log(resp);
      if (resp.success) {
        const user_data = { ...resp.data, isAuthenticated: true };
        dispatch(setUser(user_data));
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
    setAuth({
      ...auth,
      [e.target.name]: e.target.value

    });
  };

  return (
    <AuthCard>
      <RegisterHtml handleSubmit={handleSubmit} handleChange={handleChange} errors={errors} />
    </AuthCard>
  );
};

export default Register;