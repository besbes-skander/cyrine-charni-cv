import {
  Mail,
  Linkedin,
  Phone,
  MapPin,
  Download,
  Calendar,
  TrendingUp,
  Users,
  Target,
  Heart,
  Sparkles,
  Book,
  Plane,
  Music,
  Compass,
  Puzzle,
  LucideProps
} from 'lucide-react';
import { IconName } from '@/types';

const iconMap: Record<IconName, React.ComponentType<LucideProps>> = {
  Mail,
  Linkedin,
  Phone,
  MapPin,
  Download,
  Calendar,
  TrendingUp,
  Users,
  Target,
  Heart,
  Sparkles,
  Book,
  Plane,
  Music,
  Compass,
  Puzzle,
};

export const getIcon = (name: IconName, props?: LucideProps) => {
  const Icon = iconMap[name];
  return Icon ? <Icon {...props} /> : null;
};

export const getIconComponent = (name: string): React.ComponentType<LucideProps> | null => {
  return iconMap[name as IconName] || null;
};

export default iconMap;
