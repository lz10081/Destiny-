import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@/hooks/useTheme';

interface InsightCardProps {
  title: string;
  description: string;
  actionText: string;
  backgroundImage: string;
}

export function InsightCard({ title, description, actionText, backgroundImage }: InsightCardProps) {
  const { colors } = useTheme();

  return (
    <TouchableOpacity activeOpacity={0.9}>
      <ImageBackground
        source={{ uri: backgroundImage }}
        style={styles.container}
        imageStyle={styles.backgroundImage}
      >
        <LinearGradient
          colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.7)']}
          style={styles.gradient}
        >
          <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: colors.primary }]}
            >
              <Text style={styles.buttonText}>{actionText}</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 180,
    borderRadius: 16,
    overflow: 'hidden',
  },
  backgroundImage: {
    borderRadius: 16,
  },
  gradient: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 16,
  },
  content: {
    maxWidth: '80%',
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  description: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#E0E0E0',
    marginBottom: 16,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  buttonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#FFFFFF',
  },
});