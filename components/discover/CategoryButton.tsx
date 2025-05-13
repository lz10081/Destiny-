import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { 
  Lotus, Briefcase, Heart, Activity, Compass, TrendingUp 
} from 'lucide-react-native';

interface CategoryButtonProps {
  name: string;
  icon: string;
}

export function CategoryButton({ name, icon }: CategoryButtonProps) {
  const { colors } = useTheme();

  const renderIcon = () => {
    switch (icon) {
      case 'lotus':
        return <Lotus size={24} color={colors.primary} />;
      case 'briefcase':
        return <Briefcase size={24} color={colors.primary} />;
      case 'heart':
        return <Heart size={24} color={colors.primary} />;
      case 'activity':
        return <Activity size={24} color={colors.primary} />;
      case 'compass':
        return <Compass size={24} color={colors.primary} />;
      case 'trending-up':
        return <TrendingUp size={24} color={colors.primary} />;
      default:
        return <Lotus size={24} color={colors.primary} />;
    }
  };

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: colors.cardBackground }]}
      activeOpacity={0.7}
    >
      {renderIcon()}
      <Text style={[styles.name, { color: colors.text }]}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '31%',
    aspectRatio: 1,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  name: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    marginTop: 8,
  },
});