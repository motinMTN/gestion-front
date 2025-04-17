
import React, { useEffect, useState } from 'react';
import { IPostalCode } from '../../interfaces/dashboard/locations/ILocations';
import { IPostalCodeSelectorProps } from '../../interfaces/generalInputs/IInputs';
import { LocationsService } from '../../services/locations/LocationsService';
import CustomSelect from '../../features/dashboard/components/multiSelect/CustomSelect';

const PostalCodeSelector: React.FC<IPostalCodeSelectorProps> = ({ municipalityId, value, onChange, disabled }) => {
    const [postalCodes, setPostalCodes] = useState<IPostalCode[]>([]);
    const [loading, setLoading] = useState<boolean>(false); // Estado de carga

    useEffect(() => {
        const fetchPostalCodes = async () => {
            if (municipalityId) {
                setLoading(true); // Iniciar carga
                try {
                    const response = await LocationsService.getPostalCodesByMunicipaltyId(municipalityId);
                    setPostalCodes(response.data);
                } catch (error) {
                    console.error('Error fetching postal codes:', error);
                } finally {
                    setLoading(false); // Finalizar carga
                }
            } else {
                setPostalCodes([]); // Limpiar códigos postales si no se selecciona un municipio
            }
        };

        fetchPostalCodes();
    }, [municipalityId]);

    // Convertir los códigos postales a la forma que espera CustomSelect
    const postalCodeOptions = postalCodes.map(postalCode => ({
        value: postalCode.id,
        label: postalCode.code, // O cualquier otro campo que desees mostrar
    }));

    // Convertir el valor en una opción, si no está en postalCodeOptions, usa null
    const selectedOption = postalCodeOptions.find(option => option.value === value) || null;

    return (
        <div className="relative">
            
            <CustomSelect
                name="postalCodeId"
                value={selectedOption}
                onChange={option => onChange({ target: { name: 'postalCodeId', value: option ? option.value : '' } })}
                options={postalCodeOptions}
                placeholder="Seleccione un código postal"
                label="Código Postal"
                disabled={disabled || loading}
                loading={loading}
            />
        </div>
    );
};

export default PostalCodeSelector;
