import { cv } from '@/data/data';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { TbMailShare } from 'react-icons/tb';
import { CustomLink } from '../CustomLink';

const {
   basics: { image, name, summary, profiles, email },
} = cv;

const Hero = () => {
   const myName = name.split(' ').at(0);
   const [p1, p2, p3] = summary.split('. ');
   return (
      <section id="sobremi" className="max-w-xl lg:mb-20 mb-10">
         <div className="flex items-center gap-x-4 mb-4 ">
            <Avatar className="size-16">
               <AvatarImage src={image} alt="@fabriziomgh" />
               <AvatarFallback>{myName ?? 'FG'}</AvatarFallback>
            </Avatar>

            <Badge
               className="hover:scale-105 transition rounded-full"
               variant="available"
            >
               Disponible para trabajar
            </Badge>
         </div>
         <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white">
            Hey, soy {myName}
         </h1>
         <p className="mt-6 text-xl text-gray-800 dark:[&>strong]:text-yellow-200 [&>strong]:text-yellow-500 [&>strong]:font-semibold dark:text-gray-300">
            {p1}. {p2}. <strong>{p3}</strong>
         </p>

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
