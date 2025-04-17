
// export default NeighborhoodSelector;
import React, { useEffect, useState } from 'react';
import { INeighborhood } from '../../interfaces/dashboard/locations/ILocations';
import { INeighborhoodSelectorProps } from '../../interfaces/generalInputs/IInputs';
import { LocationsService } from '../../services/locations/LocationsService';
import CustomSelect from '../../features/dashboard/components/multiSelect/CustomSelect';

const NeighborhoodSelector: React.FC<INeighborhoodSelectorProps> = ({ postalCodeId, value, onChange, disabled }) => {
    const [neighborhoods, setNeighborhoods] = useState<INeighborhood[]>([]);
    const [loading, setLoading] = useState<boolean>(false); // Estado de carga

    useEffect(() => {
        const fetchNeighborhoods = async () => {
            if (postalCodeId) {
                setLoading(true); // Iniciar carga
                try {
                    const response = await LocationsService.getNeighborhoodsByPostalCodeId(postalCodeId);
                    setNeighborhoods(response.data);
                } catch (error) {
                    console.error('Error fetching neighborhoods:', error);
                } finally {
                    setLoading(false); // Finalizar carga
                }
            } else {
                setNeighborhoods([]); // Limpiar barrios si no se selecciona un código postal
            }
        };

        fetchNeighborhoods();
    }, [postalCodeId]);

    // Convertir los barrios a la forma que espera CustomSelect
    const neighborhoodOptions = neighborhoods.map(neighborhood => ({
        value: neighborhood.id,
        label: neighborhood.name, // O el campo que deseas mostrar
    }));

    // Convertir el valor en una opción, si no está en neighborhoodOptions, usa null
    const selectedOption = neighborhoodOptions.find(option => option.value === value) || null;

    return (
        <div className="relative">
            
            <CustomSelect
                name="neighborhoodId"
                value={selectedOption}
                onChange={option => onChange({ target: { name: 'neighborhoodId', value: option ? option.value : '' } })}
                options={neighborhoodOptions}
                placeholder="Seleccione una colonia"
                label="Colonia"
                disabled={disabled || loading}
                loading={loading}
            />
        </div>
    );
};

export default NeighborhoodSelector;

