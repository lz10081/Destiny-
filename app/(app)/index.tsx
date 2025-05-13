import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@/hooks/useTheme';
import { Bell, Star } from 'lucide-react-native';
import { useAuth } from '@/hooks/useAuth';
import { InsightCard } from '@/components/home/InsightCard';
import { ActivityItem } from '@/components/home/ActivityItem';

export default function HomeScreen() {
  const { colors } = useTheme();
  const { user } = useAuth();
  
  const greeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <View>
          <Text style={[styles.greeting, { color: colors.textSecondary }]}>{greeting()}</Text>
          <Text style={[styles.username, { color: colors.text }]}>{user?.displayName || 'Explorer'}</Text>
        </View>
        
        <TouchableOpacity style={[styles.iconButton, { backgroundColor: colors.cardBackground }]}>
          <Bell size={20} color={colors.text} />
        </TouchableOpacity>
      </View>
      
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.topInsight}>
          <InsightCard
            title="Daily Reflection"
            description="What are you grateful for today?"
            actionText="Start Reflection"
            backgroundImage="https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg"
          />
        </View>
        
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>Today's Insight</Text>
            <TouchableOpacity>
              <Text style={[styles.seeAllText, { color: colors.primary }]}>See All</Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.insightsContainer}
          >
            <View style={[styles.insightBox, { backgroundColor: colors.cardBackground }]}>
              <Image
                source={{ uri: 'https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg' }}
                style={styles.insightImage}
                resizeMode="cover"
              />
              <View style={styles.insightContent}>
                <Text style={[styles.insightTitle, { color: colors.text }]}>Self-Awareness</Text>
                <Text style={[styles.insightDescription, { color: colors.textSecondary }]}>
                  Discover your inner strengths and areas for growth
                </Text>
                <View style={styles.insightMeta}>
                  <Star size={14} color={colors.primary} />
                  <Text style={[styles.insightMetaText, { color: colors.textSecondary }]}>5 min read</Text>
                </View>
              </View>
            </View>
            
            <View style={[styles.insightBox, { backgroundColor: colors.cardBackground }]}>
              <Image
                source={{ uri: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg' }}
                style={styles.insightImage}
                resizeMode="cover"
              />
              <View style={styles.insightContent}>
                <Text style={[styles.insightTitle, { color: colors.text }]}>Mindfulness</Text>
                <Text style={[styles.insightDescription, { color: colors.textSecondary }]}>
                  Practice being present in every moment
                </Text>
                <View style={styles.insightMeta}>
                  <Star size={14} color={colors.primary} />
                  <Text style={[styles.insightMetaText, { color: colors.textSecondary }]}>3 min read</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>Recent Activity</Text>
            <TouchableOpacity>
              <Text style={[styles.seeAllText, { color: colors.primary }]}>See All</Text>
            </TouchableOpacity>
          </View>
          
          <ActivityItem
            title="Morning Meditation"
            description="You completed a 10-minute meditation session"
            timestamp="Today, 8:30 AM"
            icon="coffee"
          />
          
          <ActivityItem
            title="Journal Entry"
            description="You wrote about your goals for the week"
            timestamp="Yesterday, 9:15 PM"
            icon="book-open"
          />
          
          <ActivityItem
            title="Personality Quiz"
            description="You discovered your top 3 strengths"
            timestamp="2 days ago"
            icon="check-circle"
          />
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
    paddingVertical: 16,
  },
  greeting: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
  },
  username: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    marginTop: 4,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContent: {
    paddingBottom: 24,
  },
  topInsight: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
  },
  seeAllText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
  },
  insightsContainer: {
    paddingLeft: 24,
    paddingRight: 8,
  },
  insightBox: {
    width: 240,
    borderRadius: 16,
    overflow: 'hidden',
    marginRight: 16,
  },
  insightImage: {
    width: '100%',
    height: 120,
  },
  insightContent: {
    padding: 16,
  },
  insightTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    marginBottom: 4,
  },
  insightDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    marginBottom: 8,
  },
  insightMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  insightMetaText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    marginLeft: 4,
  },
});