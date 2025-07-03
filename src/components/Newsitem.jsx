import React from "react";
import { motion } from "framer-motion";

const Newsitem = ({ title, description, url, src, source, date }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-white dark:bg-zinc-900 text-black dark:text-white rounded-xl shadow-md overflow-hidden max-w-sm mx-auto hover:scale-105 transition-transform duration-300 border border-gray-200 dark:border-gray-700"
    >
      <img
        src={src || "/news.jpg"}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/news.jpg";
        }}
        alt="News"
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        {/* Source + Date badge row */}
        <div className="flex justify-between items-center mb-2">
          {source && (
            <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-1 rounded-full">
              {source}
            </span>
          )}
          {date && (
            <span className="text-xs text-gray-500">
              {new Date(date).toLocaleDateString()}
            </span>
          )}
        </div>

        {/* Title */}
        <h5 className="text-lg font-semibold mb-2">
          {title ? title.slice(0, 60) : "No Title"}
        </h5>

        {/* Description */}
        <p className="text-sm mb-4">
          {description
            ? description.slice(0, 100)
            : "News information not available."}
        </p>

        {/* Button */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition duration-300"
        >
          Go To Full News
        </a>
      </div>
    </motion.div>
  );
};

export default Newsitem;
