
export interface PropsLogin {
  handleSubmit: (e: React.ChangeEvent<HTMLFormElement>) => Promise<void>;
  handleChange?: (e: React.ChangeEvent<HTMLFormElement | HTMLInputElement>) => void;
  handleClean: (field: string) => void;
  handleClientValidation: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: { [key: string]: string };
  clientErrors: { [key: string]: string };
}