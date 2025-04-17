
import React, { useEffect, useState } from 'react';
import { IState } from '../../interfaces/dashboard/locations/ILocations';
import { IStateSelectorProps } from '../../interfaces/generalInputs/IInputs';
import { LocationsService } from '../../services/locations/LocationsService';
import CustomSelect from '../../features/dashboard/components/multiSelect/CustomSelect';

const StateSelector: React.FC<IStateSelectorProps> = ({ countryId, value, onChange, disabled }) => {
    const [states, setStates] = useState<IState[]>([]);
    const [loading, setLoading] = useState<boolean>(false); // Estado de carga

    useEffect(() => {
        const fetchStates = async () => {
            if (countryId) {
                setLoading(true); // Iniciar carga
                try {
                    const response = await LocationsService.getStatesByCountryId(countryId);
                    setStates(response.data);
                } catch (error) {
                    console.error('Error fetching states:', error);
                } finally {
                    setLoading(false); // Finalizar carga
                }
            } else {
                setStates([]); // Limpiar estados si no se selecciona un país
            }
        };

        fetchStates();
    }, [countryId]);

    // Convertir los estados a la forma que espera CustomSelect
    const stateOptions = states.map(state => ({
        value: state.id,
        label: state.name,
    }));

    // Convertir el valor en una opción, si no está en stateOptions, usa null
    const selectedOption = stateOptions.find(option => option.value === value) || null;

    return (
        <div className="relative">
            <CustomSelect
                name="stateId"
                value={selectedOption}
                onChange={option => onChange({ target: { name: 'stateId', value: option ? option.value : '' } })}
                options={stateOptions}
                placeholder="Seleccione un estado"
                label="Estado"
                disabled={disabled || loading}
                loading={loading}
            />
        </div>
    );
};

export default StateSelector;




