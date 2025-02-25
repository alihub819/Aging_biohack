import React from 'react';

export default function Navigation() {
  return (
    <>
      <a href="/" className="text-gray-700 hover:text-teal-600">Home</a>
      <a href="/treatments" className="text-gray-700 hover:text-teal-600">Treatments</a>
      <a href="/about" className="text-gray-700 hover:text-teal-600">About</a>
      <a href="/blog" className="text-gray-700 hover:text-teal-600">Blog</a>
      <a href="/contact" className="text-gray-700 hover:text-teal-600">Contact</a>
    </>
  );
}