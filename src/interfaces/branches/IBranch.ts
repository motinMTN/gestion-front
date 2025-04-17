import { ISelectedProps } from "../generalInputs/IInputs";

export interface IBranch {
    id?: number;
    name: string;    
    multiselectProps?: ISelectedProps[];
    allowsAppointments: boolean;
    street: string;
    noExt: string;
    noInt?: string;
    countryId: number;
    stateId: number;
    municipalityId: number;
    cityId: number;
    postalCodeId: number;
    neighborhoodId: number;
    specialtiesIds?: number[];
    files?: File[];
}

export interface BranchDTElement {
    id: number;
    name: string;
    allows_appointments: number;
    city: string;
    state: string;
    personal: number;
    last_update: string;
    action: string;
}

export interface BranchesDTProps {
    fetchBranches: (params: {
        page: number;
        per_page: number;
        sort_field: string;
        sort_order: 'asc' | 'desc';
    }) => Promise<any>;
    specialties: ISelectedProps[]; // Agrega la propiedad para especialidades
}
