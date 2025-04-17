export const handleCreateBranchErrors = (error: AxiosError<ApiResponse>) => {
	const errorData = error.response?.data.errors || {};

	// Manejo de errores de archivos
	const filesError = Object.keys(errorData).filter(key => key.startsWith('images_data.files.')).map(key => errorData[key][0]).join(', ');

	// Manejo de errores de specialties
	const specialtiesArrayErrors = Object.keys(errorData).filter(key => key.startsWith('specialties_data.') && key !== 'specialties_data').map(key => errorData[key][0]).join(', ');
	const specialtiesError = 'specialties_data' in errorData ? errorData['specialties_data'].join(', ') : '';

	// Función auxiliar para obtener el primer error como string
	const getFirstError = (key: string): string => {
		return key in errorData ? errorData[key][0] : '';
	};

	return {
		name: getFirstError('general_data.name'),
		allows_appointments: getFirstError('general_data.allows_appointments'),
		city_id: getFirstError('location_data.city_id'),
		country_id: getFirstError('location_data.country_id'),
		municipality_id: getFirstError('location_data.municipality_id'),
		neighborhood_id: getFirstError('location_data.neighborhood_id'),
		postal_code_id: getFirstError('location_data.postal_code_id'),
		state_id: getFirstError('location_data.state_id'),
		street: getFirstError('location_data.street'),
		outdoor_number: getFirstError('location_data.outdoor_number'),
		indoor_number: getFirstError('location_data.indoor_number'),
		images_data: filesError, // Errores de archivos concatenados como string
		specialties: specialtiesArrayErrors || specialtiesError, // Errores de specialties como string
	};
};

