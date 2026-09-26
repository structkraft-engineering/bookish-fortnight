const Footer = () => {
  return (
    <footer className="bg-navy text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
        
        {/* Company Info */}
        <div>
          <h3 className="text-gold mb-4">S.K. ASSOCIATES</h3>
          <p className="text-steel text-sm">
            Consulting Engineers and Rehabilitation Experts. Engineering Stronger Structures.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-gold mb-4">QUICK LINKS</h3>
          <ul className="text-steel text-sm space-y-2">
            <li>Structural Repairs</li>
            <li>Waterproofing</li>
            <li>Geotechnical Works</li>
            <li>Structural Audits</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-gold mb-4">CONTACT US</h3>
          <p className="text-steel text-sm">
            01, Govind Nagar Bldng, Near IOB Bank, Mira Road, Mumbai - 401107
          </p>
          <p className="text-gold mt-2 font-bold">9892021246 / 9702124266</p>
        </div>

      </div>

      <div className="text-center text-steel text-xs mt-12 border-t border-steel/30 pt-4">
        © 2026 S.K. Associates. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;