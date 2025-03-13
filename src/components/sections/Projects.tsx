import { CustomTitle } from '@/components/CustomTitle';
import { CustomLink } from '@/components/CustomLink';
import { Highlights } from '@/components/Highlights';

import { TbBrandGithub, TbCode, TbLink } from 'react-icons/tb';

import { cv } from '@/data/data';

const Projects = () => {
   const { projects } = cv;
   return (
      <section id="proyectos" className="mb-20">
         <CustomTitle>
            <TbCode />
            Proyectos
         </CustomTitle>

         {projects.map((item) => (
            <div
               key={item.name}
               className="grid grid-cols-1 md:grid-cols-3 md:gap-x-4"
            >
               <div>
                  <img
                     className="w-full mb-3 md:mb-0 md:h-48 h-64 rounded-xl shadow hover:scale-105 transition duration-500 cursor-pointer"
                     src={item.img}
                     alt=""
                  />
               </div>
               <div className="md:col-span-2">
                  <h4 className="text-2xl font-bold text-white mb-2  ">
                     {item.name}
                  </h4>
                  <Highlights highlights={item.highlights} />
                  <p className="mt-2 text-gray-400 ">{item.description}</p>

                  <div className="mt-6 flex items-center gap-2">
                     {item.isActive && (
                        <CustomLink
                           target
                           href={item.url}
                           title={`Visitar página del proyecto ${item.name}`}
                           icon={TbLink}
                        >
                           Visualizar
                        </CustomLink>
                     )}
                     <CustomLink
                        target
                        href={item.github}
                        title="Código fuente"
                        icon={TbBrandGithub}
                     >
                        Código
                     </CustomLink>
                  </div>
               </div>
            </div>
         ))}
      </section>
   );
};

export default Projects;
