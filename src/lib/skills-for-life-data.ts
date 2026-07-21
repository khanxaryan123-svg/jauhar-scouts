export interface SkillCategory {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export const skillCategories: SkillCategory[] = [
  {
    id: 1,
    title: "Knot Tying",
    description: "Master essential knots for camping, safety, and everyday use.",
    icon: "🔗",
    color: "from-blue-500 to-blue-700",
  },
  {
    id: 2,
    title: "First Aid",
    description: "Learn life-saving first aid skills and emergency response.",
    icon: "🩹",
    color: "from-red-500 to-red-700",
  },
  {
    id: 3,
    title: "Cooking & Camp Kitchen",
    description: "Cook delicious meals outdoors with limited resources.",
    icon: "🍳",
    color: "from-orange-500 to-orange-700",
  },
  {
    id: 4,
    title: "Pioneering",
    description: "Build structures using ropes and wooden poles.",
    icon: "🏗️",
    color: "from-green-500 to-green-700",
  },
  {
    id: 5,
    title: "Map Reading & Navigation",
    description: "Find your way using maps, compasses, and natural landmarks.",
    icon: "🧭",
    color: "from-sky-500 to-sky-700",
  },
  {
    id: 6,
    title: "Fire Safety",
    description: "Learn to start, maintain, and extinguish fires safely.",
    icon: "🔥",
    color: "from-yellow-500 to-orange-600",
  },
  {
    id: 7,
    title: "Survival Skills",
    description: "Essential skills for surviving in the wilderness.",
    icon: "🏕️",
    color: "from-amber-600 to-amber-800",
  },
  {
    id: 8,
    title: "Teamwork & Leadership",
    description: "Develop teamwork and leadership through collaborative activities.",
    icon: "🤝",
    color: "from-purple-500 to-purple-700",
  },
];

export interface LearningOutcome {
  id: number;
  title: string;
  icon: string;
}

export const learningOutcomes: LearningOutcome[] = [
  { id: 1, title: "Leadership", icon: "👑" },
  { id: 2, title: "Confidence", icon: "💪" },
  { id: 3, title: "Discipline", icon: "🎯" },
  { id: 4, title: "Communication", icon: "💬" },
  { id: 5, title: "Problem Solving", icon: "🧩" },
  { id: 6, title: "Responsibility", icon: "🛡️" },
];

export interface GalleryImage {
  id: number;
  emoji: string;
}

export const galleryImages: GalleryImage[] = [
  { id: 1, emoji: "🎒" },
  { id: 2, emoji: "🌲" },
  { id: 3, emoji: "⛺" },
  { id: 4, emoji: "🪵" },
  { id: 5, emoji: "🔦" },
  { id: 6, emoji: "🌅" },
];

export interface Activity {
  id: number;
  title: string;
  description: string;
  emoji: string;
  difficulty: string;
}

export const activities: Activity[] = [
  {
    id: 1,
    title: "Basic Knot Tying Workshop",
    description: "Learn 8 essential knots for everyday use and camping.",
    emoji: "🔗",
    difficulty: "Beginner",
  },
  {
    id: 2,
    title: "First Aid Certification",
    description: "Get certified in basic first aid and CPR.",
    emoji: "🩹",
    difficulty: "Intermediate",
  },
  {
    id: 3,
    title: "Campfire Cooking Challenge",
    description: "Cook a 3-course meal using only campfire tools.",
    emoji: "🍳",
    difficulty: "Advanced",
  },
];

export interface Faq {
  id: number;
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    id: 1,
    question: "What age groups can participate in Skills for Life?",
    answer: "Our Skills for Life programme is designed for scouts of all ages, with age-appropriate activities.",
  },
  {
    id: 2,
    question: "Do I need prior experience?",
    answer: "No! All activities are designed for beginners and we'll teach you everything you need to know.",
  },
  {
    id: 3,
    question: "Are the activities safe?",
    answer: "Absolutely! All activities are supervised by trained leaders and follow strict safety guidelines.",
  },
  {
    id: 4,
    question: "Can parents participate?",
    answer: "Parents are welcome to join as volunteers or observers—many activities are family-friendly!",
  },
];
