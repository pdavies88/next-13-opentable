'use client';

import { getCookie } from 'cookies-next';
import { useState, createContext, useEffect } from 'react';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  phone: string;
}

interface State {
  loading: boolean;
  error: string | null;
  data: User | null;
}

interface AuthState extends State {
  setAuthState: React.Dispatch<React.SetStateAction<State>>;
}

export const AuthenticationContext = createContext<AuthState>({
  loading: false,
  error: null,
  data: null,
  setAuthState: () => {},
});

export default function AuthContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authState, setAuthState] = useState<State>({
    loading: true,
    data: null,
    error: null,
  });

  const fetchUser = async () => {
    const jwt = getCookie('jwt');

    if (!jwt) {
      return setAuthState({
        data: null,
        error: null,
        loading: false,
      });
    }

    const response = await fetch('http://localhost:3000/api/auth/me', {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

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
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthenticationContext.Provider
      value={{
        ...authState,
        setAuthState,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}
