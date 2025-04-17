import React from 'react';
import Select from 'react-select';
import SpinnerSelect from '../../../../components/spinner/SpinnerSelect';



interface OptionType {
    value: string | number;
    label: string;
}

interface CustomSelectProps {
    name: string;
    value?: OptionType | null;
    onChange: (selectedOption: OptionType | null) => void;
    options: OptionType[];
    placeholder?: string;
    label?: string;
    isMulti?: boolean;
    disabled?: boolean; // Propiedad opcional para habilitar/deshabilitar
    loading?: boolean; // Propiedad opcional para mostrar spinner al seleccionar una opción
    customStyles?: any; // Agregado para estilos personalizados
}

const CustomSelect: React.FC<CustomSelectProps> = ({
    name,
    value,
    onChange,
    options,
    placeholder = "Seleccione...",
    label,
    isMulti = false,
    disabled = false,
    loading = false, // Propiedad opcional para mostrar spinner al seleccionar una opción
    customStyles = {}, // Inicializa con un objeto vacío por defecto
}) => {
    return (
        <div className="mb-6 input-container">
            {label && <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2">{label}</label>}

            <div className='relative'>
                {/* Spinner con alto z-index */}
                {loading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10">
                        <SpinnerSelect />
                    </div>
                )}

                <Select
                    name={name}
                    value={value}
                    onChange={onChange}
                    options={options}
                    placeholder={placeholder}
                    isMulti={isMulti}
                    getOptionLabel={option => option.label}
                    getOptionValue={option => option.value.toString()}
                    className="basic-single"
                    classNamePrefix="select"
                    isDisabled={disabled}
                    styles={{
                        ...customStyles, // Aplica los estilos personalizados
                        control: (provided) => ({
                          ...provided,
                        minHeight: '3rem', // Valor predeterminado para minHeight
                        borderRadius: '8px',
                          ...customStyles.control, // Permite sobrescribir minHeight desde customStyles
                        }),
                        ...customStyles, // Permite sobrescribir cualquier otra parte desde customStyles
                      }}
                />
            </div>

        </div>
    );
};

export default CustomSelect;

