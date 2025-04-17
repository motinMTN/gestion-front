export interface ISelectProps {
    value: number;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { id: number; name?: string; code?: string }[] | undefined;
    name: string;
    placeholder: string;
    label: string;
}

export interface ICountrySelectorProps {
    value: number;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    disabled?: boolean;
}

export interface IStateSelectorProps { 
    countryId: number;
    value: number;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    disabled?: boolean;
}

export interface IMunicipalitySelectorProps {
    stateId: number;
    value: number;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    disabled?: boolean;
}

export interface ICitySelectorProps {
    municipalityId: number;
    value: number;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    disabled?: boolean;
}

export interface IPostalCodeSelectorProps {
    municipalityId: number;
    value: number;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    disabled?: boolean;
}

export interface INeighborhoodSelectorProps {
    postalCodeId: number;
    value: number;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    disabled?: boolean;
}

export interface ISpecialtlyProps {
    value: number;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    disabled?: boolean;
}

export interface ISelectedProps{ 
    value: number; 
    label: string;
}
