import Hero from '@/sections/Hero';
import Experience from '@/sections/Experience';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const App = () => {
   return (
      <main>
         <Navbar />

         <Hero />
         <div className="max-w-4xl mx-auto md:pt-40 pt-16 px-4">
            <Experience />
            <Skills />
            <Projects />
         </div>

         <Footer />
      </main>
   );
};

export default App;
