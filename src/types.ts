export interface Treatment {
  id: string;
  title: string;
  description: string;
  image: string;
  benefits: string[];
  details?: {
    overview: string;
    process: string[];
    eligibility: string[];
  };
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  treatment: string;
  content: string;
  image: string;
  rating: number;
}