// Header

import { icons, LucideIcon } from "lucide-react";
import { Session } from "next-auth";
import { ReactNode } from "react";

export interface NavigationItemProps {
  name: string;
  href: string;
  icon?: LucideIcon;
  active?: boolean;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItemProps[];
}

export interface DropdownItemProps {
  name: string;
  href: string;
  icon?: LucideIcon;
  description?: string;
  badge?: string;
}

export interface NotificationsProps {
  id: number;
  title: string;
  message: string;
  time: string;
  unread: boolean;
}

export interface UserAvatarProps {
  session: Session | null;
  className?: string;
  avatarClassName?: string;
  withText?: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: "admin" | "member" | "viewer";
}
export interface Project {
  id: string;
  name: string;
  description: string;
  members: string[];
  createdAt: string;
}
export interface Task {
  id: string;
  title: string;
  description: string;
  status: "todo" | "in-progress" | "review" | "done";
  priority: "low" | "medium" | "high" | "urgent";
  assigneeId: string;
  projectId: string;
  listId: string;
  position: number;
  dueDate?: string;
  createdAt: string;
}

export interface HeaderProps {
  className?: string;
  user?: {
    name: string;
    email: string;
    avatar?: string;
    initials?: string;
  };
  onThemeToggle?: () => void;
  isDark?: boolean;
  notificationCount?: number;
}

export interface CarouselProps {
  children: ReactNode;
  itemWidth?: number;
  gap?: number;
  showNavigation?: boolean;
  containerPadding?: string;
  containerClassName?: string;
  carouselClassName?: string;
  buttonsContainerClassName?: string;
  buttonVariant?:
    | "primary"
    | "secondary"
    | "basic"
    | "destructive"
    | "outline"
    | "ghost"
    | "link";
  autoPlay?: boolean;
  autoPlayInterval?: number;
  fullWidthPerItem?: boolean;
  instantSnap?: boolean;
  onNext?: () => void;
  onPrev?: () => void;
  activeIndex?: number;
}

export interface UseCasesProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  stats: string;
  cta: string;
  href: string;
}

export interface FeatureProps {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

// Testimonials
export interface TestimonialsProps {
  logo: string;
  companySize: "Startup" | "SMB" | "Enterprise" | "Mid-Market";
  industry: string;
  testimonial: string;
  name: string;
  role: string;
  company: string;
  companyColor: string;
}
