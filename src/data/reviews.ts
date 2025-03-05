
export interface Review {
  id: number;
  name: string;
  role: string;
  avatar: string;
  review: string;
  rating: number;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Ramavath Nagaraju",
    role: "UI/UX Designer",
    avatar: "/mypic1.png",
    review: "Found amazing clients through this platform. The project matching system is spot-on!",
    rating: 5,
  },
  {
    id: 2,
    name: "Korra Santhosh",
    role: "Full Stack Developer",
    avatar: "/mypic1.png",
    review: "Great platform for freelancers. The proposal system is straightforward and effective.",
    rating: 5,
  },
  {
    id: 3,
    name: "Bhukya Kumar",
    role: "Content Writer",
    avatar: "/mypic1.png",
    review: "The quality of projects and clients is consistently high. Highly recommended!",
    rating: 4,
  },
  {
    id: 4,
    name: "Narendra",
    role: "Project Manager",
    avatar: "/mypic1.png",
    review: "As a client, I've found exceptional talent here. The vetting process ensures quality.",
    rating: 5,
  },
  {
    id: 5,
    name: "Vishnu",
    role: "Graphic Designer",
    avatar: "/mypic1.png",
    review: "The platform makes it easy to showcase my portfolio and connect with clients.",
    rating: 4,
  },
  {
    id: 6,
    name: "Shashi",
    role: "Marketing Specialist",
    avatar: "/placeholder.svg",
    review: "The collaboration tools are intuitive and make remote work seamless.",
    rating: 5,
  },
  {
    id: 7,
    name: "Aditya",
    role: "Data Scientist",
    avatar: "/mypic1.png",
    review: "Found specialized projects matching my expertise. The platform understands niche skills.",
    rating: 5,
  },
];
