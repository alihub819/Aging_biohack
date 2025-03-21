// import React, { useState, useEffect } from 'react';
// import { X, Mail, Ticket, Sparkles, ArrowRight } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function PopupMessage() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [showEmailForm, setShowEmailForm] = useState(false);
//   const [email, setEmail] = useState('');
//   const [submitted, setSubmitted] = useState(false);

//   useEffect(() => {
//     // Show popup after 5 seconds
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 5000);

//     return () => clearTimeout(timer);
//   }, []);

//   const handleYesClick = () => {
//     setShowEmailForm(true);
//   };

//   const handleNoClick = () => {
//     setIsVisible(false);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Here you would typically send the email to your backend
//     console.log('Email submitted:', email);
//     setSubmitted(true);
    
//     // Hide the popup after 3 seconds
//     setTimeout(() => {
//       setIsVisible(false);
//     }, 3000);
//   };

//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.div 
//           initial={{ y: 100, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           exit={{ y: 100, opacity: 0 }}
//           transition={{ duration: 0.5 }}
//           className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-500 text-white p-6 shadow-2xl z-50 rounded-t-xl border-t-4 border-yellow-400"
//         >
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//             <button
//               onClick={() => setIsVisible(false)}
//               className="absolute top-2 right-2 text-white hover:text-gray-200 transition-colors"
//               aria-label="Close"
//             >
//               <X className="h-6 w-6" />
//             </button>
            
//             <div className="flex flex-col md:flex-row items-center justify-between">
//               <div className="flex-1 mb-4 md:mb-0">
//                 {!showEmailForm && !submitted && (
//                   <div className="flex items-start space-x-4">
//                     <div className="hidden sm:block">
//                       <div className="bg-yellow-300 text-teal-800 p-3 rounded-full">
//                         <Ticket className="h-8 w-8" />
//                       </div>
//                     </div>
//                     <div>
//                       <motion.h2 
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ delay: 0.2 }}
//                         className="text-2xl font-bold mb-2 flex items-center"
//                       >
//                         <Sparkles className="h-5 w-5 mr-2 inline-block sm:hidden" /> 
//                         Get the Latest Biohacking services Discount!
//                       </motion.h2>
//                       <motion.p 
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ delay: 0.4 }}
//                         className="text-lg font-semibold"
//                       >
//                         Save up to <span className="text-yellow-300 text-2xl">28%</span> on Biohacking services!
//                       </motion.p>
//                       <motion.p 
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ delay: 0.6 }}
//                         className="mt-2 text-teal-50"
//                       >
//                        Meet expert doctors, explore cutting-edge technologies, and transform your health journey.
//                        Limited-time offer – act now before prices increase!
//                       </motion.p>
//                     </div>
//                   </div>
//                 )}
                
//                 {showEmailForm && !submitted && (
//                   <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-center">
//                     <label htmlFor="email" className="sr-only">Email</label>
//                     <div className="relative rounded-md shadow-sm flex-1">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <Mail className="h-5 w-5 text-gray-400" />
//                       </div>
//                       <input
//                         type="email"
//                         id="email"
//                         className="block w-full pl-10 pr-3 py-3 border border-transparent rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:text-sm"
//                         placeholder="Enter your email for your discount code"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                       />
//                     </div>
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       type="submit"
//                       className="inline-flex items-center px-5 py-3 border border-transparent text-sm font-medium rounded-lg shadow-sm text-teal-700 bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors"
//                     >
//                       Get My 28% Discount
//                       <ArrowRight className="ml-2 h-4 w-4" />
//                     </motion.button>
//                   </form>
//                 )}
                
//                 {submitted && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="text-center"
//                   >
//                     <h3 className="text-xl font-bold mb-2">🎉 Success! Your Discount is on the Way!</h3>
//                     <p className="text-lg">
//                       Check your inbox soon for your exclusive 28% discount code. 
//                       We can't wait to see you soon!
//                     </p>
//                   </motion.div>
//                 )}
//               </div>
              
//               {!showEmailForm && !submitted && (
//                 <div className="flex space-x-4">
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={handleYesClick}
//                     className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg shadow-sm text-teal-700 bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors"
//                   >
//                     Claim My 28% Discount
//                     <ArrowRight className="ml-2 h-4 w-4" />
//                   </motion.button>
//                   <button
//                     onClick={handleNoClick}
//                     className="inline-flex items-center px-4 py-3 border border-white text-sm font-medium rounded-lg text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors"
//                   >
//                     No, thanks
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }




import React, { useState, useEffect } from 'react';
import { X, Mail, Ticket, Sparkles, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PopupMessage() {
  const [isVisible, setIsVisible] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleYesClick = () => {
    setShowEmailForm(true);
  };

  const handleNoClick = () => {
    setIsVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setSubmitted(true);

    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-500 text-white p-6 shadow-2xl z-50 rounded-t-xl border-t-4 border-yellow-400"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-2 right-2 text-white hover:text-gray-200 transition-colors"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex-1 mb-4 md:mb-0">
                {!showEmailForm && !submitted && (
                  <div className="flex items-start space-x-4">
                    <div className="hidden sm:block">
                      <div className="bg-yellow-300 text-teal-800 p-3 rounded-full">
                        <Ticket className="h-8 w-8" />
                      </div>
                    </div>
                    <div>
                      <motion.h2 className="text-2xl font-bold mb-2">
                        <Sparkles className="h-5 w-5 mr-2 inline-block sm:hidden" /> 
                        Discover Wellness Optimization Discounts!
                      </motion.h2>
                      <motion.p className="text-lg font-semibold">
                        Save up to <span className="text-yellow-300 text-2xl">28%</span> on wellness consultations and investigational wellness services!
                      </motion.p>
                      <motion.p className="mt-2 text-teal-50">
                        Connect with wellness experts, explore innovative approaches, and enhance your wellness journey. Limited-time offer!
                      </motion.p>
                    </div>
                  </div>
                )}
                
                {showEmailForm && !submitted && (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-center">
                    <div className="relative rounded-md shadow-sm flex-1">
                      <input
                        type="email"
                        className="block w-full pl-10 pr-3 py-3 border border-transparent rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-teal-500"
                        placeholder="Enter your email for wellness updates"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <motion.button
                      type="submit"
                      className="inline-flex items-center px-5 py-3 text-sm font-medium rounded-lg text-teal-700 bg-yellow-300 hover:bg-yellow-400"
                    >
                      Get My Discount
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.button>
                  </form>
                )}

                {submitted && (
                  <motion.div className="text-center">
                    <h3 className="text-xl font-bold mb-2">🎉 Success! Your Discount Code Is Coming!</h3>
                    <p>Check your inbox for your exclusive discount code. We look forward to supporting your wellness journey!</p>
                  </motion.div>
                )}
              </div>
              
              {!showEmailForm && !submitted && (
                <div className="flex space-x-4">
                  <motion.button
                    onClick={handleYesClick}
                    className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-lg text-teal-700 bg-yellow-300 hover:bg-yellow-400"
                  >
                    Claim My Discount
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.button>
                  <button
                    onClick={handleNoClick}
                    className="px-4 py-3 text-sm font-medium rounded-lg text-white hover:bg-teal-700"
                  >
                    No, thanks
                  </button>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
