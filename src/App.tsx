import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import TreatmentGrid from './components/TreatmentGrid';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Location from './pages/Location';
import TreatmentDetail from './pages/TreatmentDetail';
import PopupMessage from './components/PopupMessage';
import SocialMediaBar from './components/SocialMediaBar';
import { Shield, Award, Users, Clock, Star, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { treatments } from './data/treatments';
import TreatmentsPage from './pages/Treament';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Layout>
            <SocialMediaBar />
            <Hero />
            
            {/* Medical Disclaimer */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
            >
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    <strong>Medical Disclaimer:</strong> These therapies are not FDA-approved for the treatment of specific diseases. Individual results may vary.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Video Section */}
            <section className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    Learn More About Our Treatments
                  </h2>
                  <p className="mt-4 text-xl text-gray-500">
                    Watch our educational videos to understand our innovative approaches
                  </p>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg"
                  >
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title="Understanding Regenerative Medicine"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg"
                  >
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title="Patient Success Stories"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Stats Section with Animation */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white py-12"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className="text-4xl font-bold text-teal-600">1000+</div>
                    <div className="mt-2 text-sm text-gray-500">Patients Treated</div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className="text-4xl font-bold text-teal-600">95%</div>
                    <div className="mt-2 text-sm text-gray-500">Patient Satisfaction</div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className="text-4xl font-bold text-teal-600">15+</div>
                    <div className="mt-2 text-sm text-gray-500">Years Experience</div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className="text-4xl font-bold text-teal-600">20+</div>
                    <div className="mt-2 text-sm text-gray-500">Specialist Doctors</div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <TreatmentGrid />
            
            {/* Why Choose Us Section with Animation */}
            <section className="py-12 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="lg:text-center"
                >
                  <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    Why Choose Aging Biohacks 
                  </h2>
                  <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                    Experience the future of medicine with our cutting-edge regenerative therapies
                  </p>
                </motion.div>

                <div className="mt-10">
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      {
                        icon: Users,
                        title: 'Personalized Care',
                        description: 'Customized treatment plans tailored to your specific needs and conditions.'
                      },
                      {
                        icon: Award,
                        title: 'Advanced Technology',
                        description: 'State-of-the-art facilities equipped with the latest medical technology.'
                      },
                      {
                        icon: Shield,
                        title: 'Expert Team',
                        description: 'Highly qualified medical professionals with extensive experience in regenerative medicine.'
                      },
                      {
                        icon: Clock,
                        title: 'Efficient Process',
                        description: 'Streamlined treatment protocols optimized for your convenience and recovery.'
                      },
                      {
                        icon: Star,
                        title: 'Quality Assurance',
                        description: 'Rigorous standards and protocols ensuring the highest level of care.'
                      },
                      {
                        icon: MapPin,
                        title: 'Convenient Location',
                        description: 'Easily accessible Miami location with modern facilities and amenities.'
                      }
                    ].map((feature) => (
                      <motion.div 
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.02 }}
                        viewport={{ once: true }}
                        className="pt-6"
                      >
                        <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                          <div className="-mt-6">
                            <div>
                              <span className="inline-flex items-center justify-center p-3 bg-teal-600 rounded-md shadow-lg">
                                <feature.icon className="h-6 w-6 text-white" />
                              </span>
                            </div>
                            <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                              {feature.title}
                            </h3>
                            <p className="mt-5 text-base text-gray-500">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Virtual Tour Section */}
            <section className="bg-gray-50 py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl font-extrabold text-gray-900">Virtual Facility Tour</h2>
                  <p className="mt-4 text-xl text-gray-500">
                    Take a virtual walk through our state-of-the-art facility
                  </p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg"
                >
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Virtual Facility Tour"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </motion.div>
              </div>
            </section>
            
            {/* Popup Message */}
            <PopupMessage />
          </Layout>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/location" element={<Location />} />
        <Route path="/treatment" element={<TreatmentsPage />} />
        {treatments.map(treatment => (
          <Route 
            key={treatment.id}
            path={`/treatments/${treatment.id}`}
            element={<TreatmentDetail treatment={treatment} />}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;