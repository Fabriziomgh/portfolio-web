import { cv } from '@/data/data';
import { TbMailShare, TbWorld } from 'react-icons/tb';
import { CustomLink } from '../CustomLink';

const {
   basics: {
      image,
      name,
      summary,
      profiles,
      email,
      level,
      location: { country, countryCode },
   },
} = cv;

const Hero = () => {
   const [p1, p2, p3] = summary.split('. ');
   return (
      <section id="sobremi" className="lg:mb-20 mb-10">
         <div className="mb-4 bg-green-800/60 flex justify-center items-center border border-green-500 py-1 px-4 rounded-2xl text-green-200 text-xs sm:text-sm max-w-[170px] sm:max-w-[200px]">
            Disponible para trabajar
         </div>
         <div className="flex flex-col-reverse lg:flex-row justify-between">
            <div className="max-w-xl">
               <h1 className="text-4xl font-bold tracking-tight text-gray-200 sm:text-5xl ">
                  {name}
               </h1>
               <h2 className="text-2xl tracking-tight  text-gray-300 sm:text-3xl">
                  {level}
               </h2>
               <h3 className="flex mt-2 items-center gap-x-2  tracking-tight text-gray-300 sm:text-2x">
                  {country}, {countryCode}
                  <TbWorld />
               </h3>

               <p className="mt-6 text-xl  text-gray-300">
                  {p1}. {p2}. <strong className="text-yellow-200">{p3}</strong>
               </p>
            </div>
            <img
               className="size-28 lg:size-40 rounded-full shadow shadow-gray-700 mb-2 lg:mb-0"
               src={image}
               alt="Fabrizio Gutierrez"
            />
         </div>

         <nav className="flex flex-wrap gap-4 mt-8">
            <CustomLink
               icon={TbMailShare}
               href={`mailto:${email}`}
               title={`Enviar correo electrónico a Fabrizio`}
            >
               Contáctame
            </CustomLink>
            {profiles.map((item) => (
               <CustomLink
                  key={item.name}
                  target
                  icon={item.icon}
                  href={item.url}
                  title={`Visitar perfil de ${item.name}`}
               >
                  {item.name}
               </CustomLink>
            ))}
         </nav>
      </section>
   );
};

export default Hero;
