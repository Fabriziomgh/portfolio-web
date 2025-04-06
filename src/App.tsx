import Hero from '@/sections/Hero';
import Experience from '@/sections/Experience';
import Education from '@/sections/Education';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const App = () => {
   return (
      <main>
         <Navbar />

         <div className="max-w-4xl mx-auto md:pt-40 pt-24 px-4">
            <Hero />
            <Experience />
            <Education />
            <Skills />
            <Projects />
         </div>

         <Footer />
      </main>
   );
};

export default App;
