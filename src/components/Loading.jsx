import React from 'react';
import { motion } from 'framer-motion';

const Loading = ({ category = "general" }) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        {/* Spinner Container */}
        <motion.div
          className="relative w-32 h-32 mx-auto mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Outer Ring */}
          <motion.div
            className="absolute inset-0 border-8 border-blue-300 rounded-full opacity-30"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Spinning Ring */}
          <motion.div
            className="absolute inset-0 border-t-8 border-blue-500 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />

          {/* Center Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-12 h-12 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path 
                fillRule="evenodd" 
                d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" 
                clipRule="evenodd" 
              />
              <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
            </svg>
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-white mb-3">
            Loading News
          </h2>
          <p className="text-gray-300 text-lg capitalize mb-6">
            Fetching latest <span className="text-blue-400 font-semibold">{category}</span> headlines
          </p>

          {/* Animated Dots */}
          <div className="flex justify-center gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-blue-500 rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Loading;