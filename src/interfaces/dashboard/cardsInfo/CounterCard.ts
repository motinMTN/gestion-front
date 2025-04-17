export interface ICounterCard {
  id: string;
  img_url: string;
  numerador: Number;
  divisor: Number;
  title: string;
  url: string;
}

export interface ICounterCardViewProps {
  counterCard: ICounterCard;
}

export interface barFillStylesProps {
  width: string;
  background: string;
}