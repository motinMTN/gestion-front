import { AlertParams } from "../../../interfaces/helpers/AlertParams";

export const paramsGetErrorDT: AlertParams = {
    title: '¡Error al obtener los datos!',
    text: 'Error al obtener los datos, por favor, intente más tarde.',
    icon: 'error',
    confirmButtonText: 'Aceptar'
};

export const paramsUnexpectedAPIFormatDT: AlertParams = {
    title: '¡Error al formatear los datos!',
    text: 'La respuesta de la API no tiene el formato esperado, por favor, intente más tarde.',
    icon: 'error',
    confirmButtonText: 'Aceptar'
};