
import React, { useEffect, useState } from 'react';
import CustomSelect from '../../features/dashboard/components/multiSelect/CustomSelect';
import { ISpecialtlyProps } from '../../interfaces/generalInputs/IInputs';
import { ISelectedProps } from '../../interfaces/generalInputs/IInputs';
import { SpecialtiesService } from '../../services/specialties/SpecialtiesService';

const SpecialtiesSelector: React.FC<ISpecialtlyProps> = ({ value, onChange, disabled }) => {
    const [specialties, setSpecialties] = useState<ISelectedProps[]>([]);
    const [loading, setLoading] = useState<boolean>(false); // Estado de carga

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                setLoading(true); // Iniciar carga
                const response = await SpecialtiesService.getSpecialties();
                setSpecialties(response.data);
            } catch (error) {
                console.error('Error fetching specialties:', error);
            } finally {
                setLoading(false); // Finalizar carga
            }
        };

        fetchCountries();
    }, []);

    // Convertir los países a la forma que espera CustomSelect
    const countryOptions = specialties.map(country => ({
        value: country.value,
        label: country.label,
    }));

    // Convertir el valor en una opción, si no está en countryOptions, usa null
    const selectedOption = countryOptions.find(option => option.value === value) || null;



    return (
        <div className='relative'>
            <CustomSelect
                name="specialtlyId"
                value={selectedOption}
                onChange={option => onChange({ target: { name: 'specialtlyId', value: option ? option.value : '' } })}
                options={countryOptions}
                disabled={disabled || loading}
                loading={loading}
                placeholder="Todas las especialidades"
                customStyles={{
                    control: (provided) => ({
                        ...provided,
                        // maxHeight: '10px', // Ajusta el minHeight aquí
                        height: '10px !important', // Ajusta la altura del control aquí
                        minHeight: '38px',
                        marginLeft: '5px', 
                    }),
                    menu: (provided) => ({
                        ...provided,
                        zIndex: 9999,
                    }),
                }}
            />
        </div>

    );
};

export default SpecialtiesSelector;