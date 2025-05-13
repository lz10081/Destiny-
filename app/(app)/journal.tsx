import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@/hooks/useTheme';
import { CirclePlus as PlusCircle, BookOpen, Calendar, MoveVertical as MoreVertical } from 'lucide-react-native';
import { JournalEntry } from '@/components/journal/JournalEntry';

export default function JournalScreen() {
  const { colors } = useTheme();

  const getCurrentMonth = () => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const now = new Date();
    return `${months[now.getMonth()]} ${now.getFullYear()}`;
  };

  const journalEntries = [
    {
      id: '1',
      title: 'Finding Inner Peace',
      content: 'Today I spent some time reflecting on what brings me inner peace...',
      date: 'Today, 8:30 AM',
      mood: 'calm',
    },
    {
      id: '2',
      title: 'Career Aspirations',
      content: 'I\'ve been thinking about my long-term career goals and what truly fulfills me...',
      date: 'Yesterday, 10:15 PM',
      mood: 'motivated',
    },
    {
      id: '3',
      title: 'Relationship Reflections',
      content: 'My conversation with Sarah today made me realize how important authentic connections are...',
      date: '2 days ago',
      mood: 'reflective',
    },
  ];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <View>
          <Text style={[styles.title, { color: colors.text }]}>Journal</Text>
          <View style={styles.monthContainer}>
            <Calendar size={16} color={colors.textSecondary} />
            <Text style={[styles.monthText, { color: colors.textSecondary }]}>{getCurrentMonth()}</Text>
          </View>
        </View>
        
        <TouchableOpacity 
          style={[styles.newEntryButton, { backgroundColor: colors.primary }]}
        >
          <PlusCircle size={20} color="#FFFFFF" />
          <Text style={styles.newEntryText}>New Entry</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.statsContainer}>
          <View style={[styles.statsCard, { backgroundColor: colors.cardBackground }]}>
            <BookOpen size={24} color={colors.primary} />
            <View style={styles.statsTextContainer}>
              <Text style={[styles.statsValue, { color: colors.text }]}>12</Text>
              <Text style={[styles.statsLabel, { color: colors.textSecondary }]}>Entries</Text>
            </View>
          </View>
          
          <View style={[styles.statsCard, { backgroundColor: colors.cardBackground }]}>
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/1834407/pexels-photo-1834407.jpeg' }}
              style={styles.moodImage}
            />
            <View style={styles.statsTextContainer}>
              <Text style={[styles.statsValue, { color: colors.text }]}>Calm</Text>
              <Text style={[styles.statsLabel, { color: colors.textSecondary }]}>Top Mood</Text>
            </View>
          </View>
          
          <View style={[styles.statsCard, { backgroundColor: colors.cardBackground }]}>
            <View style={[styles.streakBadge, { backgroundColor: colors.successLight }]}>
              <Text style={[styles.streakText, { color: colors.success }]}>5</Text>
            </View>
            <View style={styles.statsTextContainer}>
              <Text style={[styles.statsValue, { color: colors.text }]}>5 Days</Text>
              <Text style={[styles.statsLabel, { color: colors.textSecondary }]}>Current Streak</Text>
            </View>
          </View>
        </View>
        
        <View style={styles.entriesContainer}>
          <View style={styles.entriesHeader}>
            <Text style={[styles.entriesTitle, { color: colors.text }]}>Recent Entries</Text>
            <TouchableOpacity>
              <MoreVertical size={20} color={colors.textSecondary} />
            </TouchableOpacity>
          </View>
          
          {journalEntries.map((entry) => (
            <JournalEntry
              key={entry.id}
              title={entry.title}
              content={entry.content}
              date={entry.date}
              mood={entry.mood}
            />
          ))}
        </View>
        
        <View style={styles.promptsContainer}>
          <Text style={[styles.promptsTitle, { color: colors.text }]}>Writing Prompts</Text>
          
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.promptsScrollContent}
          >
            <TouchableOpacity style={[styles.promptCard, { backgroundColor: colors.primaryLight }]}>
              <Text style={[styles.promptText, { color: colors.primary }]}>
                What are three things you\'re grateful for today?
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.promptCard, { backgroundColor: colors.cardBackground }]}>
              <Text style={[styles.promptText, { color: colors.text }]}>
                Describe a challenge you\'re facing and how you might overcome it.
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.promptCard, { backgroundColor: colors.cardBackground }]}>
              <Text style={[styles.promptText, { color: colors.text }]}>
                What made you smile today?
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 16,
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 28,
    marginBottom: 4,
  },
  monthContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  monthText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    marginLeft: 4,
  },
  newEntryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  newEntryText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#FFFFFF',
    marginLeft: 4,
  },
  scrollContent: {
    paddingBottom: 24,
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  statsCard: {
    flex: 1,
    padding: 12,
    borderRadius: 12,
    marginRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  statsCard3: {
    marginRight: 0,
  },
  statsTextContainer: {
    marginLeft: 8,
  },
  statsValue: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
  },
  statsLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
  },
  moodImage: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  streakBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  streakText: {
    fontFamily: 'Inter-Bold',
    fontSize: 12,
  },
  entriesContainer: {
    marginBottom: 24,
    paddingHorizontal: 24,
  },
  entriesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  entriesTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
  },
  promptsContainer: {
    paddingHorizontal: 24,
  },
  promptsTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    marginBottom: 16,
  },
  promptsScrollContent: {
    paddingRight: 24,
  },
  promptCard: {
    width: 280,
    padding: 16,
    borderRadius: 12,
    marginRight: 16,
  },
  promptText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    lineHeight: 20,
  },
});