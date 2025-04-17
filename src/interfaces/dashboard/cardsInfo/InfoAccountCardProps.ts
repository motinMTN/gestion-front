import { IconDefinition } from "@fortawesome/fontawesome-common-types";

export interface InfoAccountCardProps {
  display_name?: string | null;
  email?: string | null;
  photo_url?: string;
  title?: string;
  phone?: string;
  url?: string;
}

export interface OptionItemProps{
  label: string;
  icon: IconDefinition | string;
  url?: string;
  dialogName?: string;
}

export interface InfoAccountViewProps {
  card: InfoAccountCardProps;
  options: OptionItemProps[];
}

export interface OptionItemViewProps {
  optionItem: OptionItemProps;
  openDialog?: () => void;
}