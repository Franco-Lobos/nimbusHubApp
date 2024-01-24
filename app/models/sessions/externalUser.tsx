export interface ExternalUser {
    name: string;
    email: string;
    authentication:{
        accessToken: string;
        refreshToken: string;
        salt: string;
        sessionToken: string;
    }
}