import MySwal from './sweetAlertInstance';
import { AlertParams } from '../../interfaces/helpers/AlertParams';
import './AlertDialog.scss';

export const showAlertDialog = ({
    title,
    text,
    icon,
    confirmButtonText = 'Aceptar',
    cancelButtonText,
    showCancelButton = false,
    confirmButtonColor = '#007aff',
    cancelButtonColor = '#ff3b30',
    onConfirm,
}: AlertParams) => {
    const options: any = {
        title,
        text,
        icon,
        showCancelButton,
        confirmButtonColor,
        confirmButtonText,
        customClass: {
            popup: 'swal2-ios-popup',
            title: 'swal2-ios-title',
            content: 'swal2-ios-content',
            confirmButton: 'swal2-ios-confirm-button',
            cancelButton: 'swal2-ios-cancel-button',
        },
    };

    if (showCancelButton) {
        options.cancelButtonColor = cancelButtonColor;
        options.cancelButtonText = cancelButtonText;
    }

    MySwal.fire(options).then((result: any) => {
        if (result.isConfirmed && onConfirm) {
            onConfirm();
        }
    });
};
