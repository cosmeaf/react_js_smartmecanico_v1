import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/frontend/Header';
import { ValidationErrors } from '../../utils/validationsTypes';
import { validateRecoveryEmail } from '../../utils/validateRecoveryEmail';
import { RecoveryPasswordRequest } from '../../contexts/AuthProvider/utils';

const Recovery: React.FC = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<ValidationErrors>({});
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validação do campo de e-mail
    const emailErrors = validateRecoveryEmail(email);
    if (Object.keys(emailErrors).length > 0) {
      setErrors(emailErrors);
      return;
    }

    try {
      // Chamada à função de recuperação de senha
      const response = await RecoveryPasswordRequest(email);
        if(response.code && response.code.length === 6){
            console.log(response.code)
            navigate('/opt-code-verify')
        }
    } catch (error) {
      // Lógica de tratamento de erro, por exemplo, exibir uma mensagem de erro
      console.error(error);
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
                            <div className="mb-10 mt-5 flex items-center justify-between">
                                <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/sign-in">
                                    Já tenho registro
                                </Link>
                                <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/sign-up">
                                    Não tenho registro
                                </Link>
                            </div>
                            <button className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-6" type="submit">
                                Recuperar
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Recovery;
