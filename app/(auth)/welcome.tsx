import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@/hooks/useTheme';
import { LinearGradient } from 'expo-linear-gradient';

export default function WelcomeScreen() {
  const { colors } = useTheme();

  return (
    <ImageBackground 
      source={{ uri: 'https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg' }}
      style={styles.backgroundImage}
    >
      <LinearGradient
        colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.8)']}
        style={styles.overlay}
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Text style={[styles.title, { color: colors.text }]}>Destiny Discovery</Text>
            <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
              Begin your journey of self-discovery
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <Link href="/(auth)/login" asChild>
              <TouchableOpacity style={[styles.button, { backgroundColor: colors.primary }]}>
                <Text style={styles.buttonText}>Sign In</Text>
              </TouchableOpacity>
            </Link>
            
            <Link href="/(auth)/register" asChild>
              <TouchableOpacity style={[styles.button, styles.outlineButton, { borderColor: colors.primary }]}>
                <Text style={[styles.buttonText, { color: colors.primary }]}>Create Account</Text>
              </TouchableOpacity>
            </Link>
            
            <Text style={[styles.termsText, { color: colors.textSecondary }]}>
              By continuing, you agree to our Terms of Service and Privacy Policy
            </Text>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-between',
  },
  header: {
    marginTop: 60,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 16,
    color: '#FFFFFF',
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 18,
    textAlign: 'center',
    color: '#E0E0E0',
    maxWidth: '80%',
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 40,
    alignItems: 'center',
  },
  button: {
    width: '100%',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
  },
  buttonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: '#FFFFFF',
  },
  termsText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    textAlign: 'center',
    color: '#A0A0A0',
    marginTop: 16,
  },
});