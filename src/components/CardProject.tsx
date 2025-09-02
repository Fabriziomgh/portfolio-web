import { TbBrandGithub, TbExternalLink } from 'react-icons/tb';

interface Props {
   name: string;
   description: string;
   img: string;
   highlights: string[];
   github?: string;
   url?: string;
}

export const CardProject = ({
   name,
   description,
   img,
   highlights,
   github,
   url,
}: Props) => {
   return (
      <div className="group rounded-xl p-6 transition-all duration-300 hover:shadow-lg bg-background-card">
         <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <div className="relative flex-shrink-0">
               <div className="relative h-48 w-full overflow-hidden rounded-lg  md:w-64">
                  <div className="absolute inset-4 overflow-hidden rounded">
                     <img
                        src={img}
                        alt={name}
                        className="h-full w-full rounded object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
                     />
                  </div>
               </div>
            </div>

            <div className="flex-1 space-y-4">
               <h3 className="text-xl font-semibold sm:text-2xl text-primary">
                  {name}
               </h3>

               <div className="flex flex-wrap gap-2">
                  {highlights.map((tech, index) => (
                     <span
                        key={index}
                        className="rounded-full px-3 py-1 text-sm font-medium bg-third text-white capitalize"
                     >
                        {tech}
                     </span>
                  ))}
               </div>

               <p className="text-sm leading-relaxed sm:text-base text-secondary">
                  {description}
               </p>

               <div className="flex gap-3">
                  {github && (
                     <a
                        href={github}
                        title={`Ir al repositorio del proyecto ${name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-lg border px-4 py-2 transition-all duration-200 hover:scale-105 border-border text-secondary"
                     >
                        <TbBrandGithub size={16} />
                        <span className="text-sm">Código</span>
                     </a>
                  )}

                  {url && (
                     <a
                        href={url}
                        title={`Ir al proyecto ${name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-lg px-4 py-2 transition-all duration-200 hover:scale-105 bg-third text-white"
                     >
                        <TbExternalLink size={16} />
                        <span className="text-sm">Ver Proyecto</span>
                     </a>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
};
