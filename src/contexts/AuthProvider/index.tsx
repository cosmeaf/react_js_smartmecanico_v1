import { createContext, useState, useEffect } from "react";
import { IAuthProvider, IContext, IUser } from "./types";
import { LoginRequest, setUserLocalStorage, getUserLocalStorage, verifyToken } from "./utils";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({children}: IAuthProvider) => {
    const [user, setUser] = useState<IUser | null>();
    const [isLoading, setLoading] = useState(true);
    const [authError, setAuthError] = useState("");

    useEffect(() => {
        const storedUser = getUserLocalStorage();
        if (storedUser && storedUser.token) {
            verifyToken(storedUser.token).then(isValid => {
                if (isValid) {
                    setUser(storedUser);
                } else {
                    setUserLocalStorage(null);
                }
                setLoading(false);  // Atualiza isLoading para false após a verificação
            });
        } else {
            setLoading(false);  // Atualiza isLoading para false se não houver usuário no localStorage
        }
    }, []);
    

    async function authenticate(email: string, password: string): Promise<boolean> {
        const response = await LoginRequest(email, password);
        if (response.access) {
            const payload = { token: response.access, email };
            setUser(payload);
            setUserLocalStorage(payload);
            setAuthError("");
            return true; // autenticação bem-sucedida
        } else {
            setAuthError(response?.response?.data?.detail || "Erro na autenticação.");
            return false; // autenticação falhou
        }
    }
    

    function logout (){
        setUser(null)
        setUserLocalStorage(null)
    }

    return (
        <AuthContext.Provider value={{...user, authenticate, logout, isLoading, authError }}>
            {children}
        </AuthContext.Provider>
    )
}
