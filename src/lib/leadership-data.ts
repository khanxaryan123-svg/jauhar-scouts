export interface LeadershipProgramme {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export const leadershipProgrammes: LeadershipProgramme[] = [
  { id: 1, title: "Patrol Leadership", description: "Lead your patrol and make decisions as a team.", icon: "👥", color: "from-blue-500 to-blue-700" },
  { id: 2, title: "Team Building", description: "Bring people together and build strong, cohesive teams.", icon: "🤝", color: "from-green-500 to-green-700" },
  { id: 3, title: "Decision Making", description: "Learn to make effective and responsible decisions.", icon: "⚖️", color: "from-purple-500 to-purple-700" },
  { id: 4, title: "Communication Skills", description: "Master the art of clear and effective communication.", icon: "💬", color: "from-orange-500 to-orange-700" },
  { id: 5, title: "Problem Solving", description: "Develop skills to solve complex problems creatively.", icon: "🧩", color: "from-cyan-500 to-cyan-700" },
  { id: 6, title: "Public Speaking", description: "Build confidence speaking in front of groups.", icon: "🎤", color: "from-pink-500 to-pink-700" },
  { id: 7, title: "Event Management", description: "Plan and organize successful scouting events.", icon: "📅", color: "from-amber-500 to-amber-700" },
  { id: 8, title: "Community Leadership", description: "Lead change and make a difference in your community.", icon: "🏘️", color: "from-teal-500 to-teal-700" },
];

export interface LeadershipQuality {
  id: number;
  title: string;
  icon: string;
}

export const leadershipQualities: LeadershipQuality[] = [
  { id: 1, title: "Responsibility", icon: "🛡️" },
  { id: 2, title: "Integrity", icon: "⭐" },
  { id: 3, title: "Confidence", icon: "💪" },
  { id: 4, title: "Discipline", icon: "🎯" },
  { id: 5, title: "Teamwork", icon: "🤝" },
  { id: 6, title: "Respect", icon: "🙏" },
  { id: 7, title: "Initiative", icon: "🚀" },
  { id: 8, title: "Service", icon: "❤️" },
];

export interface LeadershipActivity {
  id: number;
  title: string;
  description: string;
  icon: string;
  difficulty: string;
}

export const leadershipActivities: LeadershipActivity[] = [
  { id: 1, title: "Team Challenges", description: "Collaborative challenges to build teamwork and trust.", icon: "🏆", difficulty: "Beginner" },
  { id: 2, title: "Leadership Workshops", description: "Interactive workshops to develop leadership skills.", icon: "🎓", difficulty: "Intermediate" },
  { id: 3, title: "Community Service Projects", description: "Lead projects that make a positive impact.", icon: "🏘️", difficulty: "Advanced" },
  { id: 4, title: "Outdoor Leadership Camps", description: "Lead in outdoor and adventurous settings.", icon: "⛺", difficulty: "Advanced" },
  { id: 5, title: "Group Discussions", description: "Facilitate meaningful conversations and debates.", icon: "💬", difficulty: "Beginner" },
  { id: 6, title: "Scout Patrol Competitions", description: "Lead your patrol in friendly competitions.", icon: "🏅", difficulty: "Intermediate" },
];

export interface SuccessStory {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export const successStories: SuccessStory[] = [
  { id: 1, name: "Ahmed Khan", role: "Scout Leader", quote: "Scouting taught me that true leadership is about serving others.", avatar: "👨" },
  { id: 2, name: "Sarah Ahmed", role: "Patrol Leader", quote: "Through scouting, I found the confidence to lead with courage and compassion.", avatar: "👩" },
  { id: 3, name: "Omar Ali", role: "Troop Leader", quote: "The leadership skills I learned in scouting have helped me in every area of my life.", avatar: "🧑" },
];

export interface LeadershipFaq {
  id: number;
  question: string;
  answer: string;
}

export const leadershipFaqs: LeadershipFaq[] = [
  { id: 1, question: "At what age can scouts join the Leadership programme?", answer: "The Leadership programme is available for scouts aged 11 and above, with age-appropriate activities." },
  { id: 2, question: "Do I need prior leadership experience?", answer: "No! The programme is designed to teach leadership skills from scratch, regardless of previous experience." },
  { id: 3, question: "What kind of activities are included?", answer: "The programme includes team challenges, workshops, community service projects, outdoor camps, and more!" },
  { id: 4, question: "How are leadership skills developed?", answer: "Through hands-on learning, mentorship from experienced leaders, and opportunities to lead real projects." },
];

export interface GalleryImage {
  id: number;
  emoji: string;
}

export const galleryImages: GalleryImage[] = [
  { id: 1, emoji: "👥" },
  { id: 2, emoji: "🏕️" },
  { id: 3, emoji: "🎤" },
  { id: 4, emoji: "🏘️" },
  { id: 5, emoji: "🏆" },
  { id: 6, emoji: "🎓" },
];
