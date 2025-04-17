export interface IFormProps {
  handleSubmit: (e: React.ChangeEvent<HTMLFormElement>) => Promise<void>;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleClean: (field: string) => void;
  handleClientValidation: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFilesChange?: (acceptedFiles: File[]) => void;
  errors: { [key: string]: string };
}