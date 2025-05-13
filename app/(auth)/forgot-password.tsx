import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@/hooks/useTheme';
import { ArrowLeft, Mail, CheckCircle } from 'lucide-react-native';

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const { colors } = useTheme();
  
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleResetPassword = async () => {
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <View style={styles.content}>
          <TouchableOpacity 
            onPress={() => router.back()}
            style={[styles.backButton, { backgroundColor: colors.cardBackground }]}
          >
            <ArrowLeft size={20} color={colors.text} />
          </TouchableOpacity>
          
          {!isSubmitted ? (
            <>
              <View style={styles.header}>
                <Text style={[styles.title, { color: colors.text }]}>Forgot Password</Text>
                <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
                  Enter your email address to receive a password reset link
                </Text>
              </View>

              <View style={styles.formContainer}>
                {error && (
                  <View style={[styles.errorContainer, { backgroundColor: colors.errorLight }]}>
                    <Text style={[styles.errorText, { color: colors.error }]}>{error}</Text>
                  </View>
                )}
                
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
                
                <TouchableOpacity 
                  style={[styles.button, { backgroundColor: colors.primary }]}
                  onPress={handleResetPassword}
                  disabled={isLoading}
                >
                  <Text style={styles.buttonText}>
                    {isLoading ? 'Sending...' : 'Send Reset Link'}
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <View style={styles.successContainer}>
              <CheckCircle size={64} color={colors.success} />
              <Text style={[styles.successTitle, { color: colors.text }]}>Check Your Email</Text>
              <Text style={[styles.successMessage, { color: colors.textSecondary }]}>
                We've sent a password reset link to {email}. Please check your inbox and follow the instructions.
              </Text>
              <TouchableOpacity 
                style={[styles.button, { backgroundColor: colors.primary }]}
                onPress={() => router.back()}
              >
                <Text style={styles.buttonText}>Back to Login</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 24,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  header: {
    marginBottom: 32,
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 28,
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    lineHeight: 24,
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
    marginBottom: 24,
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
  button: {
    width: '100%',
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  successContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  successTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    marginTop: 24,
    marginBottom: 8,
    textAlign: 'center',
  },
  successMessage: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
  },
});