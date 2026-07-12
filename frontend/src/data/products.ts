export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  verified: boolean;
  image: string;
}

export const featuredProducts: Product[] = [
  {
    id: 1,
    name: "AI Resume Builder",
    category: "Productivity",
    price: 29,
    rating: 4.9,
    verified: true,
    image: "/products/resume-ai.png",
  },
  {
    id: 2,
    name: "AI Image Generator",
    category: "Design",
    price: 49,
    rating: 4.8,
    verified: true,
    image: "/products/image-ai.png",
  },
  {
    id: 3,
    name: "AI Chatbot Pro",
    category: "Business",
    price: 79,
    rating: 5.0,
    verified: true,
    image: "/products/chatbot.png",
  },
  {
    id: 4,
    name: "AI Voice Studio",
    category: "Audio",
    price: 39,
    rating: 4.7,
    verified: true,
    image: "/products/voice-ai.png",
  },
  {
    id: 5,
    name: "AI Video Creator",
    category: "Video",
    price: 99,
    rating: 4.9,
    verified: false,
    image: "/products/video-ai.png",
  },
  {
    id: 6,
    name: "AI Code Assistant",
    category: "Development",
    price: 59,
    rating: 4.9,
    verified: true,
    image: "/products/code-ai.png",
  },
];