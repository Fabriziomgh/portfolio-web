import { cv } from '@/data/data';
import { CardProject } from '@/components/CardProject';

const Projects = () => {
   const { projects } = cv;

   return (
      <section id="proyectos" className="min-h-screen mb-10 lg:mb-20">
         <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl text-primary">
               Proyectos
               <span className="ml-3 text-third">Realizados</span>
            </h2>
            <p className=" text-secondary">
               Una selección de proyectos que demuestran mis habilidades en
               desarrollo web y las tecnologías que manejo.
            </p>
         </div>

         <div className="space-y-8">
            {projects.map((project, index) => (
               <CardProject
                  key={index}
                  name={project.name}
                  description={project.description}
                  img={project.img}
                  highlights={project.highlights}
                  github={project.github}
                  url={project.url}
               />
            ))}
         </div>

         <div className="mt-4 text-center">
            <p className="mt-8 text-sm text-secondary">
               Constantemente trabajando en nuevos proyectos y explorando
               tecnologías innovadoras.
            </p>
            <div className="h-px mt-2 w-full bg-border" />
         </div>
      </section>
   );
};

export default Projects;
