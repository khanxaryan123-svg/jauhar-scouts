export interface WorldScoutingItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export const worldScoutingItems: WorldScoutingItem[] = [
  { id: 1, title: "World Organization of the Scout Movement (WOSM)", description: "The largest international Scouting organization, uniting millions of young people worldwide.", icon: "🌍", color: "from-blue-500 to-indigo-600" },
  { id: 2, title: "International Scout Camps", description: "Join exciting camps with scouts from all over the globe for unforgettable adventures.", icon: "🏕️", color: "from-emerald-500 to-teal-600" },
  { id: 3, title: "World Scout Jamboree", description: "The world's largest gathering of scouts, held every four years in different countries.", icon: "🎉", color: "from-purple-500 to-violet-600" },
  { id: 4, title: "Cultural Exchange Programmes", description: "Experience new cultures, traditions, and languages by hosting or visiting scouts abroad.", icon: "🤝", color: "from-orange-500 to-amber-600" },
  { id: 5, title: "Global Peace Initiatives", description: "Participate in projects that promote peace, understanding, and unity across borders.", icon: "🕊️", color: "from-cyan-500 to-sky-600" },
  { id: 6, title: "International Partnerships", description: "Collaborate with scout groups from other countries on shared goals and projects.", icon: "🤝", color: "from-rose-500 to-pink-600" },
];

export interface GlobalOpportunity {
  id: number;
  title: string;
  description: string;
  icon: string;
  difficulty: string;
}

export const globalOpportunities: GlobalOpportunity[] = [
  { id: 1, title: "International Camps", description: "Join summer camps and events with scouts from different countries.", icon: "🏕️", difficulty: "Beginner" },
  { id: 2, title: "Leadership Conferences", description: "Attend global scouting leadership events and workshops.", icon: "📊", difficulty: "Intermediate" },
  { id: 3, title: "Exchange Visits", description: "Visit scout groups in other countries and experience their programs.", icon: "✈️", difficulty: "Intermediate" },
  { id: 4, title: "Volunteer Programmes", description: "Volunteer for international scouting service projects.", icon: "❤️", difficulty: "Intermediate" },
  { id: 5, title: "Youth Forums", description: "Participate in discussions and debates with young leaders worldwide.", icon: "💬", difficulty: "Advanced" },
  { id: 6, title: "Environmental Projects", description: "Work on global environmental initiatives alongside international scouts.", icon: "🌱", difficulty: "Beginner" },
];

export interface Region {
  id: number;
  name: string;
  icon: string;
  color: string;
}

export const regions: Region[] = [
  { id: 1, name: "Asia Pacific Region", icon: "🌏", color: "from-cyan-500 to-blue-600" },
  { id: 2, name: "Europe Region", icon: "🌍", color: "from-blue-500 to-indigo-600" },
  { id: 3, name: "Africa Region", icon: "🌍", color: "from-amber-500 to-orange-600" },
  { id: 4, name: "Arab Region", icon: "🌙", color: "from-orange-500 to-rose-600" },
  { id: 5, name: "Americas Region", icon: "🌎", color: "from-pink-500 to-purple-600" },
  { id: 6, name: "Eurasia Region", icon: "🏔️", color: "from-teal-500 to-emerald-600" },
];

export interface GlobalBenefit {
  id: number;
  title: string;
  icon: string;
}

export const globalBenefits: GlobalBenefit[] = [
  { id: 1, title: "Cultural Exchange", icon: "🌏" },
  { id: 2, title: "Global Friendship", icon: "🤝" },
  { id: 3, title: "Leadership", icon: "👑" },
  { id: 4, title: "Diversity & Inclusion", icon: "🌈" },
  { id: 5, title: "Peace Building", icon: "🕊️" },
  { id: 6, title: "International Collaboration", icon: "🌐" },
];

export interface GlobalFaq {
  id: number;
  question: string;
  answer: string;
}

export const globalFaqs: GlobalFaq[] = [
  { id: 1, question: "Who can participate in global scouting programs?", answer: "All scouts, depending on their age and program, can join various international scouting activities." },
  { id: 2, question: "How often are international events held?", answer: "Many international events are annual, while others like the World Scout Jamboree are every four years." },
  { id: 3, question: "Do I need to speak multiple languages?", answer: "No! English is widely used, and there are often translators or activities that don't require perfect language skills." },
  { id: 4, question: "How can I join an international project?", answer: "Talk to your local scout leaders about upcoming opportunities and how to apply!" },
];

export interface GlobalGalleryImage {
  id: number;
  emoji: string;
}

export const globalGalleryImages: GlobalGalleryImage[] = [
  { id: 1, emoji: "🌍" },
  { id: 2, emoji: "🏕️" },
  { id: 3, emoji: "🎉" },
  { id: 4, emoji: "🤝" },
  { id: 5, emoji: "✈️" },
  { id: 6, emoji: "🌱" },
];
