
import Navbar from "../components/Navbar/Navbar";
import { Button } from "@/components/ui/button";

const Index = () => {
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
      
      <footer className="bg-blue-700 dark:bg-blue-800 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 - Organization Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Our NGO</h3>
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center text-blue-700">
                    <span className="font-bold text-lg">NGO</span>
                  </div>
                </div>
                <p className="text-sm">
                  © 2025 NGO Foundation | Empowering Lives, Building Futures | Together, we make a difference.
                </p>
              </div>
            </div>
            
            {/* Column 2 - Office Location */}
            <div>
              <h3 className="text-xl font-bold mb-4">Office Location</h3>
              <div className="bg-blue-600 dark:bg-blue-700 p-6 rounded-md h-48 flex items-center justify-center">
                <p className="text-center">Map Placeholder</p>
              </div>
            </div>
            
            {/* Column 3 - Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <p className="mb-2">Feel free to contact and reach us!</p>
              <p className="mb-2">📍 104, Indore, Madhya Pradesh</p>
              <p className="mb-2">📱 +91 88788 50707</p>
              <p className="mb-2">📧 support@ngo.org</p>
              
              <Button className="mt-4 bg-yellow-500 hover:bg-yellow-400 text-gray-900">
                Find us
              </Button>
            </div>
          </div>
          
          <div className="mt-12 border-t border-blue-600 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h4 className="text-lg font-medium mb-2">Subscribe for updates & news</h4>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Enter Your Email..." 
                    className="py-2 px-4 rounded-l-md text-gray-800 focus:outline-none"
                  />
                  <Button className="rounded-l-none bg-yellow-500 hover:bg-yellow-400 text-gray-900">
                    SUBSCRIBE
                  </Button>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-300">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">f</div>
                </a>
                <a href="#" className="hover:text-blue-300">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">t</div>
                </a>
                <a href="#" className="hover:text-blue-300">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">in</div>
                </a>
                <a href="#" className="hover:text-blue-300">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">ig</div>
                </a>
                <a href="#" className="hover:text-blue-300">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">yt</div>
                </a>
              </div>
            </div>
            
            <div className="mt-8 text-center text-sm">
              <p>Copyright © 2025 NGO. All rights reserved.</p>
              <div className="mt-2 flex justify-center space-x-4">
                <a href="#" className="hover:underline">Privacy Policy</a>
                <a href="#" className="hover:underline">Terms & Condition</a>
                <a href="#" className="hover:underline">FAQ</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
