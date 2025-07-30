import {
  DropdownItemProps,
  NavigationItemProps,
  NotificationsProps,
} from "@/types/types";
import {
  BarChart3,
  CheckSquare,
  FolderOpen,
  Home,
  User2,
  Users,
  Zap,
  Star,
  HeadphonesIcon,
  Building2,
  Sparkles,
  Target,
  TrendingUp,
  Shield,
  Globe,
  MessageSquare,
  Briefcase,
  GraduationCap,
  FileText,
  Play,
} from "lucide-react";
// Header

// Marketing Header Navigation (Like Asana)
export const navigationItems: NavigationItemProps[] = [
  {
    name: "Product",
    href: "/product",
    active: false,
    hasDropdown: true,
    dropdownItems: [
      {
        name: "Features",
        href: "/features",
        icon: Sparkles,
        description: "Discover what makes FlowBoard powerful",
      },
      {
        name: "AI Assistant",
        href: "/ai-features",
        icon: Zap,
        description: "AI-powered task management",
        badge: "New",
      },
      {
        name: "Kanban Boards",
        href: "/kanban",
        icon: Target,
        description: "Visualize your workflow",
      },
      {
        name: "Analytics",
        href: "/analytics",
        icon: TrendingUp,
        description: "Track team performance",
      },
      {
        name: "Integrations",
        href: "/integrations",
        icon: Globe,
        description: "Connect your favorite tools",
      },
      {
        name: "Security",
        href: "/security",
        icon: Shield,
        description: "Enterprise-grade security",
      },
    ],
  },
  {
    name: "Solutions",
    href: "/solutions",
    active: false,
    hasDropdown: true,
    dropdownItems: [
      {
        name: "For Teams",
        href: "/solutions/teams",
        icon: Users,
        description: "Perfect for small to medium teams",
      },
      {
        name: "For Enterprise",
        href: "/solutions/enterprise",
        icon: Building2,
        description: "Scale across your organization",
      },
      {
        name: "For Startups",
        href: "/solutions/startups",
        icon: Briefcase,
        description: "Move fast and stay organized",
      },
      {
        name: "For Agencies",
        href: "/solutions/agencies",
        icon: Star,
        description: "Manage client projects efficiently",
      },
    ],
  },
  {
    name: "Resources",
    href: "/resources",
    active: false,
    hasDropdown: true,
    dropdownItems: [
      {
        name: "Documentation",
        href: "/docs",
        icon: FileText,
        description: "Complete guides and API reference",
      },
      {
        name: "Blog",
        href: "/blog",
        icon: MessageSquare,
        description: "Latest news and insights",
      },
      {
        name: "Help Center",
        href: "/help",
        icon: HeadphonesIcon,
        description: "Get support when you need it",
      },
      {
        name: "Templates",
        href: "/templates",
        icon: Star,
        description: "Ready-made project templates",
      },
      {
        name: "Webinars",
        href: "/webinars",
        icon: Play,
        description: "Learn from experts",
      },
      {
        name: "Case Studies",
        href: "/case-studies",
        icon: GraduationCap,
        description: "See how teams succeed",
      },
    ],
  },
  {
    name: "Pricing",
    href: "/pricing",
    active: false,
    hasDropdown: false,
  },
];

// Dashboard Navigation (When logged in)
export const dashboardNavigationItems: NavigationItemProps[] = [
  { name: "Dashboard", href: "/dashboard", icon: Home, active: true },
  { name: "Projects", href: "/projects", icon: FolderOpen, active: false },
  { name: "My Tasks", href: "/tasks", icon: CheckSquare, active: false },
  { name: "Team", href: "/team", icon: Users, active: false },
  { name: "Analytics", href: "/analytics", icon: BarChart3, active: false },
];

// User Dropdown
export const dropdownItems: DropdownItemProps[] = [
  { name: "My Profile", href: "/profile", icon: User2 },
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Team", href: "/team", icon: Users },
  { name: "My Tasks", href: "/tasks", icon: CheckSquare },
  { name: "Projects", href: "/projects", icon: FolderOpen },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
];

// Notifications Dropdown
export const notifications: NotificationsProps[] = [
  {
    id: 1,
    title: "New task assigned",
    message: "You were assigned to 'Design homepage layout'",
    time: "2 min ago",
    unread: true,
  },
  {
    id: 2,
    title: "Comment on task",
    message: "Sarah commented on 'API Integration'",
    time: "1 hour ago",
    unread: true,
  },
  {
    id: 3,
    title: "Project updated",
    message: "Website Redesign project status changed",
    time: "3 hours ago",
    unread: false,
  },
];
