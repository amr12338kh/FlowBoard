import {
  DropdownItemProps,
  FeatureProps,
  GetStartedCardProps,
  NavigationItemProps,
  NotificationsProps,
  TestimonialsProps,
  UseCasesProps,
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
  DollarSign,
  BookOpen,
  CreditCard,
  HelpCircle,
  LogOut,
  User,
  Settings,
  Heart,
  Code,
  Palette,
  Rocket,
  Bot,
  CalendarCheck,
  LayoutDashboard,
  Type,
  BellRing,
} from "lucide-react";

/* Header */

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

// Mobile Navigation
export const mobileNavigationItems = [
  { name: "Product", href: "/product", icon: Zap },
  { name: "Solutions", href: "/solutions", icon: Target },
  { name: "Pricing", href: "/pricing", icon: DollarSign },
  { name: "Resources", href: "/resources", icon: BookOpen },
  { name: "Documentation", href: "/docs", icon: FileText },
  { name: "Help Center", href: "/help", icon: HeadphonesIcon },
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
  { name: "Account", href: "/account", icon: User2 },
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Team", href: "/team", icon: Users },
  { name: "My Tasks", href: "/tasks", icon: CheckSquare },
  { name: "Projects", href: "/projects", icon: FolderOpen },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Billing", href: "/billing", icon: CreditCard },
  { name: "Help & Support", href: "/support", icon: HelpCircle },
  { name: "Sign Out", href: "/signout", icon: LogOut },
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

// Sidebar User Menu
export const sidebarUserMenuItems: DropdownItemProps[] = [
  { name: "Account", href: "/account", icon: User },
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "Billing", href: "/billing", icon: CreditCard },
  { name: "Help & Support", href: "/support", icon: HelpCircle },
];

// Companies
export const companiesData = [
  {
    name: "Amazon",
    image: "/amazon-logo-black.png",
  },
  {
    name: "Spotify",
    image: "/spotify-logo-black.png",
  },
  {
    name: "Netflix",
    image: "/netflix-logo-black.png",
  },
  {
    name: "Vercel",
    image: "/vercel-logo-black.png",
  },
  {
    name: "Adobe",
    image: "/Adobe-logo-black.png",
  },
];

// Use Cases
export const useCases: UseCasesProps[] = [
  {
    icon: Users,
    title: "Small Teams",
    description:
      "Streamline communication, assign tasks, and track progress as your team scales from 5 to 50 members.",
    features: [
      "Real-time collaboration",
      "Task assignments",
      "Progress tracking",
      "Team chat integration",
    ],
    stats: "95% faster project completion",
    cta: "Start with teams",
    href: "/",
  },
  {
    icon: Building2,
    title: "Enterprise",
    description:
      "Manage complex projects across departments with advanced permissions, reporting, and enterprise-grade security.",
    features: [
      "Advanced permissions",
      "Custom workflows",
      "Enterprise SSO",
      "Advanced analytics",
    ],
    stats: "500+ enterprise customers",
    cta: "Enterprise solutions",
    href: "/",
  },
  {
    icon: Rocket,
    title: "Startups",
    description:
      "Launch products faster with AI-powered project templates, sprint planning, and investor reporting tools.",
    features: [
      "AI project templates",
      "Sprint planning",
      "Investor dashboards",
      "Growth tracking",
    ],
    stats: "3x faster time to market",
    cta: "Scale your startup",
    href: "/",
  },
  {
    icon: Palette,
    title: "Creative Agencies",
    description:
      "Handle multiple client projects with custom branding, time tracking, and client collaboration portals.",
    features: [
      "Client portals",
      "Time tracking",
      "Custom branding",
      "Asset management",
    ],
    stats: "40% better client satisfaction",
    cta: "Grow your agency",
    href: "/",
  },
  {
    icon: Code,
    title: "Development Teams",
    description:
      "Integrate with GitHub, track sprints, manage releases, and coordinate between dev, design, and product teams.",
    features: [
      "GitHub integration",
      "Sprint tracking",
      "Release management",
      "Bug tracking",
    ],
    stats: "50% fewer bugs in production",
    cta: "Build better software",
    href: "/",
  },
  {
    icon: Heart,
    title: "Non-profits",
    description:
      "Coordinate volunteers, track donations, manage events, and report impact with purpose-built tools.",
    features: [
      "Volunteer management",
      "Donation tracking",
      "Event planning",
      "Impact reporting",
    ],
    stats: "Free for qualifying organizations",
    cta: "Create impact",
    href: "/",
  },
];

