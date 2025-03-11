import Layout from '../components/Layout';
import { MapPin, Phone, Mail, Clock, Car, Train, Plane } from 'lucide-react';

export default function Location() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-teal-700">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1577467014537-3c8c5ae8ed89?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
            alt="Miami cityscape"
          />
          <div className="absolute inset-0 bg-teal-700 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Visit Our Miami Location
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-teal-100">
            Our state-of-the-art facility is conveniently located in the heart of Miami,
            offering cutting-edge regenerative treatments in a modern, comfortable environment.
          </p>
        </div>
      </div>

      {/* Location Details */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact Information */}
            <div>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center">
                      <MapPin className="h-6 w-6 text-teal-600" />
                      <span className="ml-3 text-gray-500">
                        123 Medical Center Drive<br />
                        Miami, FL 33101
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-6 w-6 text-teal-600" />
                      <span className="ml-3 text-gray-500">(305) 8641373</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-6 w-6 text-teal-600" />
                      <span className="ml-3 text-gray-500"> sportsrecoverypro@gmail.com</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Hours of Operation</h3>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-teal-600" />
                      <div className="ml-3">
                        <p className="text-gray-500">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-gray-500">Saturday: 9:00 AM - 2:00 PM</p>
                        <p className="text-gray-500">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Getting Here</h3>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start">
                      <Car className="h-5 w-5 text-teal-600 mt-1" />
                      <div className="ml-3">
                        <p className="text-gray-500">
                          Convenient parking available in our dedicated parking structure.
                          Valet parking available during business hours.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Train className="h-5 w-5 text-teal-600 mt-1" />
                      <div className="ml-3">
                        <p className="text-gray-500">
                          Accessible via Miami Metrorail. Nearest station: Brickell Station
                          (10-minute walk).
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Plane className="h-5 w-5 text-teal-600 mt-1" />
                      <div className="ml-3">
                        <p className="text-gray-500">
                          20 minutes from Miami International Airport (MIA).
                          Transportation services available upon request.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-full text-white bg-teal-600 hover:bg-teal-700"
                >
                  Schedule a Visit
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="bg-gray-100 rounded-lg overflow-hidden h-96 lg:h-full min-h-[400px]">
              <iframe
                title="clinic location"
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14367.027205106444!2d-80.19179!3d25.76168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b6823af5b959%3A0x55985f047ff467ed!2sBrickell%2C%20Miami%2C%20FL%2033131!5e0!3m2!1sen!2sus!4v1710851755276!5m2!1sen!2sus"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Facility Features */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              State-of-the-Art Facility
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
              Our modern facility is designed for your comfort and equipped with the latest medical technology.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Modern Treatment Rooms",
                description: "Private, comfortable rooms equipped with advanced medical technology."
              },
              {
                title: "Comfortable Waiting Area",
                description: "Relaxing environment with complimentary refreshments and Wi-Fi."
              },
              {
                title: "Advanced Equipment",
                description: "Latest regenerative medicine technology and monitoring systems."
              },
              {
                title: "Sterile Environment",
                description: "Hospital-grade cleanliness and sterilization protocols."
              },
              {
                title: "Accessible Design",
                description: "ADA-compliant facility with easy navigation and accessibility."
              },
              {
                title: "Recovery Areas",
                description: "Dedicated spaces for post-treatment recovery and monitoring."
              }
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}