import { createContext, useState, useEffect, ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import * as SecureStore from 'expo-secure-store';

interface ThemeColors {
  primary: string;
  primaryLight: string;
  secondary: string;
  accent: string;
  background: string;
  cardBackground: string;
  text: string;
  textSecondary: string;
  textTertiary: string;
  border: string;
  error: string;
  errorLight: string;
  success: string;
  successLight: string;
  warning: string;
  warningLight: string;
}

interface ThemeContextType {
  isDark: boolean;
  colors: ThemeColors;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

const lightColors: ThemeColors = {
  primary: '#3B2F63',
  primaryLight: '#EAE7F3',
  secondary: '#1A1B41',
  accent: '#FFD700',
  background: '#F7F7F7',
  cardBackground: '#FFFFFF',
  text: '#1A1A1A',
  textSecondary: '#717171',
  textTertiary: '#A0A0A0',
  border: '#E0E0E0',
  error: '#E53935',
  errorLight: '#FFEBEE',
  success: '#43A047',
  successLight: '#E8F5E9',
  warning: '#FFA000',
  warningLight: '#FFF8E1',
};

const darkColors: ThemeColors = {
  primary: '#7C64B5',
  primaryLight: '#2F2A40',
  secondary: '#5F60A7',
  accent: '#FFD700',
  background: '#121212',
  cardBackground: '#1E1E1E',
  text: '#FFFFFF',
  textSecondary: '#B0B0B0',
  textTertiary: '#717171',
  border: '#2C2C2C',
  error: '#EF5350',
  errorLight: '#3E2829',
  success: '#66BB6A',
  successLight: '#263B27',
  warning: '#FFCA28',
  warningLight: '#3E3A2A',
};

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const systemColorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(systemColorScheme === 'dark');

  useEffect(() => {
    // Load user's theme preference from storage
    const loadThemePreference = async () => {
      try {
        const themePreference = await SecureStore.getItemAsync('themePreference');
        if (themePreference !== null) {
          setIsDark(themePreference === 'dark');
        } else {
          // If no preference stored, use system preference
          setIsDark(systemColorScheme === 'dark');
        }
      } catch (error) {
        console.error('Error loading theme preference:', error);
      }
    };

    loadThemePreference();
  }, [systemColorScheme]);

  const toggleTheme = async () => {
    try {
      const newTheme = !isDark;
      setIsDark(newTheme);
      await SecureStore.setItemAsync('themePreference', newTheme ? 'dark' : 'light');
    } catch (error) {
      console.error('Error saving theme preference:', error);
    }
  };

  const currentColors = isDark ? darkColors : lightColors;

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        colors: currentColors,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}