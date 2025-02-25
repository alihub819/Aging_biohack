import React from 'react';
import { ArrowRight, Shield, Award, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <motion.main
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
          >
            <motion.div variants={itemVariants} className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="block"
                >
                  Aging Biohacks
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="block text-teal-600"
                >
                  Innovative Bio Solutions
                </motion.span>
              </h1>
              <motion.p
                variants={itemVariants}
                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                Our functional medicine practice offers personalized consultations to explore cutting-edge regenerative therapies, including exosomes. Individual results may vary.
              </motion.p>
              
              <motion.div
                variants={containerVariants}
                className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:max-w-lg"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  <Shield className="h-6 w-6 text-teal-600" />
                  <span className="ml-2 text-sm text-gray-600">Licensed Experts</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  <Award className="h-6 w-6 text-teal-600" />
                  <span className="ml-2 text-sm text-gray-600">Advanced Care</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  <UserCheck className="h-6 w-6 text-teal-600" />
                  <span className="ml-2 text-sm text-gray-600">Personalized Plans</span>
                </motion.div>
              </motion.div>

              <motion.div
                variants={containerVariants}
                className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full shadow"
                >
                  <a 
                    href="/consultation" 
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-teal-600 hover:bg-teal-700 md:py-4 md:text-lg md:px-10 transform transition-all duration-300"
                  >
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-3 sm:mt-0 sm:ml-3"
                >
                  <a 
                    href="/treatments" 
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-teal-700 bg-teal-100 hover:bg-teal-200 md:py-4 md:text-lg md:px-10 transform transition-all duration-300"
                  >
                    Learn More
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.main>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
      >
        <div className="relative h-56 sm:h-72 md:h-96 lg:h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
            alt="Medical professional in modern clinic"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent lg:from-white/0" />
        </div>
      </motion.div>
    </div>
  );
}