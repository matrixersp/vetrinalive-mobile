import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useCallback, useState} from 'react';
import {authService, SignInValues, SignUpValues, User} from 'utils/authService';

type AuthContextData = {
  user: User | null;
  loading: boolean;
  signIn(values: SignInValues): Promise<void>;
  signUp(values: SignUpValues): Promise<void>;
  signOut(): void;
};

const AuthContext = React.createContext<AuthContextData | undefined>(undefined);

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchCurrentUser = useCallback(() => {
    authService
      .getCurrentUser()
      .then(response => {
        if (!response) {
          setUser(null);
          return;
        }
        setUser(response.data);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, []);

  React.useEffect(() => {
    fetchCurrentUser();
  }, [fetchCurrentUser]);

  const signIn = async (values: SignInValues) => {
    await authService.signIn(values).then(async res => {
      await AsyncStorage.setItem('user', JSON.stringify(res.data));
      setUser(res.data);
    });
  };

  const signUp = async (values: SignUpValues) => {
    await authService.signUp(values);
  };

  const signOut = async () => {
    await authService.signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn,
        signUp,
        signOut,
      }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = React.useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
}
