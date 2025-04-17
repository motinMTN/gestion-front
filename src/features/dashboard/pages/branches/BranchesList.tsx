import { useState, useEffect } from "react";
import './BranchesList.css';
import { useNavigate } from 'react-router-dom';
import BranchesDT from "../../components/dataTables/BranchesDT";
import { PATH_BRANCH_CREATE } from "../../../../router/paths/dashboard_paths";
import { BranchesService } from "../../../../services/branches/BranchesService";
import { ApiResponse } from "../../../../interfaces/response/ApiResponse";
import { SpecialtiesService } from "../../../../services/specialties/SpecialtiesService";
import { ISelectedProps } from "../../../../interfaces/generalInputs/IInputs";

const BranchesList = () => {
    const [totalBranches, setTotalBranches] = useState<number | undefined>(0);
    const [specialties, setSpecialties] = useState<ISelectedProps[]>([]); // Estado para las especialidades
    const navigate = useNavigate();

    const fetchBranches = async (params: {
        page: number;
        per_page: number;
        sort_field: string;
        sort_order: 'asc' | 'desc';
        searchTerm?: string; // Agregado para búsqueda
    }) => {
        const response: ApiResponse = await BranchesService.getBranchesDT(params);
        setTotalBranches(response.totalRecords); // Actualiza el total de sucursales
        return response;
    };

    // Función para obtener especialidades
    const fetchSpecialties = async () => {
        try {
            const response = await SpecialtiesService.getSpecialties();
            console.log(response);
            setSpecialties(response.data); // Ajusta según el formato de la respuesta
        } catch (error) {
            console.error('Error al obtener especialidades:', error);
        }
    };

    useEffect(() => {
        fetchSpecialties(); // Obtén las especialidades cuando el componente se monte
    }, []);

    /*const handleDelete = (sucursalId: number) => {
        const filteredSucursals = branches.filter(sucursal => sucursal.id !== sucursalId);
        setBranches(filteredSucursals);
    };*/

    const handleClick = () => {
        navigate(PATH_BRANCH_CREATE); // Redirige a la página de crear
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
                                <span className="span-total">{totalBranches}</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="flex mt-3 ml-4">
                    <div className="fieldset-wrapper">
                        <input type="submit" id="edit-actionviews-bulk-operations-delete-item" name="op" value="Elimnar sucursales" disabled className="delete-select" />
                    </div>
                </div> */}
                <div className="flex flex-col mt-3">
                    <div className="overflow-x-auto mx-4">
                        <BranchesDT
                            fetchBranches={fetchBranches}
                            specialties={specialties}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BranchesList;