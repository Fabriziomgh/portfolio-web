import { CustomTitle } from '@/components/CustomTitle';
import { TbUserShield } from 'react-icons/tb';
import { cv } from '@/data/data';

const Skills = () => {
   const {
      skills: { technologies },
   } = cv;
   return (
      <section id="tecnologias" className="mb-20">
         <CustomTitle>
            <TbUserShield />
            Tecnologías
         </CustomTitle>

         <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-y-8">
            {technologies.map(({ name, icon: Icon }) => (
               <div key={name} className="flex flex-col items-center">
                  <Icon className="size-20 " />
                  <span className="text-gray-300 font-bold text-sm mt-2">
                     {name}
                  </span>
               </div>
            ))}
         </div>
      </section>
   );
};

export default Skills;
