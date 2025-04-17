import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../../../slices/authSlice";
import { AuthService } from "../../../../services/auth/AuthService";
import { AuthCard } from "../authCard/AuthCard";
import { AxiosError } from "axios";
import { setLoading } from "../../../../slices/uiSlice";
import { handleLoginErrors } from "../../../../helpers/handleLoginErrors";
import LoginHtml from "./LoginHtml";
import { ApiResponse } from "../../../../interfaces/response/ApiResponse";
import { validateEmail, validatePassword } from "../../../../helpers/validationHelpers";

const Login: React.FC = () => {
  const [auth, setAuth] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [clientErrors, setClientErrors] = useState<{ [key: string]: string }>({email: "",password: ""});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(setLoading(true));
    try {
      const resp = await AuthService.login(auth) as ApiResponse<{ user: any; token: string }>;
      if (resp.success && typeof resp.data === 'object' && !Array.isArray(resp.data)) {
        const user_data = { 
          user: resp.data.user, 
          token: resp.data.token, 
          isAuthenticated: true 
        };
        dispatch(setUser(user_data));
        navigate('/dashboard/home');
      } else {
        setErrors({ credentials: 'Invalid credentials' });
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

      // Limpiar errores al cambiar el valor del input
      if (errors[e.target.name]) {
        setErrors({
          ...errors,
          [e.target.name]: ''
        });
      }
    };

  const handleClear = (field: string) => {
    setAuth(prevAuth => ({
      ...prevAuth,
      [field]: ''
    }));
    // Verifica si el campo es "email" y valida si está vacío
    if (field === "email") {
      const newErrors = { ...clientErrors };
      newErrors.email = validateEmail(''); // Validar campo vacío
      setClientErrors(newErrors);
    }
  };  

  const handleClientValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newErrors = { ...clientErrors };

    if (name === "email") {
      newErrors.email = validateEmail(value);
    } else if (name === "password") {
      newErrors.password = validatePassword(value);
    }

    handleChange(e); // Mantén el manejo del cambio de valores del estado principal
    setClientErrors(newErrors);
  };

  return (
    <AuthCard>
      <LoginHtml
        handleSubmit={handleSubmit}        
        errors={errors}
        clientErrors={clientErrors}
        handleClean={handleClear}
        handleClientValidation={handleClientValidation}
      />
    </AuthCard>
  );
};

export default Login;
