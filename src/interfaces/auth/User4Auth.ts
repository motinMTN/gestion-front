export interface User4Auth{
    name?:string | null;
    email:string | null;
    password:string | null;
    repeatPassword?: string | null;   
}

export interface IUser{
    id: string | null;
    name: string | null;
    email: string | null;
}

export interface IAuthUser {
    user: IUser;
    isAuthenticated: boolean | null;
    token: string | null;
}