import BranchCreateForm from "./BranchCreateForm";
import { IBranch } from "../../../../interfaces/branches/IBranch";
import { BranchesService } from '../../../../services/branches/BranchesService';
import useAlert from "../../../../hooks/useAlert";
import { paramsBranchCreateSuccess } from "../../../../helpers/AlertDialog/AlertParams/BranchesAlerts";
import { useDispatch } from "react-redux";
import { setLoading } from "../../../../slices/uiSlice";
import { PATH_BRANCHES } from "../../../../router/paths/dashboard_paths";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import { ApiResponse } from "../../../../interfaces/response/ApiResponse";
import { handleCreateBranchErrors } from "../../../../helpers/handleCreateBranchErrors";
import { SpecialtiesService } from '../../../../services/specialties/SpecialtiesService';
import { ISelectedProps } from "../../../../interfaces/generalInputs/IInputs";
import { MultiValue } from 'react-select';
import { validateNoEmpty } from "../../../../helpers/validationHelpers";


const BranchCreate = () => {
    const swal2 = useAlert();
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [specialtiesToSelect, setSpecialtiesToSelect] = useState<{ value: number; label: string }[]>([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState<IBranch>({
        name: '',
        specialtiesIds: [],
        multiselectProps: [],
        allowsAppointments: false,
        street: '',
        noExt: '',
        noInt: '',
        countryId: 0,
        stateId: 0,
        municipalityId: 0,
        cityId: 0,
        postalCodeId: 0,
        neighborhoodId: 0,
        files: [],
    });

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await SpecialtiesService.getSpecialties();                
                setSpecialtiesToSelect(response.data);
            } catch (error) {
                console.error('Error fetching specialties:', error);
            } finally {
                // Cargando terminado
            }
        };

        fetchCountries();
    }, []);

    // useEffect(() => {
    //     // Si initialData cambia, actualiza el estado del formulario
    //     if (initialData) {
    //         setFormData(initialData);
    //     }
    // }, [initialData]);
    

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, type, value, checked, tagName } = e.target as HTMLInputElement | HTMLSelectElement;

        if (tagName === 'INPUT' && type === 'checkbox') {
            setFormData({
                ...formData,
                [name]: checked,
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleFilesChange = (acceptedFiles: File[]) => {
        setFormData({
            ...formData,
            files: acceptedFiles,
        });
    };

    const handleSpecialtiesChange = (selected: MultiValue<ISelectedProps> | null) => {
        const specialtiesIds = (selected || []).map(option => option.value);

        setFormData({
            ...formData,
            specialtiesIds: specialtiesIds,
        });
    };

    const handleClear = (field: string) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [field]: ''
        }));
        // Verifica si el campo es "email" y valida si está vacío
        if (field === "name") {
            const newErrors = { ...errors };
            newErrors.name = validateNoEmpty(''); // Validar campo vacío
            setErrors(newErrors);
        }
    };
    const handleClientValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const newErrors = { ...errors };

        if (name === "name") {
            newErrors.name = validateNoEmpty(value);
        }

        handleChange(e); // Mantén el manejo del cambio de valores del estado principal
        setErrors(newErrors);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 

        dispatch(setLoading(true));
        // Crear un nuevo objeto formDataSend
        const formDataSend = new FormData();
        
        // Agregar los datos generales al formDataSend
        formDataSend.append('general_data[allows_appointments]', formData.allowsAppointments.toString());
        formDataSend.append('general_data[name]', formData.name);

        // Agregar los datos de ubicación al formDataSend
        formDataSend.append('location_data[city_id]', formData.cityId.toString());
        formDataSend.append('location_data[country_id]', formData.countryId.toString());
        formDataSend.append('location_data[municipality_id]', formData.municipalityId.toString());
        formDataSend.append('location_data[neighborhood_id]', formData.neighborhoodId.toString());
        formDataSend.append('location_data[postal_code_id]', formData.postalCodeId.toString());
        formDataSend.append('location_data[state_id]', formData.stateId.toString());
        formDataSend.append('location_data[street]', formData.street);
        formDataSend.append('location_data[outdoor_number]', formData.noExt);
        if (formData.noInt) formDataSend.append('location_data[indoor_number]', formData.noInt);

        // Agregar los archivos al formDataSend (images_data)
        if (formData.files && formData.files.length > 0) {
            formData.files.forEach((file, index) => {
                formDataSend.append(`images_data[files][${index}]`, file);
            });
        }

        // Agregar las especialidades al formDataSend (specialties_data)
        formData.specialtiesIds?.forEach((specialtyId, index) => {
            formDataSend.append(`specialties_data[${index}]`, specialtyId.toString());
        });
                
        try {
            const resp = await BranchesService.createBranch(formDataSend);
            if (resp.success) {
                swal2({ ...paramsBranchCreateSuccess });
                navigate(PATH_BRANCHES);
            }
        } catch (error) {
            const err = error as AxiosError<ApiResponse>;
            const newErrors = handleCreateBranchErrors(err);
            setErrors(newErrors);        
        } finally {
            dispatch(setLoading(false));
        }
    };

    return (
        <div>
            <BranchCreateForm
                handleSubmit={handleSubmit}
                handleClean={handleClear}
                handleChange={handleChange}
                handleClientValidation={handleClientValidation}
                errors={errors}
                handleSpecialtiesChange={handleSpecialtiesChange}
                handleFilesChange={handleFilesChange}
                specialtiesToSelect={specialtiesToSelect}
                formData={formData}
            />
        </div>
    );
};

export default BranchCreate;
