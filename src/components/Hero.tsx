// import React from 'react';
// import { ArrowRight, Shield, Award, UserCheck, Zap, Sparkles } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.3 },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6 },
//   },
// };

// export default function Hero() {
//   return (
//     <div className="relative bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         {/* Left Content */}
//         <div className="relative z-10 pb-8 bg-white sm:pb-12 md:pb-16 lg:max-w-2xl lg:w-full lg:pb-20 xl:pb-24">
//           <motion.main
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="mt-6 mx-auto max-w-7xl px-4 sm:mt-8 sm:px-6 md:mt-10 lg:mt-12 lg:px-8 xl:mt-16"
//           >
//             <motion.div variants={itemVariants} className="sm:text-center lg:text-left">
//               <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
//                 <motion.span
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.6 }}
//                   className="block"
//                 >
//                   Aging Biohacks
//                 </motion.span>
//                 <motion.span
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.6, delay: 0.3 }}
//                   className="block text-teal-600"
//                 >
//                   Regenerative Medicine & Cellular Health
//                 </motion.span>
//               </h1>
//               <motion.p
//                 variants={itemVariants}
//                 className="mt-4 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-6 md:text-xl lg:mx-0"
//               >
//                 Miami's premier clinic for cutting-edge regenerative therapies that harness your body's natural healing processes. We specialize in NAD+, exosome, stem cell, and hormone therapies to help you feel youthful, energetic, and healthy.
//               </motion.p>
//               <motion.div
//                 variants={containerVariants}
//                 className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:max-w-lg"
//               >
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   className="flex items-center bg-white p-2 rounded-lg shadow-sm hover:shadow-md transition-all"
//                 >
//                   <Shield className="h-6 w-6 text-teal-600" />
//                   <span className="ml-2 text-sm text-gray-600">Licensed Experts</span>
//                 </motion.div>
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   className="flex items-center bg-white p-2 rounded-lg shadow-sm hover:shadow-md transition-all"
//                 >
//                   <Award className="h-6 w-6 text-teal-600" />
//                   <span className="ml-2 text-sm text-gray-600">FDA Compliant</span>
//                 </motion.div>
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   className="flex items-center bg-white p-2 rounded-lg shadow-sm hover:shadow-md transition-all"
//                 >
//                   <UserCheck className="h-6 w-6 text-teal-600" />
//                   <span className="ml-2 text-sm text-gray-600">Personalized Care</span>
//                 </motion.div>
//               </motion.div>
//               <motion.div
//                 variants={containerVariants}
//                 className="mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-3"
//               >
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="rounded-full shadow"
//                 >
//                   <Link
//                     to="/contact"
//                     className="flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-full text-white bg-teal-600 hover:bg-teal-700 transition duration-300"
//                   >
//                     Free Consultation
//                     <ArrowRight className="ml-2 h-5 w-5" />
//                   </Link>
//                 </motion.div>
//                 <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                   <Link
//                     to="/treatment"
//                     className="flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-full text-teal-700 bg-teal-100 hover:bg-teal-200 transition duration-300"
//                   >
//                     Our Therapies
//                   </Link>
//                 </motion.div>
//               </motion.div>
//             </motion.div>
//           </motion.main>
//         </div>
//       </div>

//       {/* Right Image */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
//       >
//   <div className="relative h-64 sm:h-72 md:h-80 lg:h-full">
//   <img
//     className="absolute inset-0 w-full h-full object-cover"
// src=''
//     alt="Doctor with stethoscope"
//   />
//   <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent lg:from-white/0" />
// </div>



//       </motion.div>

