export interface AlertParams {
    title: string;
    text?: string;
    icon: 'success' | 'error' | 'warning' | 'info' | 'question';
    confirmButtonText?: string;
    cancelButtonText?: string;
    showCancelButton?: boolean;
    confirmButtonColor?: string;
    cancelButtonColor?: string;
    onConfirm?: () => void;
}