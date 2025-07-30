// Header

import { LucideIcon } from "lucide-react";

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
  name: string;
  email: string;
  image?: string;
  initials?: string;
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
