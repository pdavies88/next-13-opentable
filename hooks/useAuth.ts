import { AuthenticationContext } from '@/app/context/AuthContext';
import { useContext } from 'react';

const useAuth = () => {
  const { setAuthState } = useContext(AuthenticationContext);

  const signin = async (
    {
      email,
      password,
    }: {
      email: string;
      password: string;
    },
    handleClose: () => void
  ) => {
    setAuthState({
      data: null,
      error: null,
      loading: true,
    });

    const signInOptions = {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
    };

    const response = await fetch(
      'http://localhost:3000/api/auth/signin',
      signInOptions
    );
    if (!response.ok) {
      const error = await response.json();
      setAuthState({
        data: null,
        error: error.errorMessage,
        loading: false,
      });
    } else {
      const data = await response.json();
      setAuthState({
        data,
        error: null,
        loading: false,
      });
      handleClose();
    }
  };

  const signup = async (
    {
      email,
      password,
      firstName,
      lastName,
      city,
      phone,
    }: {
      email: string;
      password: string;
      firstName: string;
      lastName: string;
      city: string;
      phone: string;
    },
    handleClose: () => void
  ) => {
    setAuthState({
      data: null,
      error: null,
      loading: true,
    });

    const signUpOptions = {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        firstName,
        lastName,
        city,
        phone,
      }),
    };

    const response = await fetch(
      'http://localhost:3000/api/auth/signup',
      signUpOptions
    );
    if (!response.ok) {
      const error = await response.json();
      setAuthState({
        data: null,
        error: error.errorMessage,
        loading: false,
      });
    } else {
      const data = await response.json();
      setAuthState({
        data,
        error: null,
        loading: false,
      });
      handleClose();
    }
  };

  return {
    signin,
    signup,
  };
};

export default useAuth;
