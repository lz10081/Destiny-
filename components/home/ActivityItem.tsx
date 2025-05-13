import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { Coffee, BookOpen, CheckCircle } from 'lucide-react-native';

interface ActivityItemProps {
  title: string;
  description: string;
  timestamp: string;
  icon: string;
}

export function ActivityItem({ title, description, timestamp, icon }: ActivityItemProps) {
  const { colors } = useTheme();

  const renderIcon = () => {
    switch (icon) {
      case 'coffee':
        return <Coffee size={24} color={colors.primary} />;
      case 'book-open':
        return <BookOpen size={24} color={colors.primary} />;
      case 'check-circle':
        return <CheckCircle size={24} color={colors.primary} />;
      default:
        return <Coffee size={24} color={colors.primary} />;
    }
  };

  return (
    <TouchableOpacity 
      style={[styles.container, { backgroundColor: colors.cardBackground }]}
      activeOpacity={0.7}
    >
      <View style={[styles.iconContainer, { backgroundColor: colors.primaryLight }]}>
        {renderIcon()}
      </View>
      <View style={styles.content}>
        <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
        <Text style={[styles.description, { color: colors.textSecondary }]}>
          {description}
        </Text>
        <Text style={[styles.timestamp, { color: colors.textTertiary }]}>
          {timestamp}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginHorizontal: 24,
    marginBottom: 12,
    borderRadius: 12,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  content: {
    flex: 1,
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    marginBottom: 4,
  },
  description: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    marginBottom: 4,
  },
  timestamp: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
  },
});