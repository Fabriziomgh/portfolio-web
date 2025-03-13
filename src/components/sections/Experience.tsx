import { CustomTitle } from '@/components/CustomTitle';
import { TbBriefcase, TbCirclesRelation } from 'react-icons/tb';
import { cv } from '@/data/data';
import { format } from '@formkit/tempo';
import { Highlights } from '@/components/Highlights';
const Experience = () => {
   const { work } = cv;
   return (
      <section id="experiencia" className="lg:mb-20 mb-10">
         <CustomTitle>
            <TbBriefcase />
            Experiencia Profesional
         </CustomTitle>

         <div className="space-y-2">
            {work.map((item) => {
               const startDate = format(item.startDate, 'short');
               const endDate = format(item.endDate, 'short');

               return (
                  <div
                     key={item.name}
                     className="grid grid-cols-1 lg:grid-cols-2"
                  >
                     <div>
                        <div className="flex gap-2">
                           <h3 className="text-xl font-bold text-yellow-400 ">
                              {item.name}
                           </h3>
                           <a
                              className="hover:scale-105 transition mt-1"
                              href={item.url}
                              target="_blank"
                           >
                              <TbCirclesRelation size={18} />
                           </a>
                        </div>
                        <h4 className="font-semibold text-xl text-gray-600 ">
                           {item.position}
                        </h4>
                        <time className="p-0 m-0 text-sm text-gray-600/80 ">
                           {startDate} - {endDate}
                        </time>
                     </div>

                     <div className="mt-2 md:mt-0">
                        <p className=" text-gray-600  text-[14px]">
                           {item.summary}
                        </p>
                        <Highlights highlights={item.highlights} />
                     </div>
                  </div>
               );
            })}
         </div>
      </section>
   );
};

export default Experience;
