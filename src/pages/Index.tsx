
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <section className="py-20">
          <h1 className="text-4xl font-bold mb-6 text-slate-800 dark:text-slate-100">Making a Difference Together</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
            Our mission is to empower communities through sustainable development programs.
            Scroll down to learn more about our initiatives.
          </p>
          
          <div className="space-y-8">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-3 text-slate-800 dark:text-slate-100">Our Impact {i + 1}</h2>
                <p className="text-slate-600 dark:text-slate-300">
                  We've helped over 10,000 people access clean water, education, and healthcare.
                  Through our community-based approach, we ensure sustainable development and
                  long-term positive change in the communities we serve.
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
