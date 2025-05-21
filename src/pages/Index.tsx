
import Navbar from "../components/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import { FaMapLocation, FaPhone, FaEnvelope, FaFacebookF, FaXTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const Index = () => {
  // Hover effect for motion elements
  const hoverEffect = {
    whileHover: { scale: 1.05 },
    transition: { duration: 0.3 }
  };

  // URLs for map and logo
  const logoUrl = 'https://prashraya.org/wp-content/uploads/elementor/thumbs/354150415_220248024272103_8189691252379910077_n-qtir2fw9zqtc7qrxft7est9yuk34qnuch8ihrepctc.jpg';
  const mapLink = 'https://www.google.com/maps/place/22%C2%B040%2710.8%22N+75%C2%B048%2719.0%22E/@22.669667,75.805278,17z';

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <section className="py-20">
          <h1 className="text-4xl font-bold mb-6">Making a Difference Together</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Our mission is to empower communities through sustainable development programs.
            Scroll down to learn more about our initiatives.
          </p>
          
          <div className="space-y-8">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-3">Our Impact {i + 1}</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  We've helped over 10,000 people access clean water, education, and healthcare.
                  Through our community-based approach, we ensure sustainable development and
                  long-term positive change in the communities we serve.
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      <motion.footer
        className="pt-10 pb-4 text-[#D0EFB1]"
        style={{ background: '#4D7298', fontFamily: 'Helvetica Neue, sans-serif' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 border-b pb-8" style={{ borderColor: '#77A6B6' }}>
            {/* Logo & About */}
            <motion.div className="md:w-1/4 flex flex-col items-center md:items-start gap-4" {...hoverEffect}>
              <div className="mr-4">
                <div className="w-20 h-20 bg-white rounded-md flex items-center justify-center text-blue-700">
                  <img src={logoUrl} alt="NGO Logo" className="w-16 h-16 object-contain" />
                </div>
              </div>
              <p className="text-sm leading-relaxed text-[#D0EFB1]/90 text-center md:text-left">
                © 2025 Prashraya Welfare Foundation | Empowering Lives, Building Futures | Together, we make a difference.
              </p>
            </motion.div>

            {/* Office Location (Map) */}
            <motion.div className="md:w-1/4 flex flex-col gap-2" {...hoverEffect}>
              <h2 className="text-lg font-bold mb-2" style={{ color: '#B3D89C' }}>Office Location</h2>
              {/* Placeholder for map */}
              <div
                style={{
                  width: '100%',
                  height: '120px',
                  background: '#77A6B6',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#D0EFB1',
                  fontSize: '0.9rem',
                  textAlign: 'center',
                }}
              >
                Map Placeholder
              </div>
            </motion.div>

            {/* Support Links */}
            <motion.div className="md:w-1/4 flex flex-col gap-2" {...hoverEffect}>
              <h2 className="text-lg font-bold mb-2" style={{ color: '#B3D89C' }}>Support Link</h2>
              <ul className="space-y-1" style={{ color: '#D0EFB1' }}>
                <li><a href="/" className="hover:underline hover:text-[#B3D89C]">Help Center</a></li>
                <li><a href="/" className="hover:underline hover:text-[#B3D89C]">Contact Us</a></li>
                <li><a href="/" className="hover:underline hover:text-[#B3D89C]">Payment Center</a></li>
                <li><a href="/" className="hover:underline hover:text-[#B3D89C]">Parent Community</a></li>
              </ul>
            </motion.div>

            {/* Contact Information */}
            <motion.div className="md:w-1/4 flex flex-col gap-2" {...hoverEffect}>
              <h2 className="text-lg font-bold mb-2" style={{ color: '#B3D89C' }}>Contact Information</h2>
              <p className="text-sm" style={{ color: '#D0EFB1' }}>Feel free to contact and reach us!</p>
              <div className="flex items-start gap-2 text-sm" style={{ color: '#D0EFB1' }}>
                <FaMapLocation className="mt-1" />
                104, Indore, Madhya Pradesh
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: '#D0EFB1' }}>
                <FaPhone />
                +91 88188 50707
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: '#D0EFB1' }}>
                <FaEnvelope />
                support@prashraya.org
              </div>
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-2 font-semibold text-sm w-max text-center"
                style={{
                  background: '#B3D89C',
                  color: '#4D7298',
                  borderRadius: '4px',
                  border: '1px solid #4D7298'
                }}
              >
                Find us
              </a>
            </motion.div>
          </div>

          {/* Newsletter & Socials */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 py-6 border-b" style={{ borderColor: '#77A6B6' }}>
            <div className="flex-1 flex flex-col md:flex-row md:items-center gap-4">
              <span className="font-semibold" style={{ color: '#B3D89C' }}>Subscribe us for more update & news !!</span>
              <form className="flex gap-2 w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter Your Email..."
                  className="rounded-full px-4 py-2 focus:outline-none w-full md:w-64"
                  style={{ background: '#D0EFB1', color: '#4D7298' }}
                />
                <Button 
                  className="font-semibold px-6 py-2"
                  style={{
                    background: '#B3D89C',
                    color: '#4D7298',
                    borderRadius: '8px',
                  }}
                >
                  SUBSCRIBE
                </Button>
              </form>
            </div>
            <div className="flex items-center gap-4 md:gap-3">
              <a href="https://www.facebook.com" target='_blank' rel="noopener noreferrer" 
                 className="hover:bg-[#B3D89C] bg-[#77A6B6]/50 rounded-full p-2">
                <FaFacebookF className="text-xl" />
              </a>
              <a href="https://twitter.com" target='_blank' rel="noopener noreferrer" 
                 className="hover:bg-[#B3D89C] bg-[#77A6B6]/50 rounded-full p-2">
                <FaXTwitter className="text-xl" />
              </a>
              <a href="https://www.instagram.com" target='_blank' rel="noopener noreferrer" 
                 className="hover:bg-[#B3D89C] bg-[#77A6B6]/50 rounded-full p-2">
                <FaInstagram className="text-xl" />
              </a>
              <a href="https://www.youtube.com" target='_blank' rel="noopener noreferrer" 
                 className="hover:bg-[#B3D89C] bg-[#77A6B6]/50 rounded-full p-2">
                <FaYoutube className="text-xl" />
              </a>
              <a href="https://www.linkedin.com" target='_blank' rel="noopener noreferrer" 
                 className="hover:bg-[#B3D89C] bg-[#77A6B6]/50 rounded-full p-2">
                <FaLinkedinIn className="text-xl" />
              </a>
            </div>
          </div>

          {/* Bottom Links */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 pt-4">
            <p className="text-center text-[#D0EFB1]/70 text-sm md:text-left">Copyright © 2025 Prashraya. All rights reserved.</p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-end text-[#D0EFB1]/80 text-sm">
              <a href="/" className="hover:underline hover:text-[#B3D89C]">Privacy Policy</a>
              <a href="/" className="hover:underline hover:text-[#B3D89C]">Terms & Condition</a>
              <a href="/" className="hover:underline hover:text-[#B3D89C]">FAQ</a>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
