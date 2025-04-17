import React, { useState, useEffect } from 'react';
import Select, { MultiValue } from 'react-select';

// Define las opciones que aparecerán en el dropdown
type OptionType = { value: number; label: string };

// Define el tipo para las props del componente MultiSelect
interface MultiSelectProps {
  optionsList: OptionType[];
  onChange: (selected: MultiValue<{ value: number; label: string }> | null) => void;
  value: { value: number; label: string }[];
  backendError?: string; // Prop opcional para errores del backend
}

const MultiSelect: React.FC<MultiSelectProps> = ({ optionsList, onChange, backendError }) => {
  const [selectedOptions, setSelectedOptions] = useState<MultiValue<OptionType> | null>(null);
  const [error, setError] = useState<string>(''); // Estado para manejar el error dinámico

  // Validar las selecciones y establecer el error si es necesario
  const validateSelection = (selected: MultiValue<OptionType> | null) => {
    if (!selected || selected.length === 0) {
      setError('Debe seleccionar al menos una especialidad.');
    } else {
      setError(''); // Limpiar el error si hay una selección válida
    }
  };

  const handleChange = (selected: MultiValue<OptionType> | null) => {
    setSelectedOptions(selected);
    validateSelection(selected); // Validar selección al cambiar
    onChange(selected); // Llama a la función onChange cuando cambian las selecciones
  };

  // Efecto para mostrar el error del backend
  useEffect(() => {
    if (backendError) {
      setError(backendError);
    }
  }, [backendError]);

  return (
    <div className="multi-select-container">
      <Select
        isMulti
        name="specialties"
        options={optionsList}
        className="basic-multi-select"
        classNamePrefix="select"
        value={selectedOptions}
        onChange={handleChange}
        // aria-invalid={!!error} // Agregar aria-invalid si hay un error
        required={true}
        styles={{
          control: (provided) => ({
            ...provided,
            minHeight: '3rem',
            borderRadius: '8px',
            background: error ? "hsl(var(--nextui-danger-50) / var(--nextui-danger-50-opacity, var(--tw-bg-opacity))) !important" : "transparent"
            // borderColor: error ? '#FF5A5F' : provided.borderColor, // Cambiar color de borde si hay un error
          }),
        }}
      />
      {/* Mostrar mensaje de error si existe */}
      {error && (
        <div
          data-slot="helper-wrapper"
          className="p-1 relative flex-col gap-1.5"
        >
          <div
            data-slot="error-message"
            className="text-tiny text-danger"
          >
            {error}
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiSelect;

