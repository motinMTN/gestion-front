export interface IThumbnails{
  id: number;
  url: string;
}

export interface ISpecialties{
  id: number;
  name: string;
}

export interface IMedicalBranchCard {
  id?: string;
  available?: boolean;
  thumbnails?: IThumbnails[];
  specialties?: ISpecialties[];
  location?: string;
}

export interface IMedicalBranchCardViewProps {
  medicalBranchCard: IMedicalBranchCard;
}