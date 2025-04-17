import { InfoAccountCardProps } from "../cardsInfo/InfoAccountCardProps";

export interface TopBarMenuItem {
    label: string;    
    url: string;
}

export interface CardViewProps {
    card: InfoAccountCardProps;
    isOpen?: boolean;
}
export interface ItemViewPropsTB {
    item: TopBarMenuItem;
}

export interface TopBarMenuProps {
    items: TopBarMenuItem[];
    card: InfoAccountCardProps;
}