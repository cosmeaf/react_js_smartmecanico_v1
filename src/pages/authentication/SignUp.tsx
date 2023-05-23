import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { ValidationErrors } from '../../utils/validationsTypes';
import { validateRegistration } from '../../utils/validateRegistration';
import { RegisterRequest } from '../../contexts/AuthProvider/utils';
import Header from '../../components/frontend/Header';


const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<ValidationErrors>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateRegistration(username, email, password, confirmPassword);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await RegisterRequest(username, email, password, confirmPassword);

      if (response.response && response.response.data) {
        const errorData = response.response.data;
        console.log(errorData);
        setErrors(errorData);
        setTimeout(() => { window.location.reload() }, 3000)
      } else {
        console.log(response);
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setTimeout(() => { window.location.reload() }, 5000)
      }
    } catch (error) {
      console.error(error);
      setTimeout(() => { window.location.reload() }, 5000)
    }
  };

  const clearError = (field: keyof ValidationErrors) => {
    setErrors((prev) => {
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
                  Username or Email
                </label>
                <input
                  type="username"
                  placeholder="Nick Name / E-mail"
                  value={username}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                  onBlur={() => clearError('username')}
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                {errors.username && <p className="text-danger font-bold mt-2">{errors.username}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                  E-mail
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
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
                  placeholder="8+ Characters, 1 Capital letter"
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                  onBlur={() => clearError('password')}
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                {errors.password && <p className="text-danger font-bold mt-2">{errors.password}</p>}
              </div>
              <div className="mb-1">
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
              <div className="mb-10 mt-5 flex items-center justify-between">
                <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/sign-in">
                  Já tenho registro
                </Link>
                <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/forgot-password">
                  Recuperar Senha?
                </Link>
              </div>
              <button className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-6" type="submit">
                Cadastrar
              </button>
              {errors && <p className="text-danger font-bold mt-2 text-center">{errors.error}</p>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;