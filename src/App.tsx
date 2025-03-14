import Hero from '@/components/sections/Hero';
import Experience from '@/components/sections/Experience';
import Education from '@/components/sections/Education';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';

import { Navbar } from '@/components/sections/Navbar';
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
