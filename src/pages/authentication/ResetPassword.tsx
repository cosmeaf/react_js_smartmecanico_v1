import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { ValidationErrors } from '../../utils/validationsTypes';
import { ResetPasswordRequest } from '../../contexts/AuthProvider/utils';
import validateResetPassword from '../../utils/validateResetPassword';
import { ExpireData } from './ExpireData';



const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<ValidationErrors>({});
  const location = useLocation();
  const navigate = useNavigate();
  const {code, token} = location.state ?? {};

  


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateResetPassword(password, confirmPassword);

    if (Object.keys(validationErrors).length === 0) {
      // A validação passou, enviar a solicitação de redefinição de senha
      const response = await ResetPasswordRequest(code, token, password, confirmPassword);

      if (response && response.message) {
        navigate('/sign-in', { replace: true });
        return
      }  
      if (response && response.data && response.data.error) {
        setErrors(response.data.error)
        setTimeout(()=>{
          navigate('/recovery-password', { replace: true });
        }, 5000)      
        return
      }
    } else {
      // Atualizar os erros de validação
      setErrors(validationErrors);
    }
  };

  const clearError = (field: keyof ValidationErrors) => {
    setErrors((prev) => {
      const newState = { ...prev };
      delete newState[field];
      return newState;
    });
  };


  if(code === undefined && token === undefined){
    return <ExpireData children={undefined} />
  }else{
    return(
      <>
        <div className="flex items-center justify-center h-screen border-t border-gray-1-animated">
          <div className="w-full max-w-md" style={{ transform: "translateY(-100px)" }}>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-1">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Senha
                  </label>
                  <input
                    type="password"
                    placeholder="8+ Characters, 1 Capital letter"
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    onBlur={() => clearError('password')}
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                  {errors.password && <p className="text-danger font-bold mt-2">{errors.password}</p>}
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="8+ Characters, 1 Capital letter"
                    value={confirmPassword}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
                    onBlur={() => clearError('confirmPassword')}
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                  {errors.confirmPassword && <p className="text-danger font-bold mt-2">{errors.confirmPassword}</p>}
                </div>
                <button className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-6 mt-5" type="submit">
                  Nova Senha
                </button>
                {errors && <p className="text-danger font-bold mt-2 text-center">{errors.error}</p>}
              </form>
            </div>
          </div>
        </div>

      </>
    )
  }


}

export default ResetPassword;