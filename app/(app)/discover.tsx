import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@/hooks/useTheme';
import { Search, Filter, ArrowRight } from 'lucide-react-native';
import { CategoryButton } from '@/components/discover/CategoryButton';

export default function DiscoverScreen() {
  const { colors } = useTheme();

  const categories = [
    { id: '1', name: 'Spiritual', icon: 'lotus' },
    { id: '2', name: 'Career', icon: 'briefcase' },
    { id: '3', name: 'Relationships', icon: 'heart' },
    { id: '4', name: 'Health', icon: 'activity' },
    { id: '5', name: 'Purpose', icon: 'compass' },
    { id: '6', name: 'Growth', icon: 'trending-up' },
  ];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>Discover</Text>
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
          Explore insights for your journey
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={[styles.searchBar, { backgroundColor: colors.cardBackground, borderColor: colors.border }]}>
          <Search size={20} color={colors.textSecondary} />
          <TextInput
            style={[styles.searchInput, { color: colors.text }]}
            placeholder="Search for topics, insights..."
            placeholderTextColor={colors.textSecondary}
          />
        </View>
        <TouchableOpacity style={[styles.filterButton, { backgroundColor: colors.cardBackground }]}>
          <Filter size={20} color={colors.text} />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.categoriesSection}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Categories</Text>
          <View style={styles.categoriesGrid}>
            {categories.map((category) => (
              <CategoryButton
                key={category.id}
                name={category.name}
                icon={category.icon}
              />
            ))}
          </View>
        </View>

        <View style={styles.featuredSection}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>Featured Insights</Text>
            <TouchableOpacity style={styles.seeAllButton}>
              <Text style={[styles.seeAllText, { color: colors.primary }]}>See All</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={[styles.featuredCard, { backgroundColor: colors.cardBackground }]}>
            <View style={styles.featuredContent}>
              <View style={[styles.featuredTag, { backgroundColor: colors.primaryLight }]}>
                <Text style={[styles.featuredTagText, { color: colors.primary }]}>Featured</Text>
              </View>
              <Text style={[styles.featuredTitle, { color: colors.text }]}>
                Finding Your Life Purpose
              </Text>
              <Text style={[styles.featuredDescription, { color: colors.textSecondary }]}>
                A step-by-step guide to discovering what truly matters to you and defining your path forward.
              </Text>
              <View style={styles.featuredCta}>
                <Text style={[styles.featuredCtaText, { color: colors.primary }]}>Read More</Text>
                <ArrowRight size={16} color={colors.primary} />
              </View>
            </View>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg' }}
              style={styles.featuredImage}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.popularSection}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>Popular Now</Text>
            <TouchableOpacity style={styles.seeAllButton}>
              <Text style={[styles.seeAllText, { color: colors.primary }]}>See All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.popularScrollContent}
          >
            <TouchableOpacity style={[styles.popularCard, { backgroundColor: colors.cardBackground }]}>
              <Image
                source={{ uri: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg' }}
                style={styles.popularImage}
                resizeMode="cover"
              />
              <View style={styles.popularContent}>
                <Text style={[styles.popularTitle, { color: colors.text }]}>
                  Mindfulness Practices
                </Text>
                <Text style={[styles.popularDescription, { color: colors.textSecondary }]}>
                  Simple techniques to stay present and centered
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.popularCard, { backgroundColor: colors.cardBackground }]}>
              <Image
                source={{ uri: 'https://images.pexels.com/photos/268941/pexels-photo-268941.jpeg' }}
                style={styles.popularImage}
                resizeMode="cover"
              />
              <View style={styles.popularContent}>
                <Text style={[styles.popularTitle, { color: colors.text }]}>
                  Building Connections
                </Text>
                <Text style={[styles.popularDescription, { color: colors.textSecondary }]}>
                  Creating meaningful relationships that last
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.popularCard, { backgroundColor: colors.cardBackground }]}>
              <Image
                source={{ uri: 'https://images.pexels.com/photos/696644/pexels-photo-696644.jpeg' }}
                style={styles.popularImage}
                resizeMode="cover"
              />
              <View style={styles.popularContent}>
                <Text style={[styles.popularTitle, { color: colors.text }]}>
                  Career Fulfillment
                </Text>
                <Text style={[styles.popularDescription, { color: colors.textSecondary }]}>
                  Finding purpose in your professional life
                </Text>
              </View>
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
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 16,
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 28,
    marginBottom: 4,
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    marginLeft: 8,
  },
  filterButton: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContent: {
    paddingBottom: 24,
  },
  categoriesSection: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  sectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    marginBottom: 16,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featuredSection: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  seeAllButton: {},
  seeAllText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
  },
  featuredCard: {
    flexDirection: 'row',
    borderRadius: 16,
    overflow: 'hidden',
  },
  featuredContent: {
    flex: 3,
    padding: 16,
  },
  featuredTag: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginBottom: 8,
  },
  featuredTagText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
  },
  featuredTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    marginBottom: 8,
  },
  featuredDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  featuredCta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featuredCtaText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    marginRight: 4,
  },
  featuredImage: {
    flex: 2,
  },
  popularSection: {
    marginBottom: 16,
  },
  popularScrollContent: {
    paddingLeft: 24,
    paddingRight: 8,
  },
  popularCard: {
    width: 200,
    borderRadius: 16,
    overflow: 'hidden',
    marginRight: 16,
  },
  popularImage: {
    width: '100%',
    height: 120,
  },
  popularContent: {
    padding: 12,
  },
  popularTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    marginBottom: 4,
  },
  popularDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    lineHeight: 18,
  },
});