import { PropsResetPassword } from "../../../../interfaces/auth/PropsResetPassword";
import logo from "../../../../assets/img/logo.png";

const ForgotPasswordHtml = (props: PropsResetPassword) => {
  const handleSubmit = props.handleSubmit;
  const handleChange = props.handleChange;  
  const errors = props.errors;


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
        
        <h1 className="main-title">Recuperar contraseña</h1>
        {errors.credentials &&
          <div id="console" className="clearfix"><div className="messages error">
            <h2 className="element-invisible">Mensaje de error</h2>
            Lo sentimos. El correo ingresado no es correcto.</div>
          </div>
        }
        <div className="mb-4">
          <label className="block  mb-2">
            Correo electrónico 
            <span className="form-required" title="Este campo es obligatorio."> *</span>
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="email"
            autoFocus
            type="email"
            placeholder=""
            onChange={e => handleChange && handleChange(e)}
          />
          {/* {errors.email && <span className="error">{errors.email}</span>} */}
        </div>
        {/* {errors.credentials && <span className="error">{errors.credentials}</span>} */}
        <div className="flex items-center justify-between">
          <button className="bg-button text-white py-2 px-4 focus:outline-none focus:shadow-outline _button"
            type="submit">
            ENVIAR INSTRUCCIONES
          </button>
        </div>
      </form>
    </div>


  );
}

export default ForgotPasswordHtml;