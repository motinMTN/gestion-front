// import { AxiosError } from 'axios';
// import { ApiResponse } from '../interfaces/response/ApiResponse';

// export const handleLoginErrors = (error: AxiosError<ApiResponse>) => {
//     const errorData = error.response?.data.errors || {};
//     return {
//         name: 'name' in errorData ? errorData.name[0] : '',
//         email: 'email' in errorData ? errorData.email[0] : '',
//         password: 'password' in errorData ? errorData.password[0] : '',
//         password_confirmation: 'password_confirmation' in errorData ? errorData.password_confirmation[0] : '',
//         credentials: 'credentials' in errorData ? errorData.credentials[0] : '',
//     };
// };

import { AxiosError } from 'axios';
import { ApiResponse } from '../interfaces/response/ApiResponse';

export const handleLoginErrors = (error: AxiosError<ApiResponse>): { [key: string]: string } => {
    const errors: { [key: string]: string } = {};

    if (error.response) {
        // Manejar errores basados en la respuesta del servidor
        if (error.response.status === 401) {
            errors.credentials = "Invalid credentials";
        } else if (error.response.data && error.response.data.errors) {
            // Mapear otros errores específicos de campo
            Object.keys(error.response.data.errors).forEach(key => {
                errors[key] = error.response.data.errors[key][0];
            });
        }
    } else if (error.request) {
        // Manejar errores de red
        errors.network = "Network error, please try again later.";
    } else {
        // Manejar otros errores no específicos
        errors.general = "An error occurred, please try again.";
    }

    return errors;
};