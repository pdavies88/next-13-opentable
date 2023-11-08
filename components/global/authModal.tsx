'use client';
import { useState } from 'react';
import AuthModalInputs from './authModalInputs';

interface Props {
  type: string;
}

const AuthModal = ({ type }: Props) => {
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

  const [disabled, setDisabled] = useState(true);

  const handleClick = () => {
    console.log('ABC');
    // if (isSignin) {
    //   signin({ email: inputs.email, password: inputs.password }, handleClose);
    // } else {
    //   signup(inputs, handleClose);
    // }
  };

  return (
    <dialog className={type}>
      <div className='p-2 h-[600px]'>
        {/* {error ? (
          <Alert severity='error' className='mb-4'>
            {error}
          </Alert>
        ) : null} */}
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
            disabled={disabled}
            onClick={handleClick}
          >
            {renderContent('Sign In', 'Create Account')}
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default AuthModal;
