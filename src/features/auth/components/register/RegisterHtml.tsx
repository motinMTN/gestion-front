import { PropsRegister } from "../../../../interfaces/user/PropsRegister";
import logo from "../../../../assets/img/logo.png";
//import './Login.css'; // se puede incluir un css en especifico

const RegisterHtml = (props: PropsRegister) => {
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

        <div className="mb-4">
          <label className="block  mb-2">
            Nombre
            <span className="form-required" title="Este campo es obligatorio."> *</span>
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="name"
            autoFocus
            type="name"
            placeholder=""
            onChange={e => handleChange(e)}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

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
            onChange={e => handleChange(e)}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="mb-6">
          <label className="block mb-2">
            Contraseña
            <span className="form-required" title="Este campo es obligatorio."> *</span>
          </label>
          <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            name="password"
            type="password"
            placeholder=""
            onChange={e => handleChange(e)}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <div className="mb-6">
          <label className="block mb-2">
            Contraseña
            <span className="form-required" title="Este campo es obligatorio."> *</span>
          </label>
          <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            name="password_confirmation"
            type="password"
            placeholder=""
            onChange={e => handleChange(e)}
          />
          {errors.password_confirmation && <span className="error">{errors.password_confirmation}</span>}
        </div>

        {errors.credentials && <span className="error">{errors.credentials}</span>}
        <div className="flex items-center justify-between">
          <button className="bg-button text-white py-2 px-4 focus:outline-none focus:shadow-outline _button"
            type="submit">
            REGISTRARME
          </button>
        </div>
      </form>
    </div>


  );
}

export default RegisterHtml;