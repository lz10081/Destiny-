import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

export function SocialAuthButtons() {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.cardBackground, borderColor: colors.border }]}
      >
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>G</Text>
        </View>
        <Text style={[styles.buttonText, { color: colors.text }]}>Google</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.cardBackground, borderColor: colors.border }]}
      >
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>A</Text>
        </View>
        <Text style={[styles.buttonText, { color: colors.text }]}>Apple</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.cardBackground, borderColor: colors.border }]}
      >
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>f</Text>
        </View>
        <Text style={[styles.buttonText, { color: colors.text }]}>Facebook</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    marginHorizontal: 4,
  },
  iconContainer: {
    marginRight: 8,
  },
  icon: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
  },
  buttonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
  },
});