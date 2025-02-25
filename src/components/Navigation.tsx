import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <>
      <Link to="/" className="text-gray-700 hover:text-teal-600">Home</Link>
      <Link to="/treatments" className="text-gray-700 hover:text-teal-600">Treatments</Link>
      <Link to="/about" className="text-gray-700 hover:text-teal-600">About</Link>
      <Link to="/blog" className="text-gray-700 hover:text-teal-600">Blog</Link>
      <Link to="/contact" className="text-gray-700 hover:text-teal-600">Contact</Link>
    </>
  );
}
