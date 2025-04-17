
// export default MunicipalitySelector;
import React, { useEffect, useState } from 'react';
import { IMunicipality } from '../../interfaces/dashboard/locations/ILocations';
import { IMunicipalitySelectorProps } from '../../interfaces/generalInputs/IInputs';
import { LocationsService } from '../../services/locations/LocationsService';
import CustomSelect from '../../features/dashboard/components/multiSelect/CustomSelect';

const MunicipalitySelector: React.FC<IMunicipalitySelectorProps> = ({ stateId, value, onChange, disabled }) => {
    const [municipalities, setMunicipalities] = useState<IMunicipality[]>([]);
    const [loading, setLoading] = useState<boolean>(false); // Estado de carga

    useEffect(() => {
        const fetchMunicipalities = async () => {
            if (stateId) {
                setLoading(true); // Iniciar carga
                try {
                    const response = await LocationsService.getMunicipalitiesByStateId(stateId);
                    setMunicipalities(response.data);
                } catch (error) {
                    console.error('Error fetching municipalities:', error);
                } finally {
                    setLoading(false); // Finalizar carga
                }
            } else {
                setMunicipalities([]); // Limpiar municipios si no se selecciona un estado
            }
        };

        fetchMunicipalities();
    }, [stateId]);

    // Convertir los municipios a la forma que espera CustomSelect
    const municipalityOptions = municipalities.map(municipality => ({
        value: municipality.id,
        label: municipality.name,
    }));

    // Convertir el valor en una opción, si no está en municipalityOptions, usa null
    const selectedOption = municipalityOptions.find(option => option.value === value) || null;

    return (
        <div className="relative">
            <CustomSelect
                name="municipalityId"
                value={selectedOption}
                onChange={option => onChange({ target: { name: 'municipalityId', value: option ? option.value : '' } })}
                options={municipalityOptions}
                placeholder="Seleccione un municipio"
                label="Municipio"
                disabled={disabled || loading}
                loading={loading}
            />
        </div>
    );
};

export default MunicipalitySelector;


