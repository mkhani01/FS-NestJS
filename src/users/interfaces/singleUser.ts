export interface SingleUser {
    id: string;
    username: string;
    password: string;
    name?: string;
    lastName?: string;
    phoneNumber: string;
    nationalCode?: string;
    email: string;
    roles:any[]; // TODO : define roles interface
    country?: string; //TODO : define country interface and ENUMS
    address?: string;
}