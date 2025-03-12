import React from 'react';
import Layout from '../components/Layout';
import { Award, Microscope, GraduationCap, Heart } from 'lucide-react';

export default function About() {
  const milestones = [
    {
      year: "2010",
      title: "Clinic Founded",
      description: "Established with a vision to revolutionize regenerative medicine."
    },
    {
      year: "2015",
      title: "Research Partnership",
      description: "Partnered with leading medical institutions for advanced research."
    },
    {
      year: "2018",
      title: "Innovation Award",
      description: "Recognized for breakthrough treatments in regenerative medicine."
    },
    {
      year: "2020",
      title: "Expansion",
      description: "Opened state-of-the-art facility in Miami."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-teal-700 py-16 sm:py-24">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
            alt="Medical facility"
          />
          <div className="absolute inset-0 bg-teal-700 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">About Aging Biohacks</h1>
          <p className="mt-6 max-w-3xl text-xl text-teal-100">
            Leading the future of regenerative medicine with innovative therapies and personalized care.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Mission</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              To provide cutting-edge regenerative therapies that enhance the body's natural healing abilities and improve patients' quality of life.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Heart,
                title: "Patient-Centered Care",
                description: "Individualized treatment plans tailored to each patient's unique needs."
              },
              {
                icon: Microscope,
                title: "Advanced Research",
                description: "Continuous investment in cutting-edge research and development."
              },
              {
                icon: GraduationCap,
                title: "Expert Team",
                description: "Highly qualified professionals with extensive experience."
              }
            ].map((feature) => (
              <div key={feature.title} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <span className="inline-flex items-center justify-center p-3 bg-teal-600 rounded-md shadow-lg">
                      <feature.icon className="h-6 w-6 text-white" />
                    </span>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.title}</h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Journey</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              A timeline of our achievements and milestones
            </p>
          </div>

          <div className="mt-16 flow-root">
            <ul className="-mb-8">
              {milestones.map((milestone, index) => (
                <li key={milestone.year}>
                  <div className="relative pb-8">
                    {index !== milestones.length - 1 && <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" />}
                    <div className="relative flex space-x-3">
                      <span className="h-8 w-8 rounded-full bg-teal-600 flex items-center justify-center ring-8 ring-white">
                        <Award className="h-5 w-5 text-white" />
                      </span>
                      <div className="min-w-0 flex-1 pt-1.5">
                        <p className="text-sm text-gray-500">
                          {milestone.year} - <span className="font-medium text-gray-900">{milestone.title}</span>
                        </p>
                        <p className="mt-2 text-gray-500">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-teal-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:justify-between">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            Ready to start your journey?
            <span className="block text-teal-200">Schedule a consultation today.</span>
          </h2>
          <a href="/consultation" className="mt-8 inline-flex items-center px-5 py-3 text-base font-medium rounded-full text-teal-600 bg-white hover:bg-teal-50">
            Get Started
          </a>
        </div>
      </div>
    </Layout>
  );
}
