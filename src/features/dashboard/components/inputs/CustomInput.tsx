// CustomInput.tsx
import React from "react";
import { Input, InputProps } from "@heroui/react";

// // Extender las propiedades de Input para incluir las que necesitas
interface CustomInputProps extends InputProps {
	lbl: string; // Etiqueta del campo del input
}

// Crear un componente de Input personalizado
const CustomInput: React.FC<CustomInputProps> = (props) => {
	return (
		<>
			<label className="block tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="name">{ props.lbl }</label>
			<Input
				{...props} // Pasar todas las propiedades recibidas
				fullWidth
				isClearable
				radius="sm"
				classNames={{
					innerWrapper: "bg-transparent",
					inputWrapper: [
						"border",
						"border-gray-300",
						"bg-transparent",
						"h-12"
					],
				}}
			/>
		</>
	);
};

export default CustomInput;
