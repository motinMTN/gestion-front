import React, { useEffect, useState } from "react";
import './BranchesList.css';
import { useNavigate } from 'react-router-dom';
import BranchesDT from "../../components/dataTables/BranchesDT";

interface Branches {
    id: number;
    name: string;
    appointment: boolean;
    city: string;
    personal: number;
    lastUpdate: Date;
}

const BranchesList = () => {
    const [branches, setBranches] = useState<Branches[]>([]);
    const [id, setId] = useState<number | null>(null);
    const [name, setName] = useState('');
    const [appointment, setAppointment] = useState(false);
    const [city, setCity] = useState('');
    const [personal, setPersonal] = useState('');
    const [lastUpdate, setLastUpdate] = useState<Date | null>(null);
    const [operation, setOperation] = useState<number | null>(null);
    const [title, setTitle] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedSucursal, setSelectedSucursal] = useState<Branches | null>(null);
    const navigate = useNavigate();


  
    useEffect(() => {
        getSucursales();
    }, []);

    const getSucursales = async () => {
        try {
            // Simulación de una respuesta de API
            const response = [
                { id: 1, name: 'Sucursal 1', appointment: true, city: 'Monterrey', personal: 4, lastUpdate: new Date() },
                { id: 2, name: 'Sucursal 2', appointment: false, city: 'Guadalajara', personal: 9, lastUpdate: new Date() },
                { id: 3, name: 'Sucursal 3', appointment: true, city: 'Puebla', personal: 6, lastUpdate: new Date() }
            ];
            setBranches(response);
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
    };

    const openModal = (sucursal: Branches | null, operationType: number) => {
        if (sucursal) {
            setTitle('Editar Sucursal');
            setName(sucursal.name);
            setAppointment(sucursal.appointment);
            setCity(sucursal.city);
            setPersonal(sucursal.personal.toString());
            setLastUpdate(sucursal.lastUpdate);
            setId(sucursal.id);
            setSelectedSucursal(sucursal);
        } else {
            setTitle('Añadir Sucursal');
            setName('');
            setAppointment(false);
            setCity('');
            setPersonal('');
            setLastUpdate(null);
            setId(null);
            setSelectedSucursal(null);
        }
        setOperation(operationType);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSave = () => {
        if (operation === 1) {
            // Lógica para añadir sucursal
            const newSucursal: Branches = {
                id: branches.length + 1, // Genera un ID único para la nueva sucursal
                name,
                appointment,
                city,
                personal: parseInt(personal, 10),
                lastUpdate: new Date()
            };
            setBranches([...branches, newSucursal]);
        } else if (operation === 2 && selectedSucursal) {
            // Lógica para editar sucursal
            const updatedSucursals = branches.map(sucursal =>
                sucursal.id === selectedSucursal.id
                    ? { ...sucursal, name, appointment, city, personal: parseInt(personal, 10), lastUpdate: new Date() }
                    : sucursal
            );
            setBranches(updatedSucursals);
        }
        closeModal();
    };

    const handleDelete = (sucursalId: number) => {
        const filteredSucursals = branches.filter(sucursal => sucursal.id !== sucursalId);
        setBranches(filteredSucursals);
    };

    const handleClick = () => {
        navigate('/dashboard/branches/create'); // Redirige a la página de crear
    };    

    return (
        <div>
            <div className="container mx-auto p-4">
                <div className="flex mt-3 ml-4">
                    
                    <h1 className="main-title">Sucursales</h1>
                    <div className="w-full max-w-xs">
                        <div className="flex ">
                            <button className="text-gray-500 px-4 py-2 rounded-lg" 
                             onClick={handleClick}>
                                <i className="fa-solid fa-circle-plus "></i>
                            </button>
                            <div className="catalog-total">
                                <i className="fas fa-hospital"></i> 
                                <span className="span-total">9</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex mt-3 ml-4">
                    <div className="fieldset-wrapper">
                        <input type="submit" id="edit-actionviews-bulk-operations-delete-item" name="op" value="Elimnar sucursales" disabled className="delete-select" />
                    </div>
                </div>
                <div className="flex flex-col mt-3">
                    <div className="overflow-x-auto mx-4  ">
                        {/* <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-base font-medium text-black tracking-wider"></th>
                                    <th className="px-6 py-3 text-left text-base font-medium text-black tracking-wider">Nombre</th>
                                    <th className="px-6 py-3 text-left text-base font-medium text-black tracking-wider">Citas</th>
                                    <th className="px-6 py-3 text-left text-base font-medium text-black tracking-wider">Ciudad/Estado</th>
                                    <th className="px-6 py-3 text-left text-base font-medium text-black tracking-wider">Personal</th>
                                    <th className="px-6 py-3 text-left text-base font-medium text-black tracking-wider">Última actualización</th>
                                    <th className="px-6 py-3 text-left text-base font-medium text-black tracking-wider"></th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {branches.map((sucursal) => (
                                    <tr key={sucursal.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            <input className="vbo-table-select-all form-checkbox" type="checkbox" value="1" />
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{sucursal.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{sucursal.appointment ? <span className="pemite-citas-1" title="Elegible para reservación de citas en línea"></span> : <span className="pemite-citas-0" title="No es elegible para reservación de citas en línea"></span>}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{sucursal.city}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{sucursal.personal}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {sucursal.lastUpdate ? new Intl.DateTimeFormat('es-ES').format(new Date(sucursal.lastUpdate)) : 'N/A'}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <button className="text-gray-500 px-2 py-1 rounded-md shadow-sm cursor-pointer"onClick={() => handleEditClick(2)}>
                                                <i className="fa-solid fa-edit"></i>
                                            </button>
                                            <button
                                                className="bg-red-500 text-white px-2 py-1 rounded-md shadow-sm hover:bg-red-600 ml-2"
                                                onClick={() => handleDelete(sucursal.id)} // Llama a la función de eliminar
                                            >
                                                <i className="fa-solid fa-trash-alt"></i> Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table> */}
                        <BranchesDT />
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-75" onClick={closeModal}></div>
                    <div className="bg-white w-full max-w-md mx-auto rounded-lg shadow-lg relative z-10">
                        <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
                            <h5 className="text-lg font-semibold">{title}</h5>
                            <button
                                type="button"
                                className="text-white bg-transparent border-0"
                                onClick={closeModal}
                                aria-label="Close"
                            >
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                        <div className="p-4">
                            <div className="flex items-center mb-3">
                                <span className="inline-flex items-center justify-center w-8 h-8 text-white bg-gray-500 rounded-full">
                                    <i className="fa-solid fa-gift"></i>
                                </span>
                                <input
                                    type="text"
                                    id="name"
                                    className="ml-2 flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Nombre"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="flex items-center mb-3">
                                <label className="mr-2">Cita</label>
                                <input
                                    type="checkbox"
                                    checked={appointment}
                                    onChange={(e) => setAppointment(e.target.checked)}
                                />
                            </div>
                            <div className="flex items-center mb-3">
                                <label className="mr-2">Ciudad</label>
                                <input
                                    type="text"
                                    id="city"
                                    className="ml-2 flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Ciudad"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </div>
                            <div className="flex items-center mb-3">
                                <label className="mr-2">Personal</label>
                                <input
                                    type="number"
                                    id="personal"
                                    className="ml-2 flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Número de Personal"
                                    value={personal}
                                    onChange={(e) => setPersonal(e.target.value)}
                                />
                            </div>
                            <div className="flex justify-center mt-4">
                                <button
                                    className="_button text-white px-4 py-2 rounded-lg shadow-md"
                                    onClick={handleSave}
                                >
                                    <i className="fa-solid fa-floppy-disk"></i> Guardar
                                </button>
                            </div>
                        </div>
                        {/* <div className="p-4 flex justify-end">
                            <button
                                type="button"
                                className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600"
                                onClick={closeModal}
                            >
                                Cancelar
                            </button>
                        </div> */}
                    </div>
                </div>
            )}


        </div>
    );
};

export default BranchesList;

