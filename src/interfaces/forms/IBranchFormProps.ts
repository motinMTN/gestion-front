import { MultiValue } from "react-select";
import { IFormProps } from "./IFormProps";
import { IBranch, ISelectedProps } from "../branches/IBranch";

export interface IBranchFormProps extends IFormProps {    
    handleSpecialtiesChange: (selected: MultiValue<ISelectedProps> | null) => void;
    specialtiesToSelect: ISelectedProps[];
    formData: IBranch;
}