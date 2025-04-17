export const validateEmail = (value: string): string => {
	if (!value) {
		return "El campo email es obligatorio.";
	}
	if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
		return "Por favor, ingrese un email válido.";
	}
	return "";
};

export const validatePassword = (value: string): string => {
	if (!value) {
		return "El campo contraseña es obligatorio.";
	}
	if (value.length < 6) {
		return "La contraseña debe tener al menos 6 caracteres.";
	}
	return "";
};

export const validateNoEmpty = (value: string): string => {
	if (!value) {
        return "Este campo es obligatorio.";
    }
    return "";
}