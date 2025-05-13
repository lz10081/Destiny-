import { Redirect } from 'expo-router';
import { useAuth } from '@/hooks/useAuth';

export default function Index() {
  const { isAuthenticated, isLoading } = useAuth();
  
  // While checking authentication status, show nothing
  if (isLoading) {
    return null;
  }

  // If authenticated, redirect to home screen
  if (isAuthenticated) {
    return <Redirect href="/(app)" />;
  }
  
  // Otherwise, redirect to welcome screen
  return <Redirect href="/(auth)/welcome" />;
}