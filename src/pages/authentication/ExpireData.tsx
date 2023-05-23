import { Link } from 'react-router-dom';

export const ExpireData = ({ children }: { children?: JSX.Element }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h1 className="mt-2 text-center text-3xl font-extrabold text-gray-900">
          Sorry, the link that you are trying to access has expired.
        </h1>
        <p className="mt-5 text-center text-sm text-gray-600">
          You need to make a new recovery password.
        </p>
        <div className="flex justify-around mt-5">
          <Link to="/forgot-password">
            <button className="w-50 cursor-pointer rounded-lg border border-primary bg-primary p-2 text-white transition hover:bg-opacity-90">
                Recovery Password
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
