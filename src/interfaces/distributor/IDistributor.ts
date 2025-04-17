export interface IDistributorProps{
    // email:string;
    // url: string;
    general_fontFamily:string;
    theme_Background: string;
    topbar_Background: string;
    topbar_ColorText:string;
    sidebar_Background:string;
    sidebar_ColorText:string;
    authForm_Background:string;
    authForm_ColorText:string;
    url_Logo: string;
}

export interface IDistributor {
    name: string;
    domain: string;
    properties: IDistributorProps;
}