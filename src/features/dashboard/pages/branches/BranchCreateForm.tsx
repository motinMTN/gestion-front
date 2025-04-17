import React from 'react';
import DropZone from './DropZone';
import LocationForm from '../../../../components/locations/LocationForm';
import MultiSelect from '../../components/multiSelect/MultiSelect';
import CustomInput from '../../components/inputs/CustomInput';
import { IBranchFormProps } from '../../../../interfaces/forms/IBranchFormProps';


const BranchForm: React.FC<IBranchFormProps> = (props: IBranchFormProps) => {  
  const handleSubmit = props.handleSubmit;
  const handleChange = props.handleChange;
  const handleSpecialtiesChange = props.handleSpecialtiesChange;
  const handleFilesChange = props.handleFilesChange;
  const handleClientValidation = props.handleClientValidation;
  const specialtiesToSelect = props.specialtiesToSelect;
  const formData = props.formData;
  const errors = props.errors;
  const handleClear = props.handleClean;  
  
  return (
    <form className="w-full bg-white p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-6">
        {/* {initialData ? 'Editar sucursal' : 'Crear nueva sucursal'} */}
        Crear nueva sucursal
      </h2>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <CustomInput            
            name="name"
            type="text"
            required
            lbl='Nombre'
            errorMessage={errors.name}
            isInvalid={!!errors.name}            
            placeholder='Nombre de sucursal'            
            onChange={handleClientValidation}
            onClear={() => handleClear('name')}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block tracking-wide text-gray-700 text-sm font-bold mb-2"
            htmlFor="specialtyId"
          >
            Especialidades
          </label>
          <div className="relative">            
            <MultiSelect
              optionsList={specialtiesToSelect}
              value={specialtiesToSelect.filter(specialty => formData.specialtiesIds?.includes(specialty.value))}
              onChange={handleSpecialtiesChange}              
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <div className="flex items-center">
            <input
              className="form-checkbox h-5 w-5 text-blue-600"
              id="allowsAppointments"
              name="allowsAppointments"
              type="checkbox"
              checked={formData.allowsAppointments}
              onChange={handleChange}
            />          
            <label htmlFor="allowsAppointments" className="ml-2 text-gray-700 text-sm">
              Elegible para reservación de citas en línea <br />
              Si se marca esta opción, los pacientes podrán agendar citas en esta sucursal por medio del formulario de reservación de citas en línea.
            </label>
          </div>
        </div>
      </div>

      {/* LOCATION FORM */}
      <LocationForm
        formData={formData}
        handleChange={handleChange}
      />

      <div className="flex flex-col p-4 mt-2">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Fotografias</h2>
        <div className="flex flex-wrap -mx-3">
          <DropZone onFilesChange={handleFilesChange!} />
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
      >
        {/* {initialData ? 'Actualizar' : 'Agregar'} */}
        Agregar
      </button>
    </form>
  );
};

export default BranchForm;

