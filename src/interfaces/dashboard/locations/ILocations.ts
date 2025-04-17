export interface ILocation {
    id?: number;    
    countryId: number;
    stateId: number;
    municipalityId: number;
    cityId: number;
    postalCodeId: number;
    neighborhoodId: number;
    street: string;
    noExt: string;
    noInt?: string;
}

export interface ICountry{ 
    id: number; 
    name: string;
}

export interface IState{ 
    id: number; 
    name: string;
}

export interface IMunicipality{ 
    id: number; 
    name: string; 
}

export interface ICity {
    id: number;
    name: string;
}

export interface IPostalCode{ 
    id: number; 
    code: string;
}

export interface INeighborhood{ 
    id: number; 
    name: string;
}

export interface LocationFormProps {
    formData: ILocation;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;    
}