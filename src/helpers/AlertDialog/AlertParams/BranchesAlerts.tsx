import { AlertParams } from "../../../interfaces/helpers/AlertParams";

export const paramsBranchCreateSuccess: AlertParams = {
    title: '¡Sucursal creada!',
    text: 'Los datos de la sucursal se han guardado satisfactoriamente.',
    icon: 'success',
    confirmButtonText: 'Aceptar'
};

export const paramsBranchCreateFail: AlertParams = {
    title: '¡Sucursal no creada!',
    text: 'No ha sido posible crear la sucursal, intente más tarde.',
    icon: 'error',
    confirmButtonText: 'Aceptar'
};