import React from 'react';
import { ArrowRight, Star, Clock, CheckCircle, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { treatments } from '../data/treatments';
import { Link } from 'react-router-dom';
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function TreatmentGrid() {
  return (
    <div className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Treatments
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Explore our range of innovative regenerative therapies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {treatments.map((treatment) => (
            <motion.div
              key={treatment.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white transition-all duration-300"
            >
              <div className="flex-shrink-0 relative">
                <motion.img
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="h-48 w-full object-cover"
                  src={treatment.image}
                  alt={treatment.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-semibold text-white">
                    {treatment.title}
                  </h3>
                </div>
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="mt-3 text-base text-gray-500">
                    {treatment.description}
                  </p>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-4 flex items-center space-x-2"
                  >
                    <Clock className="h-4 w-4 text-teal-600" />
                    <span className="text-sm text-gray-600"></span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-2 flex items-center space-x-2"
                  >
                    <Users className="h-4 w-4 text-teal-600" />
                    <span className="text-sm text-gray-600">Personalized care</span>
                  </motion.div>
                  <motion.ul
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-4 space-y-2"
                  >
                    {treatment.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-teal-600 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </motion.ul>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <Star className="h-4 w-4 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>
                  <Link to={`/treatments/${treatment.id}`}>
                  <motion.a
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="flex items-center text-teal-600 hover:text-teal-700 font-medium"
                    >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.a>
                    </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/TreatmentDetail"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-teal-600 hover:bg-teal-700 transform transition-all duration-300"
          >
            View All Treatments
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}