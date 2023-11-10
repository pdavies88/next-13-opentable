'use client';
import { useContext, useRef, useState } from 'react';
import AuthModalInputs from './authModalInputs';
import useAuth from '@/hooks/useAuth';
import { AuthenticationContext } from '@/app/context/AuthContext';

interface Props {
  type: string;
}

const AuthModal = ({ type }: Props) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { signin, signup } = useAuth();
  const { loading, error } = useContext(AuthenticationContext);
  const isSignin = type === 'signIn';
  const renderContent = (signinContent: string, signupContent: string) => {
    return isSignin ? signinContent : signupContent;
  };

  // Two way binding
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    password: '',
  });

  const handleClose = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  const handleClick = () => {
    if (isSignin) {
      signin({ email: inputs.email, password: inputs.password }, handleClose);
    } else {
      signup(inputs, handleClose);
    }
  };

  return (
    <dialog className={type} ref={dialogRef}>
      {loading ? (
        <div className='py-24 px-2 h-[600px] w-72 flex justify-center'>
          Loading...
        </div>
      ) : (
        <div className='p-2 h-[600px] w-72'>
          {error ? (
            <div className='p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400'>
              {error}
            </div>
          ) : null}
          <div className='uppercase font-bold text-center pb-2 border-b mb-2'>
            <p className='text-sm'>
              {renderContent('Sign In', 'Create Account')}
            </p>
          </div>
          <div className='m-auto'>
            <h2 className='text-2xl font-light text-center'>
              {renderContent(
                'Log Into Your Account',
                'Create Your OpenTable Account'
              )}
            </h2>
            <AuthModalInputs
              inputs={inputs}
              handleChangeInput={handleChangeInput}
              isSignin={isSignin}
            />
            <button
              className='uppercase bg-red-600 w-full text-white p-3 rounded text-sm mb-5 disabled:bg-gray-400'
              onClick={handleClick}
            >
              {renderContent('Sign In', 'Create Account')}
            </button>
          </div>
        </div>
      )}
    </dialog>
  );
};

export default AuthModal;
