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
};

export const getIcon = (name: IconName, props?: LucideProps) => {
  const Icon = iconMap[name];
  return Icon ? <Icon {...props} /> : null;
};

export default iconMap;
