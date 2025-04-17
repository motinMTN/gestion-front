import { useState } from "react";
import { PropsLogin } from "../../../../interfaces/auth/PropsLogin";
import { useNavigate } from 'react-router-dom';
import { Input } from '@heroui/react';
import { EyeSlashFilledIcon } from "../../../../assets/icons/EyeSlashFilledIcon";
import { EyeFilledIcon } from "../../../../assets/icons/EyeFilledIcon";
import './Login.css';
import logo from '../../../../assets/img/logo.png';

const LoginHtml = (props: PropsLogin) => {
  const handleSubmit = props.handleSubmit;  
  const handleClear = props.handleClean;
  const handleClientValidation = props.handleClientValidation;
  const navigate = useNavigate();
  const errors = props.errors;
  const clientErrors = props.clientErrors;

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleClick = () => {
    navigate('/forgot-password');
  };

  return (
    <div className="w-full max-w-xs">
      <div className="text-center mb-4">
        <img
          className="max-w-full h-auto"
          src={logo}
          alt="logo"
        />
      </div>
      <form onSubmit={handleSubmit} autoComplete="off" className="font-color-login bc-login px-8 pt-6 pb-8 mb-4 mt-4">

        {errors.credentials &&
          <div id="console" className="clearfix"><div className="messages error">
            <h2 className="element-invisible">Mensaje de error</h2>
            Lo sentimos. No reconocemos el nombre de usuario o la contraseña. <button className="button-pw" onClick={() => handleClick()}>¿Olvidó su contraseña?</button></div>
          </div>
        }

        <div className="mb-4">
          <Input
              fullWidth
              isClearable
              color={errors.email || clientErrors.email ? "danger" : "primary"}
              isInvalid={!!(errors.email || clientErrors.email)}
              errorMessage={clientErrors.email || errors.email}
              name="email"
              type="email"
              required
              isRequired
              label="Email"
              radius="none"
              autoFocus
              onChange={handleClientValidation}
              onClear={() => handleClear('email')}
              className="max-w-xs"
          />
        </div>
        <div className="mb-6">
          <Input
            fullWidth
            color={errors.password || clientErrors.password ? "danger" : "primary"}
            isInvalid={!!(errors.password || clientErrors.password)}
            errorMessage={clientErrors.password || errors.password}
            name="password"
            label="Contraseña"
            endContent={
              <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                {isVisible ? (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            onChange={handleClientValidation}
            required
            isRequired
            type={isVisible ? "text" : "password"}
            radius="none"
            className="max-w-xs"
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-button text-white py-2 px-4 focus:outline-none focus:shadow-outline _button"
            type="submit">
            INICIAR SESIÓN
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginHtml;
