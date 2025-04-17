import { useState, useEffect } from 'react';
import { PropertiesService } from '../../../../services/properties/PropertiesService';
import TextField from '@mui/material/TextField';

interface Properties {
    id: number;
    name: string;
    variable_name: string;
    property_type_id: number;
}

const PropertyInputList: React.FC = () => {
    const [data, setData] = useState<Properties[]>([]);
    const [someValue, setSomeValue] = useState('');


    useEffect(() => {

        const fetchData = async () => {

            try {
                const response = await PropertiesService.getProperties();
                console.log('responses:', response);

                // Verifica que la respuesta contiene las propiedades esperadas
                if (response) {
                    setData(response.data);
                } else {
                    console.error('La respuesta de la API no tiene el formato esperado.', response);
                }
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            } finally {
            }
        };

        fetchData(); // Fetch data for the first page initially
    }, []);

    return (

        <div className="mb-4">
            {data.map((item) => (

                <div key={item.id}>
                    <label className="block  mb-2">
                        {item.name}
                        <span className="form-required" title="Este campo es obligatorio."> *</span>
                    </label>

                    {/* Renderiza el campo basado en el tipo de propiedad */}
                    {(() => {
                        switch (item.property_type_id) {
                            case 5:
                                return (
                                    <input
                                        type="color"
                                        id={item.variable_name} // Asegúrate de que cada id sea único
                                        name={item.variable_name}
                                        value="#FFFFFF"
                                    />
                                );

                            case 4:
                                return (
                                    <input
                                        type="file"
                                        id={item.variable_name}
                                        name={item.variable_name}
                                    />
                                );

                            default:
                                return (
                                    <TextField
                                        autoFocus
                                        //className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id={item.variable_name}
                                        name={item.variable_name}
                                        type="text"
                                        fullWidth
                                        variant="standard"
                                        value={someValue}
                                        onChange={(e) => setSomeValue(e.target.value)}
                                    />
                                );
                        }
                    })()}
                </div>
            ))}

        </div>

    );
};

export default PropertyInputList;
