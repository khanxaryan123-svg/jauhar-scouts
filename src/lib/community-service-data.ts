export interface CommunityProgramme {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export const communityProgrammes: CommunityProgramme[] = [
  { id: 1, title: "Tree Plantation", description: "Plant trees to create a greener, more sustainable community.", icon: "🌳", color: "from-green-500 to-green-700" },
  { id: 2, title: "Cleanliness Drives", description: "Organize clean-up campaigns for public spaces and neighborhoods.", icon: "🧹", color: "from-blue-500 to-blue-700" },
  { id: 3, title: "Blood Donation Awareness", description: "Promote blood donation and organize donation camps.", icon: "🩸", color: "from-red-500 to-red-700" },
  { id: 4, title: "Charity & Food Distribution", description: "Collect and distribute food and essential items to those in need.", icon: "🍲", color: "from-orange-500 to-orange-700" },
  { id: 5, title: "Elderly Care Visits", description: "Spend time with elderly community members and provide support.", icon: "👵", color: "from-purple-500 to-purple-700" },
  { id: 6, title: "School Support Programmes", description: "Support local schools with supplies and mentorship.", icon: "📚", color: "from-yellow-500 to-yellow-700" },
  { id: 7, title: "Disaster Relief Support", description: "Provide assistance during times of natural disasters.", icon: "⛑️", color: "from-teal-500 to-teal-700" },
  { id: 8, title: "Environmental Protection", description: "Initiatives to protect and preserve the environment.", icon: "🌍", color: "from-emerald-500 to-emerald-700" },
];

export interface ImpactStat {
  id: number;
  count: string;
  label: string;
  icon: string;
}

export const impactStats: ImpactStat[] = [
  { id: 1, count: "500+", label: "Volunteers", icon: "👥" },
  { id: 2, count: "100+", label: "Community Projects", icon: "📋" },
  { id: 3, count: "10,000+", label: "Trees Planted", icon: "🌲" },
  { id: 4, count: "2,000+", label: "Families Supported", icon: "🏠" },
];

export interface VolunteerActivity {
  id: number;
  title: string;
  description: string;
  icon: string;
  difficulty: string;
}

export const volunteerActivities: VolunteerActivity[] = [
  { id: 1, title: "Beach & Park Clean-up", description: "Clean public spaces and promote environmental awareness.", icon: "🏖️", difficulty: "Beginner" },
  { id: 2, title: "Community Awareness Campaigns", description: "Spread awareness about important social issues.", icon: "📢", difficulty: "Beginner" },
  { id: 3, title: "Food Distribution", description: "Distribute food and essential items to families in need.", icon: "🥘", difficulty: "Intermediate" },
  { id: 4, title: "Health Awareness Drives", description: "Organize health camps and awareness sessions.", icon: "🏥", difficulty: "Intermediate" },
  { id: 5, title: "Fundraising Events", description: "Plan and execute events to raise funds for good causes.", icon: "💰", difficulty: "Advanced" },
  { id: 6, title: "Emergency Relief Activities", description: "Provide immediate support during emergencies.", icon: "🚨", difficulty: "Advanced" },
];

export interface Benefit {
  id: number;
  title: string;
  icon: string;
}

export const benefits: Benefit[] = [
  { id: 1, title: "Compassion", icon: "❤️" },
  { id: 2, title: "Leadership", icon: "👑" },
  { id: 3, title: "Responsibility", icon: "🛡️" },
  { id: 4, title: "Teamwork", icon: "🤝" },
  { id: 5, title: "Communication", icon: "💬" },
  { id: 6, title: "Social Impact", icon: "✨" },
];

export interface CommunityFaq {
  id: number;
  question: string;
  answer: string;
}

export const communityFaqs: CommunityFaq[] = [
  { id: 1, question: "Who can participate in community service activities?", answer: "All scouts, regardless of age, can participate in age-appropriate community service activities." },
  { id: 2, question: "How often do community service events take place?", answer: "We organize events on a monthly basis, with additional opportunities during special occasions.",  },
  { id: 3, question: "Do I need prior experience to volunteer?", answer: "No prior experience is required—we provide all necessary training and guidance!" },
  { id: 4, question: "Can schools or other organizations partner with us?", answer: "Absolutely! We welcome partnerships with schools, NGOs, and other community organizations." },
];

export interface GalleryImage {
  id: number;
  emoji: string;
}

export const galleryImages: GalleryImage[] = [
  { id: 1, emoji: "🌳" },
  { id: 2, emoji: "🧹" },
  { id: 3, emoji: "🍲" },
  { id: 4, emoji: "🏥" },
  { id: 5, emoji: "🎒" },
  { id: 6, emoji: "🤝" },
];
