import { useCallback } from 'react';
import { AlertParams } from '../interfaces/helpers/AlertParams';
import { showAlertDialog } from '../helpers/AlertDialog/AlertDialog';

const useAlert = () => {
    const customHandle = useCallback((params: AlertParams) => {
        showAlertDialog(params);
    }, []);

    return customHandle;
};

export default useAlert;