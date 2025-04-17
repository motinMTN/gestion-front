import { AlertParams } from "../../../interfaces/helpers/AlertParams";

export const paramsForgotPasswordSuccess: AlertParams = {
    title: '¡Correo enviado!',
    text: 'Se te ha enviado un correo con las instrucciones para restaurar tu contraseña.',
    icon: 'success',
    confirmButtonText: 'Aceptar'
};

export const paramsForgotPasswordFail: AlertParams = {
    title: '¡Error al enviar el correo!',
    text: 'Error al enviar el correo para la restauración de contraseña, intenta más tarde.',
    icon: 'error',
    confirmButtonText: 'Aceptar'
};

export const paramsResetPasswordSuccess: AlertParams = {
    title: '¡Contraseña actualizada!',
    text: 'Has actualizado tu contraseña correctamente.',
    icon: 'success',
    confirmButtonText: 'Aceptar'
};
export const paramsResetPasswordFail: AlertParams =  {
    title: '¡Error al actualizar la contraseña!',
    text: 'Error al actualizar la contraseña, intenta más tarde.',
    icon: 'error',
    confirmButtonText: 'Aceptar'
};