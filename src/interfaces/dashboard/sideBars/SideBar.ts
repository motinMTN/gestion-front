import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { InfoAccountCardProps } from '../cardsInfo/InfoAccountCardProps';

export interface SideBarMenuItem {
  label: string;
  icon: IconDefinition | string;
  url: string;
}

export interface ItemViewPropsSB {
  item: SideBarMenuItem;
}

export interface SideBarMenuProps {
  items: SideBarMenuItem[];
  card: InfoAccountCardProps;
}