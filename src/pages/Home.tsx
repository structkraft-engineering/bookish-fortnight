import { motion } from 'framer-motion';
import { FaShieldAlt, FaTint, FaHardHat, FaChartLine } from 'react-icons/fa';

const Home = () => {
  const services = [
    { icon: <FaShieldAlt />, title: "Structural Repairs", desc: "FRP wrapping, column jacketing, and beam strengthening." },
    { icon: <FaTint />, title: "Waterproofing", desc: "Terrace, water tanks, and WC waterproofing solutions." },
    { icon: <FaHardHat />, title: "Geotechnical", desc: "Guniting, anchoring, and MS safety walls." },
    { icon: <FaChartLine />, title: "Structural Audits", desc: "NDT testing, core cutting, and structural health monitoring." },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-navy text-white py-32 px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl mb-6 leading-tight"
          >
            ENGINEERING <span className="text-gold">STRONGER</span> STRUCTURES
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-steel max-w-2xl mb-10"
          >
            Specialized Retrofitting, Rehabilitation & Geotechnical Solutions for a Sustainable Future.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gold text-navy px-8 py-4 font-bold text-lg rounded hover:bg-white transition-colors"
          >
            REQUEST A STRUCTURAL AUDIT
          </motion.button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl text-navy text-center mb-4">OUR CORE SERVICES</h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border-t-4 border-navy hover:border-gold transition-all duration-300 p-8 shadow-lg rounded-lg group"
            >
              <div className="text-gold text-5xl mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-navy text-xl mb-3">{service.title}</h3>
              <p className="text-steel">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;