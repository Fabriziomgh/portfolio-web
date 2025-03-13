import { cv } from '@/data/data';
import { format } from '@formkit/tempo';
import { TbCirclesRelation } from 'react-icons/tb';

export const CertificationsContent = () => {
   const { certificates } = cv;
   return (
      <>
         {certificates.map((item) => {
            const date = format(item.date, 'medium');

            return (
               <div key={item.name} className="mt-2">
                  <div className="flex gap-2">
                     <h3 className="text-xl font-bold text-yellow-400 ">
                        {item.issuer}
                     </h3>
                     <a
                        className="hover:scale-105 transition mt-1"
                        href={item.url}
                        target="_blank"
                     >
                        <TbCirclesRelation size={18} />
                     </a>
                  </div>
                  <h4 className=" text-gray-600 ">{item.name}</h4>
                  <time className="p-0 m-0 text-sm text-gray-600/80 ">
                     {date}
                  </time>
               </div>
            );
         })}
      </>
   );
};
