import { PropsRegister } from "../../../../interfaces/user/PropsRegister";
import PropertyInputList from "./PropertiesHtml";
//import logo from "../../../../assets/img/logo.png";
//import './Login.css'; // se puede incluir un css en especifico


const DistributorFormHtml = (props: PropsRegister) => {
    const handleSubmit = props.handleSubmit;
    const handleChange = props.handleChange;
    
    const errors = props.errors;

    return (

        // <div className="w-full max-w-xs">
        //   <div className="text-center mb-4">

        //   </div>

        // </div>

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
                    Dominio
                    <span className="form-required" title="Este campo es obligatorio."> *</span>
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="domain"
                    autoFocus
                    type="domain"
                    placeholder=""
                    onChange={e => handleChange(e)}
                />
                {errors.domain && <span className="error">{errors.domain}</span>}
            </div>

            {/* <PropertyInputList /> */}

            {/* {errors.credentials && <span className="error">{errors.credentials}</span>} */}
            <div className="flex items-center justify-between">
                <button className="bg-button text-white py-2 px-4 focus:outline-none focus:shadow-outline _button"
                    type="submit">
                    Agregar
                </button>
            </div>

            
            
        </form>

    );
}

export default DistributorFormHtml;