import { TbCirclesRelation } from 'react-icons/tb';
import { cv } from '@/data/data';
import { format } from '@formkit/tempo';

export const EducationContent = () => {
   const { education } = cv;
   return (
      <>
         {education.map((item) => {
            const startYear = format(item.startDate, 'YYYY');
            const endYear = format(item.endDate, 'YYYY');
            return (
               <div key={item.institution} className="mt-2">
                  <div className="flex gap-2">
                     <h3 className="text-xl font-bold ">{item.institution}</h3>
                     <a
                        className="hover:scale-105 transition mt-1"
                        href={item.url}
                        target="_blank"
                     >
                        <TbCirclesRelation size={18} />
                     </a>
                  </div>
                  <h4 className=" text-gray-600 ">{item.area}</h4>
                  <time className="p-0 m-0 text-sm text-gray-600/80">
                     {startYear} - {endYear}
                  </time>
               </div>
            );
         })}
      </>
   );
};
