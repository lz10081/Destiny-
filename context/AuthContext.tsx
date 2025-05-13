import { createContext, useState, useEffect, ReactNode } from 'react';
import * as SecureStore from 'expo-secure-store';

interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  registerWithEmail: (name: string, email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  // Add other auth methods as needed
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored auth information on app load
    const checkAuthStatus = async () => {
      try {
        const storedUser = await SecureStore.getItemAsync('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Error checking auth status:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  const signInWithEmail = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Normally this would be an API call to your auth service
      // For demo purposes, we'll create a mock user
      const mockUser = {
        uid: '123456',
        email: email,
        displayName: email.split('@')[0],
        photoURL: null,
      };
      
      // Store user info securely
      await SecureStore.setItemAsync('user', JSON.stringify(mockUser));
      setUser(mockUser);
    } catch (error) {
      console.error('Error signing in:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const registerWithEmail = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    try {
      // Normally this would be an API call to your auth service
      // For demo purposes, we'll create a mock user
      const mockUser = {
        uid: '123456',
        email: email,
        displayName: name,
        photoURL: null,
      };
      
      // Store user info securely
      await SecureStore.setItemAsync('user', JSON.stringify(mockUser));
      setUser(mockUser);
    } catch (error) {
      console.error('Error registering:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    try {
      await SecureStore.deleteItemAsync('user');
      setUser(null);
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        signInWithEmail,
        registerWithEmail,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}