import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/logo.png';
import Header from '../../components/frontend/Header';
import { ValidationErrors } from '../../utils/validationsTypes';
import { useAuth } from '../../contexts/AuthProvider/useAuth';
import { validateCredentials } from '../../utils/validationsAuth';


const SignIn: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<ValidationErrors>({});
    const auth = useAuth();
    const navigate = useNavigate();


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const validationErrors = validateCredentials(email, password);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const isSuccessful = await auth.authenticate(email, password);
        if (isSuccessful) {
            navigate("/dashboard");
        } else {
            console.log('AUTH ERROR ', auth.authError);
        }
    };


    const clearError = (field: keyof ValidationErrors) => {
        setErrors(prev => {
            const newState = { ...prev };
            delete newState[field];
            return newState;
        });
    };
    return (
        <>
            <Header />
            <div className="flex items-center justify-center h-screen border-t border-gray-1-animated">
                <div className="w-full max-w-md" style={{ transform: "translateY(-100px)" }}>
                    <h1 className="text-center text-3xl mb-6">Smart Mecânico</h1>
                    <h6 className="text-center text-1xl mb-6">Área de Acesso</h6>
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                    E-mail
                                </label>
                                <input
                                    type="email"
                                    placeholder="Entre com seu e-mail"
                                    value={email}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                    onBlur={() => clearError('email')}
                                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                                {errors.email && <p className="text-danger font-bold mt-2">{errors.email}</p>}
                            </div>
                            <div className="mb-1">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Senha
                                </label>
                                <input
                                    type="password"
                                    placeholder="Entre com sua senha"
                                    value={password}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                    onBlur={() => clearError('password')}
                                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                                {errors.password && <p className="text-danger font-bold mt-2">{errors.password}</p>}
                            </div>
                            <div className="mb-10 mt-5 flex items-center justify-between">
                                <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/register">
                                    Não tenho registro
                                </Link>
                                <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/forgot-password">
                                    Recuperar Senha?
                                </Link>
                            </div>
                            <button className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-6" type="submit">
                                Entrar
                            </button>
                            {auth.authError && <p className="text-center text-danger font-bold mt-3">{auth.authError}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </>

    );
}

export default SignIn;
