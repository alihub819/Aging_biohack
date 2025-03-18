import React from 'react';
import Layout from '../components/Layout';
import { Calendar, ArrowRight } from 'lucide-react';
import type { BlogPost } from '../types';

const posts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Regenerative Medicine",
    excerpt: "Exploring the latest breakthroughs in stem cell therapy and regenerative medicine.",
    date: "2024-03-15",
    category: "Research",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    author: {
      name: "Aging BioHacks",
      role: "Clinic",
      image: "https://scontent.flhe7-1.fna.fbcdn.net/v/t39.30808-1/482260041_650656560872172_4278988343809861039_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=AUe5bHTMMxMQ7kNvgH49mAu&_nc_oc=AdgPf1JTIPbLbm6h5c5iDlRMFHMyNbIyYnJ8IrGOxhWmyuhyeygvUiW8M3zT5YwSJiM&_nc_zt=24&_nc_ht=scontent.flhe7-1.fna&_nc_gid=A6BWsN5fVpUrPD-OvKwKyUg&oh=00_AYD0Sz5bf_73qxLtuPiYtZhmJxVx3Qnj39-S30yTmKeMWA&oe=67C6452D"
    }
  },
  {
    id: "2",
    title: "Understanding Exosome Therapy",
    excerpt: "A comprehensive guide to exosome therapy and its potential applications.",
    date: "2024-03-10",
    category: "Treatments",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    author: {
      name: "Aging BioHacks",
      role: "Clinic",
      image: "https://scontent.flhe7-1.fna.fbcdn.net/v/t39.30808-1/482260041_650656560872172_4278988343809861039_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=AUe5bHTMMxMQ7kNvgH49mAu&_nc_oc=AdgPf1JTIPbLbm6h5c5iDlRMFHMyNbIyYnJ8IrGOxhWmyuhyeygvUiW8M3zT5YwSJiM&_nc_zt=24&_nc_ht=scontent.flhe7-1.fna&_nc_gid=A6BWsN5fVpUrPD-OvKwKyUg&oh=00_AYD0Sz5bf_73qxLtuPiYtZhmJxVx3Qnj39-S30yTmKeMWA&oe=67C6452D"
    }
  },
  {
    id: "3",
    title: "Patient Success Story: Autoimmune Recovery",
    excerpt: "How regenerative medicine helped one patient overcome autoimmune challenges.",
    date: "2024-03-05",
    category: "Success Stories",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    author: {
      name: "Aging BioHacks",
      role: "Clinic",
      image: "https://scontent.flhe7-1.fna.fbcdn.net/v/t39.30808-1/482260041_650656560872172_4278988343809861039_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=AUe5bHTMMxMQ7kNvgH49mAu&_nc_oc=AdgPf1JTIPbLbm6h5c5iDlRMFHMyNbIyYnJ8IrGOxhWmyuhyeygvUiW8M3zT5YwSJiM&_nc_zt=24&_nc_ht=scontent.flhe7-1.fna&_nc_gid=A6BWsN5fVpUrPD-OvKwKyUg&oh=00_AYD0Sz5bf_73qxLtuPiYtZhmJxVx3Qnj39-S30yTmKeMWA&oe=67C6452D"
    }
  },
  {
    id: "4",
    title: "The Benefits of NAD+ Therapy for Cellular Energy",
    excerpt: "Discover how NAD+ therapy can boost energy production and promote cellular repair.",
    date: "2024-02-28",
    category: "Treatments",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    author: {
      name: "Aging BioHacks",
      role: "Clinic",
      image: "https://scontent.flhe7-1.fna.fbcdn.net/v/t39.30808-1/482260041_650656560872172_4278988343809861039_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=AUe5bHTMMxMQ7kNvgH49mAu&_nc_oc=AdgPf1JTIPbLbm6h5c5iDlRMFHMyNbIyYnJ8IrGOxhWmyuhyeygvUiW8M3zT5YwSJiM&_nc_zt=24&_nc_ht=scontent.flhe7-1.fna&_nc_gid=A6BWsN5fVpUrPD-OvKwKyUg&oh=00_AYD0Sz5bf_73qxLtuPiYtZhmJxVx3Qnj39-S30yTmKeMWA&oe=67C6452D"
    }
  },
  {
    id: "5",
    title: "How Stem Cell Therapy is Transforming Joint Health",
    excerpt: "Learn how stem cell therapy can help reduce inflammation and promote joint repair.",
    date: "2024-02-20",
    category: "Treatments",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    author: {
      name: "Aging BioHacks",
      role: "Clinic",
      image: "https://scontent.flhe7-1.fna.fbcdn.net/v/t39.30808-1/482260041_650656560872172_4278988343809861039_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=AUe5bHTMMxMQ7kNvgH49mAu&_nc_oc=AdgPf1JTIPbLbm6h5c5iDlRMFHMyNbIyYnJ8IrGOxhWmyuhyeygvUiW8M3zT5YwSJiM&_nc_zt=24&_nc_ht=scontent.flhe7-1.fna&_nc_gid=A6BWsN5fVpUrPD-OvKwKyUg&oh=00_AYD0Sz5bf_73qxLtuPiYtZhmJxVx3Qnj39-S30yTmKeMWA&oe=67C6452D"
    }
  },
  {
    id: "6",
    title: "Hormone Replacement Therapy: Balancing Your Vitality",
    excerpt: "Explore the role of HRT in restoring hormonal balance and enhancing well-being.",
    date: "2024-02-15",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    author: {
      name: "Aging BioHacks",
      role: "Clinic",
      image: "https://scontent.flhe7-1.fna.fbcdn.net/v/t39.30808-1/482260041_650656560872172_4278988343809861039_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=AUe5bHTMMxMQ7kNvgH49mAu&_nc_oc=AdgPf1JTIPbLbm6h5c5iDlRMFHMyNbIyYnJ8IrGOxhWmyuhyeygvUiW8M3zT5YwSJiM&_nc_zt=24&_nc_ht=scontent.flhe7-1.fna&_nc_gid=A6BWsN5fVpUrPD-OvKwKyUg&oh=00_AYD0Sz5bf_73qxLtuPiYtZhmJxVx3Qnj39-S30yTmKeMWA&oe=67C6452D"
    }
  },
  {
    id: "7",
    title: "IV Nutrient Therapy: Rehydration and Revitalization",
    excerpt: "A closer look at IV nutrient therapy and how it supports overall wellness.",
    date: "2024-02-10",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    author: {
      name: "Aging BioHacks",
      role: "Clinic",
      image: "https://scontent.flhe7-1.fna.fbcdn.net/v/t39.30808-1/482260041_650656560872172_4278988343809861039_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=AUe5bHTMMxMQ7kNvgH49mAu&_nc_oc=AdgPf1JTIPbLbm6h5c5iDlRMFHMyNbIyYnJ8IrGOxhWmyuhyeygvUiW8M3zT5YwSJiM&_nc_zt=24&_nc_ht=scontent.flhe7-1.fna&_nc_gid=A6BWsN5fVpUrPD-OvKwKyUg&oh=00_AYD0Sz5bf_73qxLtuPiYtZhmJxVx3Qnj39-S30yTmKeMWA&oe=67C6452D"
    }
  },
  {
    id: "8",
    title: "Cellular Health: The Foundation of Wellness",
    excerpt: "Understand why cellular health is crucial for maintaining overall vitality and preventing aging.",
    date: "2024-02-05",
    category: "Research",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    author: {
      name: "Aging BioHacks",
      role: "Clinic",
      image: "https://scontent.flhe7-1.fna.fbcdn.net/v/t39.30808-1/482260041_650656560872172_4278988343809861039_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=AUe5bHTMMxMQ7kNvgH49mAu&_nc_oc=AdgPf1JTIPbLbm6h5c5iDlRMFHMyNbIyYnJ8IrGOxhWmyuhyeygvUiW8M3zT5YwSJiM&_nc_zt=24&_nc_ht=scontent.flhe7-1.fna&_nc_gid=A6BWsN5fVpUrPD-OvKwKyUg&oh=00_AYD0Sz5bf_73qxLtuPiYtZhmJxVx3Qnj39-S30yTmKeMWA&oe=67C6452D"
    }
  },
  {
    id: "9",
    title: "Advances in Regenerative Medicine: A Comprehensive Overview",
    excerpt: "Stay updated with the latest advances and breakthroughs in regenerative medicine.",
    date: "2024-02-01",
    category: "Research",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    author: {
      name: "Aging BioHacks",
      role: "Clinic",
      image: "https://scontent.flhe7-1.fna.fbcdn.net/v/t39.30808-1/482260041_650656560872172_4278988343809861039_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=AUe5bHTMMxMQ7kNvgH49mAu&_nc_oc=AdgPf1JTIPbLbm6h5c5iDlRMFHMyNbIyYnJ8IrGOxhWmyuhyeygvUiW8M3zT5YwSJiM&_nc_zt=24&_nc_ht=scontent.flhe7-1.fna&_nc_gid=A6BWsN5fVpUrPD-OvKwKyUg&oh=00_AYD0Sz5bf_73qxLtuPiYtZhmJxVx3Qnj39-S30yTmKeMWA&oe=67C6452D"
    }
  },
  {
    id: "10",
    title: "Integrative Approaches to Wellness at Aging BioHacks",
    excerpt: "Discover how a holistic approach to wellness can enhance your quality of life.",
    date: "2024-01-28",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    author: {
      name: "Aging BioHacks",
      role: "Clinic",
      image: "https://scontent.flhe7-1.fna.fbcdn.net/v/t39.30808-1/482260041_650656560872172_4278988343809861039_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=AUe5bHTMMxMQ7kNvgH49mAu&_nc_oc=AdgPf1JTIPbLbm6h5c5iDlRMFHMyNbIyYnJ8IrGOxhWmyuhyeygvUiW8M3zT5YwSJiM&_nc_zt=24&_nc_ht=scontent.flhe7-1.fna&_nc_gid=A6BWsN5fVpUrPD-OvKwKyUg&oh=00_AYD0Sz5bf_73qxLtuPiYtZhmJxVx3Qnj39-S30yTmKeMWA&oe=67C6452D"
    }
  }
];

