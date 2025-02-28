import React from 'react';
import { Facebook, Instagram, Youtube, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SocialMediaBar() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed  right-1 z-40"
    >
      <div className="flex flex-col space-y-2 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-xl border border-gray-200">
        <motion.a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 10, color: '#1877F2' }}
          className="p-2 rounded-full text-gray-600 transition-colors"
          aria-label="Facebook"
        >
          <Facebook className="h-6 w-6" />
        </motion.a>
        <motion.a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 10, color: '#E1306C' }}
          className="p-2 rounded-full text-gray-600 transition-colors"
          aria-label="Instagram"
        >
          <Instagram className="h-6 w-6" />
        </motion.a>
        <motion.a 
          href="https://youtube.com" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 10, color: '#FF0000' }}
          className="p-2 rounded-full text-gray-600 transition-colors"
          aria-label="YouTube"
        >
          <Youtube className="h-6 w-6" />
        </motion.a>
        <motion.a 
          href="mailto:info@agingbiohacks.com" 
          whileHover={{ scale: 1.2, rotate: 10, color: '#EA4335' }}
          className="p-2 rounded-full text-gray-600 transition-colors"
          aria-label="Email"
        >
          <Mail className="h-6 w-6" />
        </motion.a>
        <motion.a 
          href="https://wa.me/13055550123" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 10, color: '#25D366' }}
          className="p-2 rounded-full text-gray-600 transition-colors"
          aria-label="WhatsApp"
        >
          <Phone className="h-6 w-6" />
        </motion.a>
      </div>
    </motion.div>
  );
}
