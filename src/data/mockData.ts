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
    title: "Western Ghats Biodiversity Trek",
    location: "Pune, Maharashtra",
    type: "Field Work",
    description: "Join our local experts to monitor native flora and fauna in the Sahyadri mountains and help with conservation initiatives.",
    date: "Aug 15 - Aug 28, 2026",
    image: "https://images.unsplash.com/photo-1610303492770-56d1bb098256?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "2",
    title: "Indrayani River Restoration",
    location: "Pune, Maharashtra",
    type: "Water Conservation",
    description: "Assist environmentalists in cleaning riverbanks, planting native trees, and restoring the river ecosystem.",
    date: "Sep 10 - Sep 24, 2026",
    image: "https://images.unsplash.com/photo-1596700055106-cf76a894a4c4?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "3",
    title: "Bhimashankar Wildlife Monitoring",
    location: "Pune, Maharashtra",
    type: "Data Collection",
    description: "Use camera traps to monitor the Indian Giant Squirrel movements and detect illegal deforestation activities.",
    date: "Oct 05 - Oct 19, 2026",
    image: "https://images.unsplash.com/photo-1552650059-86bb32c5f115?auto=format&fit=crop&q=80&w=800",
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
    thumbnail: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "c2",
    title: "Advanced Tracking Techniques",
    category: "Field Skills",
    duration: "6 Weeks",
    level: "Intermediate",
    description: "Master the art of animal tracking using traditional methods and modern technology.",
    thumbnail: "https://images.unsplash.com/photo-1551127274-123ea3998f45?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "c3",
    title: "Conservation Photography",
    category: "Media",
    duration: "3 Weeks",
    level: "All Levels",
    description: "Use your camera to tell compelling stories that inspire conservation action.",
    thumbnail: "https://images.unsplash.com/photo-1533038590840-1cbea6e017ce?auto=format&fit=crop&q=80&w=800",
  },
];

export const mockMembers: Member[] = [
  {
    id: "m1",
    name: "Rahul Deshmukh",
    role: "Environmental Biologist",
    location: "Pune, Maharashtra",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
    bio: "Passionate about Western Ghats conservation and restoring local ecosystems.",
  },
  {
    id: "m2",
    name: "Priya Kulkarni",
    role: "Forestry Expert",
    location: "Pune, Maharashtra",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    bio: "Working on sustainable agroforestry practices and indigenous land preservation.",
  },
  {
    id: "m3",
    name: "Aditya Patil",
    role: "Wildlife Photographer",
    location: "Pune, Maharashtra",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    bio: "Using photography to highlight the beauty and fragility of Maharashtra's biodiversity.",
  },
];
