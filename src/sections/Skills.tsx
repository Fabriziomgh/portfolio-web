import { cv } from '@/data/data';
import { IconType } from 'react-icons';
import { CardTechnology } from '@/components/CardTechnology';

interface Technology {
   name: string;
   icon: IconType;
   description: string;
   category: string;
}

interface TechSection {
   title: string;
   icon: IconType;
   technologies: Technology[];
}

const Skills = () => {
   const { skills }: { skills: TechSection[] } = cv;
   return (
      <section id="tecnologias" className="min-h-screen lg:mb-20 mb-20 ">
         <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl text-primary">
               Mi Portfolio de
               <span className="ml-3 text-third">Tecnologías</span>
            </h2>
            <p className=" text-secondary">
               Explora las tecnologías y herramientas que utilizo para crear
               experiencias digitales excepcionales.
            </p>
         </div>

         <div className="space-y-16">
            {skills.map((section, sectionIndex) => (
               <div key={sectionIndex} className="space-y-8">
                  <div className="flex items-center gap-4">
                     <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-third">
                        <div className="text-white">
                           <section.icon size={32} strokeWidth={1.5} />
                        </div>
                     </div>
                     <h2 className="text-2xl font-semibold sm:text-3xl text-primary">
                        {section.title}
                     </h2>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                     {section.technologies.map((tech, techIndex) => (
                        <CardTechnology
                           key={techIndex}
                           name={tech.name}
                           icon={tech.icon}
                           description={tech.description}
                           category={tech.category}
                        />
                     ))}
                  </div>
               </div>
            ))}
         </div>

         <div className="mt-4 text-center">
            <p className="mt-8 text-sm text-secondary">
               Siempre explorando nuevas tecnologías y mejorando mis
               habilidades.
            </p>
            <div className="h-px mt-2 w-full bg-border" />
         </div>
      </section>
   );
};

export default Skills;
