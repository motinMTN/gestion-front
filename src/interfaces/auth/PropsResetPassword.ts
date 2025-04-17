export interface PropsResetPassword {
    handleSubmit: (e: React.ChangeEvent<HTMLFormElement>) => Promise<void>;
    handleChange: (e: React.ChangeEvent<HTMLFormElement | HTMLInputElement>) => void;
    errors: { [key: string]: string };
  }