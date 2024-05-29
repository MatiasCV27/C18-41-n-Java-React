export interface LoginResponse {
    id: string;
    name: string;
    lastname: string;
    email: string;
    username: string;
    roles: string[];
    isActive: boolean;
    token: string;
}