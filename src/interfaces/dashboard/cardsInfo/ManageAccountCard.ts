export interface IManageAccountCard{
    img_url: string;
    title: string;
    description: string;
    path?: string;
}

export interface IManageAccountCardViewProps{
    manageAccountCard: IManageAccountCard;
}