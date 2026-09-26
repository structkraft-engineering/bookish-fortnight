import { Link } from 'react-router-dom';
import { FaHardHat } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-navy text-white py-4 px-8 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <FaHardHat className="text-gold text-3xl" />
          <div>
            <h1 className="text-xl tracking-wider">S.K. ASSOCIATES</h1>
            <p className="text-xs text-steel tracking-widest">RETROFITTING & REHABILITATION</p>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 font-semibold text-sm tracking-wide items-center">
          <Link to="/" className="hover:text-gold transition-colors">HOME</Link>
          <Link to="/services" className="hover:text-gold transition-colors">SERVICES</Link>
          <Link to="/projects" className="hover:text-gold transition-colors">PROJECTS</Link>
          <Link to="/about" className="hover:text-gold transition-colors">ABOUT</Link>
          <Link to="/contact" className="bg-gold text-navy px-4 py-2 rounded hover:bg-white transition-colors">CONTACT</Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;