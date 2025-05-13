import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { MoreHorizontal } from 'lucide-react-native';

interface JournalEntryProps {
  title: string;
  content: string;
  date: string;
  mood: string;
}

export function JournalEntry({ title, content, date, mood }: JournalEntryProps) {
  const { colors } = useTheme();
  
  const getMoodColor = () => {
    switch (mood) {
      case 'calm':
        return '#4E9ACE';
      case 'motivated':
        return '#E9966F';
      case 'reflective':
        return '#8884D8';
      default:
        return colors.primary;
    }
  };

  return (
    <TouchableOpacity 
      style={[styles.container, { backgroundColor: colors.cardBackground }]}
      activeOpacity={0.7}
    >
      <View style={[styles.moodIndicator, { backgroundColor: getMoodColor() }]} />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
          <TouchableOpacity>
            <MoreHorizontal size={20} color={colors.textSecondary} />
          </TouchableOpacity>
        </View>
        <Text 
          style={[styles.preview, { color: colors.textSecondary }]}
          numberOfLines={2}
        >
          {content}
        </Text>
        <Text style={[styles.date, { color: colors.textTertiary }]}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
  },
  moodIndicator: {
    width: 4,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
  },
  preview: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 8,
  },
  date: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
  },
});