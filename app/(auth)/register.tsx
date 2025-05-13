import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@/hooks/useTheme';
import { ArrowLeft, Mail, Lock, Eye, EyeOff, User } from 'lucide-react-native';
import { useAuth } from '@/hooks/useAuth';
import { SocialAuthButtons } from '@/components/auth/SocialAuthButtons';

export default function RegisterScreen() {
  const router = useRouter();
  const { colors } = useTheme();
  const { registerWithEmail } = useAuth();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async () => {
    if (!name || !email || !password) {
      setError('Please fill in all fields');
      return;
    }
    
    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      await registerWithEmail(name, email, password);
      router.replace('/(app)');
    } catch (err) {
      setError('Unable to create account. The email may already be in use.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.header}>
            <TouchableOpacity 
              onPress={() => router.back()}
              style={[styles.backButton, { backgroundColor: colors.cardBackground }]}
            >
              <ArrowLeft size={20} color={colors.text} />
            </TouchableOpacity>
            <Text style={[styles.title, { color: colors.text }]}>Create Account</Text>
            <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
              Begin your self-discovery journey
            </Text>
          </View>

          <View style={styles.formContainer}>
            {error && (
              <View style={[styles.errorContainer, { backgroundColor: colors.errorLight }]}>
                <Text style={[styles.errorText, { color: colors.error }]}>{error}</Text>
              </View>
            )}
            
            <View style={styles.inputContainer}>
              <User size={20} color={colors.textSecondary} style={styles.inputIcon} />
              <TextInput
                style={[styles.input, { color: colors.text, borderColor: colors.border }]}
                placeholder="Full Name"
                placeholderTextColor={colors.textSecondary}
                value={name}
                onChangeText={setName}
              />
            </View>
            
            <View style={styles.inputContainer}>
              <Mail size={20} color={colors.textSecondary} style={styles.inputIcon} />
              <TextInput
                style={[styles.input, { color: colors.text, borderColor: colors.border }]}
                placeholder="Email Address"
                placeholderTextColor={colors.textSecondary}
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>
            
            <View style={styles.inputContainer}>
              <Lock size={20} color={colors.textSecondary} style={styles.inputIcon} />
              <TextInput
                style={[styles.input, { color: colors.text, borderColor: colors.border }]}
                placeholder="Password"
                placeholderTextColor={colors.textSecondary}
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity 
                onPress={() => setShowPassword(!showPassword)}
                style={styles.eyeIcon}
              >
                {showPassword ? (
                  <EyeOff size={20} color={colors.textSecondary} />
                ) : (
                  <Eye size={20} color={colors.textSecondary} />
                )}
              </TouchableOpacity>
            </View>
            
            <TouchableOpacity 
              style={[styles.button, { backgroundColor: colors.primary }]}
              onPress={handleRegister}
              disabled={isLoading}
            >
              <Text style={styles.buttonText}>
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </Text>
            </TouchableOpacity>
            
            <View style={styles.dividerContainer}>
              <View style={[styles.divider, { backgroundColor: colors.border }]} />
              <Text style={[styles.dividerText, { color: colors.textSecondary }]}>or continue with</Text>
              <View style={[styles.divider, { backgroundColor: colors.border }]} />
            </View>
            
            <SocialAuthButtons />
            
            <View style={styles.loginContainer}>
              <Text style={[styles.loginText, { color: colors.textSecondary }]}>
                Already have an account?
              </Text>
              <Link href="/(auth)/login" asChild>
                <TouchableOpacity>
                  <Text style={[styles.loginLink, { color: colors.primary }]}> Sign In</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 24,
  },
  header: {
    marginBottom: 32,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 28,
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
  },
  formContainer: {
    width: '100%',
  },
  errorContainer: {
    width: '100%',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  errorText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    position: 'relative',
  },
  inputIcon: {
    position: 'absolute',
    left: 16,
    zIndex: 1,
  },
  input: {
    flex: 1,
    height: 56,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 48,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
  },
  eyeIcon: {
    position: 'absolute',
    right: 16,
    zIndex: 1,
  },
  button: {
    width: '100%',
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  buttonText: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  divider: {
    flex: 1,
    height: 1,
  },
  dividerText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    marginHorizontal: 8,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  loginText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
  },
  loginLink: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
  },
});