const categories = [
  "All",
  "Research",
  "Treatments",
  "Success Stories",
  "Wellness",
  "News"
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPosts = selectedCategory === "All"
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Latest Insights & Updates
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Stay informed about the latest developments in regenerative medicine and patient success stories.
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  className="w-full h-full object-cover"
                  src={post.image}
                  alt={post.title}
                />
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-teal-100 text-teal-800">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={post.author.image}
                    alt={post.author.name}
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                    <p className="text-sm text-gray-500">{post.author.role}</p>
                  </div>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-500 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <div className="mt-4">
                  <a
                    href={`/blogDetail/${post.id}`}
                    className="inline-flex items-center text-teal-600 hover:text-teal-700"
                  >
                    Read more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-teal-700 rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12 lg:flex lg:items-center lg:py-16">
            <div className="lg:w-0 lg:flex-1">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Stay Updated
              </h2>
              <p className="mt-4 max-w-3xl text-lg text-teal-100">
                Subscribe to our newsletter for the latest updates in regenerative medicine.
              </p>
            </div>
            <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8">
              <form className="sm:flex">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email-address"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-5 py-3 border-white rounded-full placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-700 focus:ring-white"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-full text-teal-700 bg-white hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-3 text-sm text-teal-100">
                We care about your privacy.
                {/* <a href="/privacy" className="text-white underline">
                  privacy policy
                </a> */}
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
