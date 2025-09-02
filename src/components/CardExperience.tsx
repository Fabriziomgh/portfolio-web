import { diffMonths, format } from '@formkit/tempo';
import { TbCalendar } from 'react-icons/tb';

interface Props {
   company: string;
   position: string;
   url: string;
   startDate: string | Date;
   endDate: string | Date | null;
   description: string;
   highlights: string[];
   isActive?: boolean;
   isLast?: boolean;
}

export const CardExperience = ({
   company,
   position,
   url,
   startDate,
   endDate,
   description,
   highlights,
   isActive = false,
}: Props) => {
   const calculateMonthsOfWork =
      !isActive && endDate != null
         ? diffMonths(endDate, startDate)
         : 'Presente';

   return (
      <div>
         <div className=" bg-background-card border-border  rounded-xl border p-4 md:p-6 transition-all duration-300 hover:shadow-lg">
            <div className="mb-4">
               <div className="mb-2 flex items-center justify-between  gap-2 text-secondary">
                  <div className="flex items-center gap-2">
                     <TbCalendar size={18} strokeWidth={1.5} />
                     <span className="text-sm text-secondary">
                        {`${format(startDate, 'medium')} ${
                           endDate ? `- ${format(endDate, 'medium')}` : ''
                        }`}
                     </span>
                  </div>

                  {isActive ? (
                     <span className="rounded-full px-2 py-1 text-xs font-medium bg-third text-white">
                        {calculateMonthsOfWork}
                     </span>
                  ) : (
                     <span className="rounded-full px-2 py-1 text-xs font-medium bg-third text-white">
                        {calculateMonthsOfWork} Meses
                     </span>
                  )}
               </div>

               <a
                  href={url}
                  target="_blank"
                  title={`Visitar sitio web de ${company}`}
                  className="inline-block  tracking-tighter mb-1 text-xl font-semibold hover:underline  active:underline text-third "
               >
                  {company}
               </a>

               <h4 className="text-lg font-medium text-primary">{position}</h4>
            </div>

            <p className="mb-6 leading-relaxed text-secondary">{description}</p>

            <div className="space-y-3">
               <h5 className="text-sm font-medium text-primary">
                  Tecnologías y Habilidades aprendidas:
               </h5>
               <div className="flex flex-wrap gap-2">
                  {highlights.map((tech, index) => (
                     <span
                        key={index}
                        className="rounded-lg px-3 py-1 text-sm font-medium transition-transform duration-200 hover:scale-105 bg-border text-secondary cursor-pointer "
                     >
                        {tech}
                     </span>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};
