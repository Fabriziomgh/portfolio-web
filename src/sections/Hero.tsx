import { cv } from '@/data/data';
import { TbCircle, TbMailShare, TbMapPin } from 'react-icons/tb';

import { ParticlesBackground } from '@/components/ParticlesBackground';

const Hero = () => {
   const {
      basics: {
         image,
         name,
         summary,
         profiles,
         label,
         email,
         location: { country, countryCode },
      },
   } = cv;

   return (
      <section
         id="resumen"
         className="relative min-h-screen overflow-hidden lg:pt-28  pt-24 pb-10"
      >
         <div className="absolute inset-0">
            <ParticlesBackground />

            <div
               className="absolute inset-0 opacity-5 
                bg-[image:linear-gradient(var(--color-third)_1px,transparent_1px),linear-gradient(90deg,var(--color-third)_1px,transparent_1px)] 
                bg-[size:50px_50px]"
            />
         </div>

         <div className="relative z-10 flex min-h-[calc(100vh-5rem)] items-center px-4 sm:px-6 lg:px-8 pt-8">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
               <div className="animate-fade-right animate-duration-800 animate-delay-150 animate-ease-in">
                  <div className="flex justify-center lg:justify-start mb-8">
                     <div
                        className="inline-flex items-center gap-2 rounded-full px-4 py-2 backdrop-blur-sm 
                     bg-[rgba(255,137,4,0.1)] border border-[rgba(255,137,4,0.3)]"
                     >
                        <TbCircle
                           size={8}
                           className="animate-pulse fill-current text-third"
                        />
                        <span className="text-sm font-medium text-third">
                           Disponible para trabajar
                        </span>
                     </div>
                  </div>

                  <div className="mb-6 text-center lg:text-start">
                     <h1 className="mb-2 text-4xl font-bold sm:text-5xl lg:text-6xl text-primary ">
                        {name}
                     </h1>
                     <h2 className="text-2xl font-semibold sm:text-3xl text-third">
                        {label}
                     </h2>
                  </div>

                  <div className="mb-8 space-y-4 text-center lg:text-start">
                     <p className="text-lg leading-relaxed text-secondary">
                        {summary.p1}
                        <span className="font-semibold text-primary">
                           {summary.p2}
                        </span>
                     </p>
                     <p className="text-base leading-relaxed text-secondary">
                        {summary.p3}
                     </p>
                  </div>

                  <div className="mb-8 flex items-center gap-2 text-secondary place-self-center lg:place-self-start">
                     <TbMapPin size={16} />
                     <span>
                        {country},
                        <span className="text-third ml-2">{countryCode}</span>
                     </span>
                  </div>

                  <div className="mb-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                     <a
                        href={`mailto:${email}`}
                        title={`Enviar correo electronico a Fabrizio al correo ${email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-300 hover:scale-105 bg-background-card border border-border hover:border-third hover:bg-[rgba(255, 137, 4, 0.05)]"
                     >
                        <TbMailShare className="h-5 w-5 transition-colors group-hover:text-white text-third" />
                        <span className="font-medium transition-colors group-hover:text-white text-primary">
                           Enviar Correo
                        </span>
                     </a>
                     {profiles.map(({ icon: Icon, url, name }) => (
                        <a
                           key={name}
                           href={url}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="group flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-300 hover:scale-105 bg-background-card border border-border hover:border-third hover:bg-[rgba(255, 137, 4, 0.05)]"
                        >
                           <Icon className="h-5 w-5 transition-colors group-hover:text-white text-third" />
                           <span className="font-medium transition-colors group-hover:text-white text-primary">
                              {name}
                           </span>
                        </a>
                     ))}
                  </div>
               </div>

               <div className="flex justify-center lg:justify-end transition-all duration-1000 delay-300 animate-fade-left animate-duration-700 animate-delay-150 animate-ease-in">
                  <div className="group relative ">
                     <div className="absolute -inset-8 rounded-2xl opacity-50 blur-2xl transition-all duration-500 group-hover:opacity-70 bg-third" />

                     <div className="relative flex h-72 w-72 items-center justify-center overflow-hidden rounded-2xl transition-transform duration-500 group-hover:scale-105 bg-background-card border-2 border-border">
                        <div className="flex flex-col items-center justify-center text-center p-4">
                           <img
                              className="rounded-2xl"
                              src={image}
                              alt="Foto de fabrizio gutierrez"
                           />
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Hero;
