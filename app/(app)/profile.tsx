import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@/hooks/useTheme';
import { User, Settings, Moon, Bell, ShieldCheck, HelpCircle, LogOut } from 'lucide-react-native';
import { useAuth } from '@/hooks/useAuth';
import { router } from 'expo-router';
import { ProfileMenuItem } from '@/components/profile/ProfileMenuItem';

export default function ProfileScreen() {
  const { colors, isDark, toggleTheme } = useTheme();
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    router.replace('/(auth)/welcome');
  };
  
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>Profile</Text>
        <TouchableOpacity style={[styles.settingsButton, { backgroundColor: colors.cardBackground }]}>
          <Settings size={20} color={colors.text} />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={[styles.profileCard, { backgroundColor: colors.cardBackground }]}>
          <View style={styles.profileHeader}>
            <View style={styles.avatarContainer}>
              {user?.photoURL ? (
                <Image
                  source={{ uri: user.photoURL }}
                  style={styles.avatar}
                />
              ) : (
                <View style={[styles.avatarPlaceholder, { backgroundColor: colors.primaryLight }]}>
                  <User size={32} color={colors.primary} />
                </View>
              )}
            </View>
            
            <View style={styles.profileInfo}>
              <Text style={[styles.profileName, { color: colors.text }]}>
                {user?.displayName || 'Anonymous User'}
              </Text>
              <Text style={[styles.profileEmail, { color: colors.textSecondary }]}>
                {user?.email || 'No email available'}
              </Text>
            </View>
          </View>
          
          <TouchableOpacity style={[styles.editProfileButton, { backgroundColor: colors.primaryLight }]}>
            <Text style={[styles.editProfileText, { color: colors.primary }]}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.statsRow}>
          <View style={[styles.statCard, { backgroundColor: colors.cardBackground }]}>
            <Text style={[styles.statValue, { color: colors.text }]}>12</Text>
            <Text style={[styles.statLabel, { color: colors.textSecondary }]}>Journal Entries</Text>
          </View>
          
          <View style={[styles.statCard, { backgroundColor: colors.cardBackground }]}>
            <Text style={[styles.statValue, { color: colors.text }]}>24</Text>
            <Text style={[styles.statLabel, { color: colors.textSecondary }]}>Insights Read</Text>
          </View>
          
          <View style={[styles.statCard, { backgroundColor: colors.cardBackground }]}>
            <Text style={[styles.statValue, { color: colors.text }]}>5</Text>
            <Text style={[styles.statLabel, { color: colors.textSecondary }]}>Day Streak</Text>
          </View>
        </View>
        
        <View style={[styles.menuSection, { backgroundColor: colors.cardBackground }]}>
          <View style={styles.settingsItem}>
            <View style={styles.settingsItemLeft}>
              <Moon size={20} color={colors.text} />
              <Text style={[styles.settingsText, { color: colors.text }]}>Dark Mode</Text>
            </View>
            <Switch
              value={isDark}
              onValueChange={toggleTheme}
              trackColor={{ false: colors.border, true: colors.primary }}
              thumbColor="#FFFFFF"
            />
          </View>
          
          <ProfileMenuItem
            icon="bell"
            title="Notifications"
            showBadge
          />
          
          <ProfileMenuItem
            icon="shield-check"
            title="Privacy & Security"
          />
          
          <ProfileMenuItem
            icon="help-circle"
            title="Help & Support"
          />
        </View>
        
        <TouchableOpacity 
          style={[styles.signOutButton, { backgroundColor: colors.cardBackground }]}
          onPress={handleSignOut}
        >
          <LogOut size={20} color={colors.error} />
          <Text style={[styles.signOutText, { color: colors.error }]}>Sign Out</Text>
        </TouchableOpacity>
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
  },
  settingsButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  profileCard: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarContainer: {
    marginRight: 16,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  avatarPlaceholder: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    marginBottom: 4,
  },
  profileEmail: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
  },
  editProfileButton: {
    alignSelf: 'stretch',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  editProfileText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    marginHorizontal: 4,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  statValue: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    marginBottom: 4,
  },
  statLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    textAlign: 'center',
  },
  menuSection: {
    borderRadius: 16,
    marginBottom: 24,
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
  settingsItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingsText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    marginLeft: 12,
  },
  signOutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 16,
  },
  signOutText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    marginLeft: 8,
  },
});