import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <>
      <Link to="/" className="text-white hover:text-teal-600">Home</Link>
      <Link to="/treatment" className="text-white hover:text-teal-600">Treatments</Link>
      <Link to="/about" className="text-white hover:text-teal-600">About</Link>
      <Link to="/blog" className="text-white hover:text-teal-600">Blog</Link>
      <Link to="/contact" className="text-white hover:text-teal-600">Contact</Link>
    </>
  );
}
