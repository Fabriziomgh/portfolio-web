import Hero from '@/components/sections/Hero';
import Experience from '@/components/sections/Experience';
import Education from '@/components/sections/Education';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Certificates from '@/components/sections/Certificates';

import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/Footer';

const App = () => {
   return (
      <main>
         <Navbar />

         <div className="max-w-4xl mx-auto md:pt-40 pt-24 px-4">
            <Hero />
            <Experience />
            <div className="flex flex-col md:flex-row  lg:gap-x-2 justify-evenly">
               <Education />
               <Certificates />
            </div>
            <Skills />
            <Projects />
         </div>

         <Footer />
      </main>
   );
};

export default App;
