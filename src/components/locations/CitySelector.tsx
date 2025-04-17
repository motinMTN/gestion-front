
// export default CitySelector;
import React, { useEffect, useState } from 'react';
import { ICity } from '../../interfaces/dashboard/locations/ILocations';
import { ICitySelectorProps } from '../../interfaces/generalInputs/IInputs';
import { LocationsService } from '../../services/locations/LocationsService';
import CustomSelect from '../../features/dashboard/components/multiSelect/CustomSelect';

const CitySelector: React.FC<ICitySelectorProps> = ({ municipalityId, value, onChange, disabled }) => {
    const [cities, setCities] = useState<ICity[]>([]);
    const [loading, setLoading] = useState<boolean>(false); // Estado de carga

    useEffect(() => {
        const fetchCities = async () => {
            if (municipalityId) {
                setLoading(true); // Iniciar carga
                try {
                    const response = await LocationsService.getCitiesByMunicipalityId(municipalityId);
                    setCities(response.data);
                } catch (error) {
                    console.error('Error fetching cities:', error);
                } finally {
                    setLoading(false); // Finalizar carga
                }
            } else {
                setCities([]); // Limpiar ciudades si no se selecciona un municipio
            }
        };

        fetchCities();
    }, [municipalityId]);

    // Convertir las ciudades a la forma que espera CustomSelect
    const cityOptions = cities.map(city => ({
        value: city.id,
        label: city.name,
    }));

    // Convertir el valor en una opción, si no está en cityOptions, usa null
    const selectedOption = cityOptions.find(option => option.value === value) || null;

    return (
        <div className="relative">
            <CustomSelect
                name="cityId"
                value={selectedOption}
                onChange={option => onChange({ target: { name: 'cityId', value: option ? option.value : '' } })}
                options={cityOptions}
                placeholder="Seleccione una ciudad"
                label="Ciudad"
                disabled={disabled || loading}
                loading={loading}
            />
        </div>
    );
};

export default CitySelector;