// Features
export const features: FeatureProps[] = [
  {
    id: 1,
    title: "Automation",
    description: "AI handles repetitive tasks so you can focus on real work.",
    icon: Bot,
  },
  {
    id: 2,
    title: "Prioritization",
    description: "Smartly ranks tasks by urgency and impact.",
    icon: Target,
  },
  {
    id: 3,
    title: "Deadlines",
    description: "Predicts realistic deadlines based on team pace.",
    icon: CalendarCheck,
  },
  {
    id: 4,
    title: "Summaries",
    description: "Auto-generates meeting notes and action items.",
    icon: FileText,
  },
  {
    id: 5,
    title: "Insights",
    description: "Highlights blockers and suggests task owners.",
    icon: LayoutDashboard,
  },
  {
    id: 6,
    title: "Quick Add",
    description: "Create tasks in plain language. AI does the rest.",
    icon: Type,
  },
  {
    id: 7,
    title: "Smart Alerts",
    description: "Get only the notifications that really matter.",
    icon: BellRing,
  },
  {
    id: 8,
    title: "Collaboration",
    description: "Work together in real-time with AI-powered suggestions.",
    icon: Users,
  },
];

// Testimonials
export const testimonials: TestimonialsProps[] = [
  {
    logo: "/spotify-logo.png",
    companySize: "Enterprise",
    industry: "Technology",
    testimonial:
      "FlowBoard is our air traffic control. We have the visibility to scale production and support a higher number of ad campaigns to support our revenue goals.",
    name: "Eugenia Contreras",
    role: "Associate Manager",
    company: "Spotify",
    companyColor: "#1DB954",
  },
  {
    logo: "/netflix-logo.png",
    companySize: "Enterprise",
    industry: "Entertainment",
    testimonial:
      "FlowBoard transforms how our teams collaborate on campaigns. It reduces friction and ensures everyone is aligned from day one.",
    name: "Alex Kim",
    role: "Global Marketing Coordinator",
    company: "Netflix",
    companyColor: "#E50914",
  },
  {
    logo: "/amazon-logo.png",
    companySize: "Enterprise",
    industry: "E-commerce",
    testimonial:
      "FlowBoard helps our marketing operations stay agile. We can rapidly draft, review, and launch campaigns at scale.",
    name: "Daniel Carter",
    role: "Senior Campaign Manager",
    company: "Amazon",
    companyColor: "#FF9900",
  },
  {
    logo: "/adobe-logo.png",
    companySize: "Enterprise",
    industry: "Creative Software",
    testimonial:
      "With FlowBoard, our content teams streamline their workflows. Brief creation is faster, clearer, and always aligned with our brand.",
    name: "Maya Singh",
    role: "Content Operations Manager",
    company: "Adobe",
    companyColor: "#FF0000",
  },
  {
    logo: "/vercel-logo-black.png",
    companySize: "Mid-Market",
    industry: "Developer Tools",
    testimonial:
      "FlowBoard AI aligns our product and marketing teams effortlessly. It reduces back-and-forth and lets us focus on shipping faster.",
    name: "Sophia Lopez",
    role: "Product Marketing Lead",
    company: "Vercel",
    companyColor: "#000000",
  },
];

export const getStarted: GetStartedCardProps[] = [
  {
    title: "Try the FlowBoard demo",
    subtitle: "See FlowBoard in action",
    href: "#",
  },
  {
    title: "Discover resources",
    subtitle: "Help articles and tutorials",
    href: "#",
  },
  {
    title: "Start with a template",
    subtitle: "Get started faster with a template",
    href: "#",
  },
];
