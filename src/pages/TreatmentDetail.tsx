import Layout from '../components/Layout';
import { Clock, CheckCircle, AlertCircle, ArrowRight, Star } from 'lucide-react';

interface Props {
  treatment: any;
}

export default function TreatmentDetail({ treatment }: Props) {
  if (!treatment) return null;

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src={treatment.image}
            alt={treatment.title}
          />
          <div className="absolute inset-0 bg-gray-900 opacity-75" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {treatment.title}
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            {treatment.description}
          </p>
        </div>
      </div>

      {/* Medical Disclaimer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertCircle className="h-5 w-5 text-yellow-400" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <strong>Medical Disclaimer:</strong> These therapies are not FDA-approved for the treatment of specific diseases. Individual results may vary.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Treatment Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2>Overview</h2>
              <p>{treatment.details?.overview}</p>

              <h2>Treatment Process</h2>
              <ul>
                {treatment.details?.process.map((step:any, index:number) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-teal-600 mr-2 mt-1" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>

              <h2>Benefits</h2>
              <ul>
                {treatment.benefits.map((benefit:any, index:number) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-teal-600 mr-2 mt-1" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Patient Testimonials */}
            {/* <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Patient Testimonials</h2>
              <div className="grid gap-6">
                {[
                  {
                    name: "John D.",
                    content: "The treatment exceeded my expectations. I've seen significant improvement in my condition.",
                    rating: 5
                  },
                  {
                    name: "Sarah M.",
                    content: "Professional staff and excellent care throughout the entire process.",
                    rating: 5
                  }
                ].map((testimonial, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 italic">"{testimonial.content}"</p>
                    <p className="mt-4 font-medium text-gray-900">{testimonial.name}</p>
                  </div>
                ))}
              </div>
            </div> */}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Treatment Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                 
               
                </div>

                <div>
                  {/* <h4 className="font-medium text-gray-900 mb-2">Eligibility Criteria</h4> */}
                  <ul className="space-y-2">
                    {treatment.details?.eligibility.map((criterion:any, index:number) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-0.5" />
                        <span className="text-gray-600">{criterion}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <a
                    href="/contact"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-teal-600 hover:bg-teal-700"
                  >
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Resources */}
      {/* <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Understanding the Treatment Process",
                type: "Article",
                link: "#"
              },
              {
                title: "Patient Success Stories",
                type: "Video",
                link: "#"
              },
              {
                title: "Research & Clinical Studies",
                type: "Research",
                link: "#"
              }
            ].map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                className="block bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
              >
                <p className="text-sm text-teal-600 mb-2">{resource.type}</p>
                <h3 className="text-lg font-medium text-gray-900">{resource.title}</h3>
                <div className="mt-4 flex items-center text-teal-600">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div> */}
    </Layout>
  );
}