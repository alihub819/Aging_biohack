import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
    const data = blogPostData.find((p) => p.id == id);
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
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
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

                {/* Author Bio */}
                <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                      <img
                        src={blogPost.author.image || "/placeholder.svg"}
                        alt={blogPost.author.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{blogPost.author.name}</h3>
                      <p className="text-gray-600">{blogPost.author.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-700">
                    Aging BioHacks is a leading clinic specializing in regenerative medicine and innovative anti-aging
                    therapies. Our team of experts is dedicated to helping patients achieve optimal health and longevity
                    through evidence-based treatments and cutting-edge research.
                  </p>
                </div>

                {/* Share Buttons */}
                <div className="mt-8">
                  <h4 className="font-medium mb-3">Share this article</h4>
                  <div className="flex space-x-3">
                    <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </button>
                    <button className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </button>
                    <button className="p-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                    </button>
                    <button className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold mb-6">Comments (3)</h3>

                {/* Comment Form */}
                <div className="mb-8">
                  <div className="flex items-start mb-4">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden mr-4 bg-gray-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <textarea
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Add a comment..."
                        rows={3}
                      ></textarea>
                      <button className="mt-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition">
                        Post Comment
                      </button>
                    </div>
                  </div>
                </div>

                {/* Comment List */}
                <div className="space-y-6">
                  {/* Comment 1 */}
                  <div className="border-b pb-6">
                    <div className="flex items-start">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden mr-4 bg-gray-200">
                        <img src="/placeholder.svg?height=40&width=40" alt="User" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-1">
                          <h4 className="font-bold mr-2">Sarah Johnson</h4>
                          <span className="text-sm text-gray-500">2 days ago</span>
                        </div>
                        <p className="text-gray-700">
                          This article was incredibly informative! I've been researching cellular health for a while, and
                          this provided some great insights I hadn't considered before. Looking forward to implementing
                          some of these strategies into my daily routine.
                        </p>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          <button className="flex items-center mr-4 hover:text-green-500 transition">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                              />
                            </svg>
                            Like (12)
                          </button>
                          <button className="flex items-center hover:text-green-500 transition">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                              />
                            </svg>
                            Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Comment 2 */}
                  <div className="border-b pb-6">
                    <div className="flex items-start">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden mr-4 bg-gray-200">
                        <img src="/placeholder.svg?height=40&width=40" alt="User" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-1">
                          <h4 className="font-bold mr-2">Michael Chen</h4>
                          <span className="text-sm text-gray-500">5 days ago</span>
                        </div>
                        <p className="text-gray-700">
                          I've been following Aging BioHacks for a while now, and this is one of their best articles yet.
                          The connection between mitochondrial health and aging is fascinating. Have you considered doing
                          a follow-up piece on specific supplements that support mitochondrial function?
                        </p>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          <button className="flex items-center mr-4 hover:text-green-500 transition">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                              />
                            </svg>
                            Like (8)
                          </button>
                          <button className="flex items-center hover:text-green-500 transition">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                              />
                            </svg>
                            Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Comment 3 */}
                  <div>
                    <div className="flex items-start">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden mr-4 bg-gray-200">
                        <img src="/placeholder.svg?height=40&width=40" alt="User" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-1">
                          <h4 className="font-bold mr-2">Emily Rodriguez</h4>
                          <span className="text-sm text-gray-500">1 week ago</span>
                        </div>
                        <p className="text-gray-700">
                          I recently started focusing on my cellular health after being diagnosed with an autoimmune
                          condition. The information here about stress management and sleep quality is particularly
                          relevant. Would love to see more content about how cellular health relates to autoimmune
                          disorders specifically.
                        </p>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          <button className="flex items-center mr-4 hover:text-green-500 transition">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                              />
                            </svg>
                            Like (5)
                          </button>
                          <button className="flex items-center hover:text-green-500 transition">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                            />
                          </svg>
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Author Card */}
            <div className="bg-white border rounded-lg p-6 mb-8">
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img
                    src={blogPost.author.image || "/placeholder.svg"}
                    alt={blogPost.author.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{blogPost.author.name}</h3>
                  <p className="text-gray-600">{blogPost.author.role}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Aging BioHacks specializes in cutting-edge regenerative medicine and anti-aging therapies. Our mission
                is to help you achieve optimal health and longevity.
              </p>
              <button className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition">
                Follow
              </button>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gray-50 border rounded-lg p-6 mb-8">
              <h3 className="font-bold text-lg mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-gray-700 mb-4">
                Get the latest updates on cellular health, anti-aging research, and regenerative medicine.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition">
                  Subscribe
                </button>
              </form>
            </div>

            {/* Related Posts */}
            <div className="bg-white border rounded-lg p-6 mb-8">
              <h3 className="font-bold text-lg mb-4">Related Articles</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="relative w-20 h-20 rounded-md overflow-hidden mr-3 flex-shrink-0">
                    <img src="/placeholder.svg?height=80&width=80" alt="Related post" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm hover:text-green-500 transition">
                      <Link to="#">Mitochondrial Function: The Key to Longevity</Link>
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">March 15, 2024</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="relative w-20 h-20 rounded-md overflow-hidden mr-3 flex-shrink-0">
                    <img src="/placeholder.svg?height=80&width=80" alt="Related post" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm hover:text-green-500 transition">
                      <Link to="#">NAD+ Therapy: Rejuvenating Your Cells from Within</Link>
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">February 28, 2024</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="relative w-20 h-20 rounded-md overflow-hidden mr-3 flex-shrink-0">
                    <img src="/placeholder.svg?height=80&width=80" alt="Related post" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm hover:text-green-500 transition">
                      <Link to="#">The Role of Nutrition in Cellular Repair</Link>
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">January 20, 2024</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white border rounded-lg p-6 mb-8">
              <h3 className="font-bold text-lg mb-4">Categories</h3>
              <div className="space-y-2">
                <Link to="#" className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-md transition">
                  <span>Research</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">24</span>
                </Link>
                <Link to="#" className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-md transition">
                  <span>Treatments</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">18</span>
                </Link>
                <Link to="#" className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-md transition">
                  <span>Success Stories</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">12</span>
                </Link>
                <Link to="#" className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-md transition">
                  <span>Wellness</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">15</span>
                </Link>
                <Link to="#" className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-md transition">
                  <span>News</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">9</span>
                </Link>
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-white border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  to="#"
                  className="bg-gray-100 text-gray-800 px-3 py-1 text-sm rounded-full hover:bg-gray-200 transition"
                >
                  #CellularHealth
                </Link>
                <Link
                  to="#"
                  className="bg-gray-100 text-gray-800 px-3 py-1 text-sm rounded-full hover:bg-gray-200 transition"
                >
                  #AntiAging
                </Link>
                <Link
                  to="#"
                  className="bg-gray-100 text-gray-800 px-3 py-1 text-sm rounded-full hover:bg-gray-200 transition"
                >
                  #RegenerativeMedicine
                </Link>
                <Link
                  to="#"
                  className="bg-gray-100 text-gray-800 px-3 py-1 text-sm rounded-full hover:bg-gray-200 transition"
                >
                  #Longevity
                </Link>
                <Link
                  to="#"
                  className="bg-gray-100 text-gray-800 px-3 py-1 text-sm rounded-full hover:bg-gray-200 transition"
                >
                  #Mitochondria
                </Link>
                <Link
                  to="#"
                  className="bg-gray-100 text-gray-800 px-3 py-1 text-sm rounded-full hover:bg-gray-200 transition"
                >
                  #NADTherapy
                </Link>
                <Link
                  to="#"
                  className="bg-gray-100 text-gray-800 px-3 py-1 text-sm rounded-full hover:bg-gray-200 transition"
                >
                  #Wellness
                </Link>
                <Link
                  to="#"
                  className="bg-gray-100 text-gray-800 px-3 py-1 text-sm rounded-full hover:bg-gray-200 transition"
                >
                  #HealthyAging
                </Link>
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
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md transition font-medium">
              Book a Consultation
            </button>
            <button className="bg-white border border-green-500 text-green-500 hover:bg-green-50 px-6 py-3 rounded-md transition font-medium">
              Learn More About Our Treatments
            </button>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}