import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { Bell, ShieldCheck, HelpCircle, ChevronRight } from 'lucide-react-native';

interface ProfileMenuItemProps {
  icon: string;
  title: string;
  showBadge?: boolean;
}

export function ProfileMenuItem({ icon, title, showBadge = false }: ProfileMenuItemProps) {
  const { colors } = useTheme();

  const renderIcon = () => {
    switch (icon) {
      case 'bell':
        return <Bell size={20} color={colors.text} />;
      case 'shield-check':
        return <ShieldCheck size={20} color={colors.text} />;
      case 'help-circle':
        return <HelpCircle size={20} color={colors.text} />;
      default:
        return <Bell size={20} color={colors.text} />;
    }
  };

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.leftContent}>
        {renderIcon()}
        <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
      </View>
      
      <View style={styles.rightContent}>
        {showBadge && (
          <View style={[styles.badge, { backgroundColor: colors.primary }]}>
            <Text style={styles.badgeText}>2</Text>
          </View>
        )}
        <ChevronRight size={20} color={colors.textSecondary} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    marginLeft: 12,
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  badgeText: {
    fontFamily: 'Inter-Bold',
    fontSize: 10,
    color: '#FFFFFF',
  },
});