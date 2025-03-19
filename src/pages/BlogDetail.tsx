import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogPostData } from "../data/blogs";
import Layout from "../components/Layout";

// Extended blog post type with description
interface Author {
  name: string;
  role: string;
  image: string;
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  description: string;
  date: string;
  category: string;
  image: string;
  author: Author;
  content: string[];
  tags: string[];
  readTime: string;
  relatedPosts?: string[];
}

export default function BlogDetail() {
  const [blogPost, setBlogPost] = useState<BlogPost>();
  const { id } = useParams();

  useEffect(() => {
    const data = blogPostData.find((p) => p.id === id);
    setBlogPost(data);
  }, [id]);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  if (!blogPost) return null;

  return (
    <Layout>
      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <div className="relative w-full h-[50vh] md:h-[60vh]">
          <div className="absolute inset-0">
            <img
              src={blogPost.image || "/placeholder.svg"}
              alt={blogPost.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
          </div>
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-12">
            <div className="max-w-3xl text-white">
              <span className="inline-block bg-green-500 text-white px-3 py-1 text-sm font-semibold rounded-full mb-4">
                {blogPost.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{blogPost.title}</h1>
              <p className="text-lg md:text-xl text-gray-200 mb-6">{blogPost.excerpt}</p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={blogPost.author.image || "/placeholder.svg"}
                    alt={blogPost.author.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">{blogPost.author.name}</p>
                  <div className="flex items-center text-sm text-gray-300">
                    <span>{blogPost.author.role}</span>
                    <span className="mx-2">•</span>
                    <span>{formatDate(blogPost.date)}</span>
                    <span className="mx-2">•</span>
                    <span>{blogPost.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-12 max-w-3xl">
          <div className="flex flex-col gap-12">
            {/* Main Content */}
            <div>
              <div className="prose prose-lg max-w-none">
                <p className="text-xl font-medium text-gray-700 mb-8">{blogPost.description}</p>

                {blogPost.content.map((paragraph, index) => (
                  <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                {/* Tags */}
                <div className="mt-12 flex flex-wrap gap-2">
                  {blogPost.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-800 px-3 py-1 text-sm rounded-full hover:bg-gray-200 transition cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-green-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Cellular Health?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Book a consultation with our experts to discover personalized treatments that can help you achieve optimal
              health and longevity.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://meet.brevo.com/medicalwellness/aging-biohacking-appointments-" target="_blank" rel="noopener noreferrer">
  <button class="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md transition font-medium">
    Book a Consultation
  </button>
</a>

              {/* <button className="bg-white border border-green-500 text-green-500 hover:bg-green-50 px-6 py-3 rounded-md transition font-medium">
                Learn More About Our Treatments
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
