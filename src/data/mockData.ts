export interface Opportunity {
  id: string;
  title: string;
  location: string;
  type: string;
  description: string;
  date: string;
  image: string;
}

export interface Course {
  id: string;
  title: string;
  category: string;
  duration: string;
  level: string;
  description: string;
  thumbnail: string;
}

export interface Member {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  bio: string;
}

export const mockOpportunities: Opportunity[] = [
  {
    id: "1",
    title: "Rhino Conservation Trek",
    location: "Kruger National Park, South Africa",
    type: "Field Work",
    description: "Join our expert rangers to monitor rhino populations and help with anti-poaching initiatives.",
    date: "Aug 15 - Aug 28, 2026",
    image: "https://images.unsplash.com/photo-1535941339077-2dd1c79631c8?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "2",
    title: "Coral Reef Restoration",
    location: "Great Barrier Reef, Australia",
    type: "Marine Research",
    description: "Dive in and assist marine biologists in planting new coral fragments to restore endangered reefs.",
    date: "Sep 10 - Sep 24, 2026",
    image: "https://images.unsplash.com/photo-1546026423-cc46426ba658?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "3",
    title: "Amazon Rainforest Monitoring",
    location: "Manaus, Brazil",
    type: "Data Collection",
    description: "Use camera traps and drones to monitor wildlife movements and detect illegal logging activities.",
    date: "Oct 05 - Oct 19, 2026",
    image: "https://images.unsplash.com/photo-1518182170546-076616fdcbfa?auto=format&fit=crop&q=80&w=800",
  },
];

export const mockCourses: Course[] = [
  {
    id: "c1",
    title: "Introduction to Wildlife Conservation",
    category: "Ecology",
    duration: "4 Weeks",
    level: "Beginner",
    description: "Learn the fundamentals of wildlife conservation, biodiversity, and ecosystem management.",
    thumbnail: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "c2",
    title: "Advanced Tracking Techniques",
    category: "Field Skills",
    duration: "6 Weeks",
    level: "Intermediate",
    description: "Master the art of animal tracking using traditional methods and modern technology.",
    thumbnail: "https://images.unsplash.com/photo-1518022525094-1da9bbae4e02?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "c3",
    title: "Conservation Photography",
    category: "Media",
    duration: "3 Weeks",
    level: "All Levels",
    description: "Use your camera to tell compelling stories that inspire conservation action.",
    thumbnail: "https://images.unsplash.com/photo-1500645607379-37f26f6345e6?auto=format&fit=crop&q=80&w=800",
  },
];

export const mockMembers: Member[] = [
  {
    id: "m1",
    name: "Elena Rodriguez",
    role: "Marine Biologist",
    location: "Sydney, Australia",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    bio: "Passionate about shark conservation and reducing plastic pollution in our oceans.",
  },
  {
    id: "m2",
    name: "David Chen",
    role: "Forestry Expert",
    location: "Vancouver, Canada",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    bio: "Working on sustainable forestry practices and indigenous land rights.",
  },
  {
    id: "m3",
    name: "Aisha Patel",
    role: "Wildlife Photographer",
    location: "Nairobi, Kenya",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    bio: "Using photography to highlight the beauty and fragility of African ecosystems.",
  },
];