//       {/* Floating Features */}
//       <motion.div
//   initial={{ opacity: 0, y: 30 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ delay: 1, duration: 0.8 }}
//   className="relative z-20 px-4 sm:px-6 lg:px-8 mt-4"
// >
//   <div className="max-w-7xl mx-auto">
//     <div className="bg-gray-100 rounded-xl shadow-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 divide-x divide-gray-100 p-4">
//       <motion.div whileHover={{ y: -5 }} className="flex flex-col items-center text-center">
//         <Zap className="h-8 w-8 text-teal-600 mb-2" />
//         <h3 className="text-lg font-semibold text-gray-900">NAD+ Therapy</h3>
//         <p className="mt-1 text-sm text-gray-500">Support energy & cellular function</p>
//       </motion.div>
//       <motion.div whileHover={{ y: -5 }} className="flex flex-col items-center text-center">
//         <Sparkles className="h-8 w-8 text-teal-600 mb-2" />
//         <h3 className="text-lg font-semibold text-gray-900">Exosome Therapy</h3>
//         <p className="mt-1 text-sm text-gray-500">Supports cellular communication & wellness</p>
//       </motion.div>
//       <motion.div whileHover={{ y: -5 }} className="flex flex-col items-center text-center">
//         <Shield className="h-8 w-8 text-teal-600 mb-2" />
//         <h3 className="text-lg font-semibold text-gray-900">Stem Cell Therapy</h3>
//         <p className="mt-1 text-sm text-gray-500">Designed to support natural recovery</p>
//       </motion.div>
//       <motion.div whileHover={{ y: -5 }} className="flex flex-col items-center text-center">
//         <Award className="h-8 w-8 text-teal-600 mb-2" />
//         <h3 className="text-lg font-semibold text-gray-900">Hormone Therapy</h3>
//         <p className="mt-1 text-sm text-gray-500">Helps support hormonal balance</p>
//       </motion.div>
//     </div>
//   </div>
// </motion.div>

//     </div>
//   );
// }



import React from 'react';
import { ArrowRight, Shield, Award, UserCheck, Zap, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-12 md:pb-16 lg:max-w-2xl lg:w-full lg:pb-20 xl:pb-24">
          <motion.main
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-6 mx-auto max-w-7xl px-4 sm:mt-8 sm:px-6 md:mt-10 lg:mt-12 lg:px-8 xl:mt-16"
          >
            <motion.div variants={itemVariants} className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <motion.span className="block">Aging Biohacks</motion.span>
                <motion.span className="block text-teal-600">Regenerative Medicine & Cellular Health</motion.span>
              </h1>
              <motion.p className="mt-4 text-base text-gray-500">
                Miami's premier clinic offering innovative, investigational therapies aimed at optimizing cellular function and promoting overall wellness. We specialize in NAD+, exosome, stem cell, and hormone support research for well-being and vitality.
              </motion.p>
              <motion.div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:max-w-lg">
                <div className="flex items-center bg-white p-2 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <Shield className="h-6 w-6 text-teal-600" />
                  <span className="ml-2 text-sm text-gray-600">Licensed Experts</span>
                </div>
                <div className="flex items-center bg-white p-2 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <Award className="h-6 w-6 text-teal-600" />
                  <span className="ml-2 text-sm text-gray-600">FDA Compliant Messaging</span>
                </div>
                <div className="flex items-center bg-white p-2 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <UserCheck className="h-6 w-6 text-teal-600" />
                  <span className="ml-2 text-sm text-gray-600">Personalized Care Plans</span>
                </div>
              </motion.div>
              <motion.div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link to="/contact" className="flex items-center px-6 py-2 rounded-full text-white bg-teal-600 hover:bg-teal-700">
                  Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/treatment" className="flex items-center px-6 py-2 rounded-full text-teal-700 bg-teal-100 hover:bg-teal-200">
                  Our Therapies
                </Link>
              </motion.div>
            </motion.div>
          </motion.main>
        </div>
      </div>

      <motion.div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="relative h-64 sm:h-72 md:h-80 lg:h-full">
          <img className="absolute inset-0 w-full h-full object-cover" src="https://res.cloudinary.com/dsex1a9tu/image/upload/v1743026099/Blue_White_Natural_Healing_Therapy_New_Year_Promotional_Instagram_Post_4_bsstvd.png"
 alt="Doctor with stethoscope" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent" />
        </div>
      </motion.div>

      <motion.div className="relative px-4 sm:px-6 lg:px-8 mt-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-100 rounded-xl shadow-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
            <div className="flex flex-col items-center text-center">
              <Zap className="h-8 w-8 text-teal-600 mb-2" />
              <h3 className="text-lg font-semibold text-gray-900">NAD+ Therapy</h3>
              <p className="text-sm text-gray-500">Explored for supporting cellular energy</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Sparkles className="h-8 w-8 text-teal-600 mb-2" />
              <h3 className="text-lg font-semibold text-gray-900">Exosome Therapy</h3>
              <p className="text-sm text-gray-500">Investigating cellular communication support</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Shield className="h-8 w-8 text-teal-600 mb-2" />
              <h3 className="text-lg font-semibold text-gray-900">Stem Cell Therapy</h3>
              <p className="text-sm text-gray-500">Researching natural recovery support</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Award className="h-8 w-8 text-teal-600 mb-2" />
              <h3 className="text-lg font-semibold text-gray-900">Hormone Therapy</h3>
              <p className="text-sm text-gray-500">Supporting hormonal balance research</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

