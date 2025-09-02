import { cv } from '@/data/data';
import { CardExperience } from '@/components/CardExperience';

interface Experience {
   company: string;
   position: string;
   url: string;
   startDate: string | Date;
   endDate: string | Date | null;
   description: string;
   highlights: string[];
   isActive?: boolean;
   isLast?: boolean;
}

const Experience = () => {
   const { work }: { work: Experience[] } = cv;

   return (
      <section id="experiencia" className="min-h-screen lg:mb-20 mb-10">
         <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl text-primary flex flex-wrap justify-center">
               Experiencia
               <span className="ml-3 text-third">Profesional</span>
            </h2>
            <p className="  text-secondary">
               Mi trayectoria profesional en el desarrollo de software y
               tecnología.
            </p>
         </div>

         <div className="relative space-y-6 md:space-y-8">
            {work.map((experience, index) => (
               <CardExperience
                  key={index}
                  company={experience.company}
                  position={experience.position}
                  startDate={experience.startDate}
                  endDate={experience.endDate}
                  url={experience.url}
                  description={experience.description}
                  highlights={experience.highlights}
                  isActive={experience.isActive}
                  isLast={index === work.length - 1}
               />
            ))}
         </div>

         <div className="mt-4 text-center">
            <p className="mt-8 text-sm text-secondary">
               En constante crecimiento profesional y aprendizaje de nuevas
               tecnologías.
            </p>
            <div className="h-px mt-2 w-full bg-border" />
         </div>
      </section>
   );
};

export default Experience;
