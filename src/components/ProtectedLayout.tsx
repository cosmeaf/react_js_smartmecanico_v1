import { useAuth } from '../contexts/AuthProvider/useAuth'
import { Link } from 'react-router-dom'
import Spinner from './Spinner';

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth()

  if (auth.isLoading) {
    return <Spinner />;  // Substitua Spinner pelo seu componente de spinner ou de carregamento
  }

  if (!auth.email) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <h1 className="mt-2 text-center text-3xl font-extrabold text-gray-900">
            You don't have permission to access this area.
          </h1>
          <p className="mt-5 text-center text-sm text-gray-600">
            You need to make new access or create a new account          
          </p>
          <div className="flex justify-around mt-5">
            <Link to="/sign-in">
              <button className="w-50 cursor-pointer rounded-lg border border-primary bg-primary p-2 text-white transition hover:bg-opacity-90">
                Sign-In 
              </button>
            </Link>
            <Link to="/sign-up">
              <button className="w-50 cursor-pointer rounded-lg border border-primary bg-primary p-2 text-white transition hover:bg-opacity-90">
                Sign-Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
  return children
}
