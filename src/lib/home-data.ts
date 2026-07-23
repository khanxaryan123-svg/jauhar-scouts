import {
  Calendar,
  Globe,
  Headphones,
  Info,
  MapPin,
  Users,
} from "lucide-react";

export const navItems = [
  "Discover Scouting",
  "Programmes & Skills",
  "Scout Life",
  "AI Scout Hub",
  "Scout Journey",
  "Unit Locator",
] as const;

export interface QuickLinkItem {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  iconLabel: string;
  gradient: string;
}

export const quickLinks = [
  {
    title: "About Us",
    subtitle: "Our vision and history",
    icon: Info,
    iconLabel: "🏛️",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    title: "Membership",
    subtitle: "Why join, registration and categories",
    icon: Users,
    iconLabel: "👥",
    gradient: "from-orange-500 to-orange-700",
  },
  {
    title: "Global Scouting",
    subtitle: "57M+ Scouts in 176 Countries",
    icon: Globe,
    iconLabel: "🌍",
    gradient: "from-sky-600 to-cyan-600",
  },
  {
    title: "Events Calendar",
    subtitle: "Activities and upcoming events",
    icon: Calendar,
    iconLabel: "📅",
    gradient: "from-purple-500 to-purple-700",
  },
  {
    title: "Unit Locator",
    subtitle: "Find a group near you",
    icon: MapPin,
    iconLabel: "📍",
    gradient: "from-yellow-500 to-orange-600",
  },
  {
    title: "Contact & Support",
    subtitle: "We're here to help you",
    icon: Headphones,
    iconLabel: "🎧",
    gradient: "from-emerald-600 to-green-800",
  },
] as const;

export const stats = [
  { value: "57M+", label: "Scouts Worldwide in 176 Countries", emoji: "🌐" },
  { value: "1950", label: "Established in Pakistan", emoji: "⭐" },
  { value: "500K+", label: "Active Scouts in Pakistan", emoji: "👥" },
  { value: "150+", label: "Scout Groups Across Pakistan", emoji: "🏕️" },
  { value: "Endless", label: "Adventures Together", emoji: "🏔️" },
] as const;

export const programmes = [
  {
    title: "Adventure",
    description:
      "Camps, hiking and outdoor challenges that build resilience and teamwork.",
    icon: "🎒",
    headerColor: "#4A90E2",
    hasBadge: false,
    link: "/adventure",
    image: "/adventure profile.png",
  },
  {
    title: "Skills for Life",
    description:
      "Learn practical skills like knots, first aid, cooking, pioneering and more.",
    icon: "🪢",
    headerColor: "#F5A623",
    hasBadge: false,
    link: "/skills-for-life",
    image: "/skills for life profile.png",
  },
  {
    title: "Leadership",
    description:
      "Develop confidence and leadership through action and teamwork.",
    icon: "📣",
    headerColor: "#50C878",
    hasBadge: false,
    link: "/leadership",
    image: "/leadership profile.png",
  },
  {
    title: "Community Service",
    description:
      "Make a positive impact and contribute to a better community.",
    icon: "🤝",
    headerColor: "#7B68EE",
    hasBadge: false,
    link: "/community-service",
    image: "/community service profile.png",
  },
  {
    title: "Global Scouting",
    description:
      "Be a part of a worldwide movement promoting peace, understanding and unity.",
    icon: "🌍",
    headerColor: "#20B2AA",
    hasBadge: true,
    link: "/global-scouting",
    image: "/global scouting profile.png",
  },
] as const;

export const newsItems: NewsItem[] = [
  { tag: "NATIONAL", title: "National Jamboree Pakistan 2025", date: "Thursday, July 25, 2025", description: "Thousands of scouts from across Pakistan came together for an unforgettable jamboree.", emoji: "🏕️", headerColor: "#4CAF50", image: "/national jambooree.png" },
  { tag: "WORLD", title: "World Scout Day Celebrations", date: "Sunday, May 25, 2025", description: "Scouts around the world celebrated the 118th World Scout Day with pride and unity.", emoji: "🌍", headerColor: "#2196F3", image: "/world scout day.png" },
  { tag: "EVENT", title: "Leadership Training Workshop", date: "Monday, May 20, 2025", description: "Building tomorrow's leaders through hands-on training and mentorship.", emoji: "🎖️", headerColor: "#FF9800", image: "/leadership training.png" },
  {
    tag: "INTERNATIONAL",
    title: "Asia-Pacific Regional Scout Conference",
    date: "Friday, May 16, 2025",
    description: "Scouts from across the region gathered to share ideas and strengthen partnerships.",
    emoji: "🤝",
    headerColor: "#E91E63",
    image: "/asia-pacific.png",
  },
];

export const journeyItems = [
  { count: "2", label: "Years in Scouting", emoji: "🌲" },
  { count: "36", label: "Camping Nights", emoji: "⛺" },
  { count: "125", label: "Hiking Kilometres", emoji: "🏔️" },
  { count: "58", label: "Service Hours", emoji: "❤️" },
  { count: "23", label: "Badges Earned", emoji: "🎖️" },
  { count: "4", label: "Awards Received", emoji: "🏆" },
] as const;

export const footerLinks = [
  "Discover Scouting",
  "Programmes & Skills",
  "Scout Life",
  "AI Scout Hub",
  "Scout Journey",
  "Contact Us",
] as const;

export interface FooterLinkGroup {
  title: string;
  links: string[];
}

export interface NewsItem {
  tag: string;
  title: string;
  date: string;
  description: string;
  emoji: string;
  headerColor: string;
  image: string;
}

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "DISCOVER SCOUTING",
    links: ["About Us", "Membership"],
  },
  {
    title: "PROGRAMMES & SKILLS",
    links: ["Event Calendar"],
  },
  {
    title: "SCOUT LIFE",
    links: ["Media Hub", "Community"],
  },
  {
    title: "AI SCOUT HUB",
    links: ["AI Scout Planner", "Smart Mentors"],
  },
  {
    title: "SCOUT JOURNEY",
    links: ["My Achievements", "Journey"],
  },
  {
    title: "CONTACT US",
    links: ["Info 21 Ellistus", "Pune-411045"],
  },
] as const;
