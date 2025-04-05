import { format } from '@formkit/tempo';
import { Highlights } from './Highlights';

interface Data {
   company: string;
   position: string;
   startDate: string | Date;
   endDate: string | Date;
   url?: string;
   summary?: string;
   highlights?: string[];
}

interface Props {
   data: Data[];
   formatType: string;
}

export const CustomTimeline = ({ data, formatType }: Props) => {
   return (
      <ol className="relative border-s border-gray-700">
         {data.map((item) => {
            const startDate = format(item.startDate, formatType);
            const endDate = format(item.endDate, formatType);
            const date = `${startDate} - ${endDate}`;

            return (
               <li key={item.company} className="mb-8 ms-4">
                  <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border  border-gray-900 bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-500 capitalize block">
                     {date}
                  </time>
                  <a
                     href={item.url}
                     target="_blank"
                     title={`Visitar sitio web de ${item.company}`}
                     className="inline-block font-fira-code-variable tracking-tighter  text-lg font-semibold hover:underline  active:underline text-yellow-200 "
                  >
                     {item.company}
                  </a>
                  <h4 className="text-sm font-semibold  text-gray-300">
                     {item.position}
                  </h4>
                  <p className="mb-4 mt-2 text-base font-normal text-gray-400 ">
                     {item.summary}
                  </p>

                  {item.highlights && (
                     <Highlights highlights={item.highlights} />
                  )}
               </li>
            );
         })}
      </ol>
   );
};
