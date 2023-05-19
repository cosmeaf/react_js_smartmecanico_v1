export interface IUser {
    email?: string,
    token?: string
}

export interface IContext extends IUser {
    authenticate: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
    isLoading: boolean,
    authError?: string
}


export interface IAuthProvider {
    children: JSX.Element
}
