
import React, { useEffect, useState } from 'react';
import { ICountry } from '../../interfaces/dashboard/locations/ILocations';
import { ICountrySelectorProps } from '../../interfaces/generalInputs/IInputs';
import { LocationsService } from '../../services/locations/LocationsService';
import CustomSelect from '../../features/dashboard/components/multiSelect/CustomSelect';

const CountrySelector: React.FC<ICountrySelectorProps> = ({ value, onChange, disabled }) => {
    const [countries, setCountries] = useState<ICountry[]>([]);
    const [loading, setLoading] = useState<boolean>(false); // Estado de carga

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                setLoading(true); // Iniciar carga
                const response = await LocationsService.getCountries();
                setCountries(response.data);
            } catch (error) {
                console.error('Error fetching countries:', error);
            } finally {
                setLoading(false); // Finalizar carga
            }
        };

        fetchCountries();
    }, []);

    // Convertir los países a la forma que espera CustomSelect
    const countryOptions = countries.map(country => ({
        value: country.id,
        label: country.name,
    }));

    // Convertir el valor en una opción, si no está en countryOptions, usa null
    const selectedOption = countryOptions.find(option => option.value === value) || null;



    return (
        <div className='relative'>
            <CustomSelect
                name="countryId"
                value={selectedOption}
                onChange={option => onChange({ target: { name: 'countryId', value: option ? option.value : '' } })}
                options={countryOptions}
                placeholder="Seleccione un país"
                label="País"
                disabled={disabled || loading}
                loading={loading}
            />
        </div>

    );
};

export default CountrySelector;



