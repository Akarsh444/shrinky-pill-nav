
import Navbar from "../components/Navbar/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <section className="py-20">
          <h1 className="text-4xl font-bold mb-6">Welcome to Our Website</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Scroll down to see the navbar transform into a pill shape!
          </p>
          
          <div className="space-y-8">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-3">Section {i + 1}</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, 
                  nisl in ultricies lobortis, nisl nisl aliquam nisl, eget aliquam nisl 
                  nisl eget nisl. Sed euismod, nisl in ultricies lobortis, nisl nisl 
                  aliquam nisl, eget aliquam nisl nisl eget nisl.
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600 dark:text-gray-300">
            &copy; 2025 My Company. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
